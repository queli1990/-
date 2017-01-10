import React,{ Component } from 'react';

import {
  View,
  Image,
  ListView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

const {width} = Dimensions.get('window')

import myData from '../../../myPage_info';

var ds = new ListView.DataSource({rowHasChanged:(r1:r2) => r1 !== r2});

class list extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <ListView
        dataSource = {ds.cloneWithRows(myData.data)}
        renderRow = {this.renderRow.bind(this)}
        contentContainerStyle = {styles.listViewStyle}
      />
    )
  }

  renderRow(rowData,sectionId,rowID,highlightRow){
    return (
      <TouchableOpacity onPress={this.pushMyInfo.bind(this)}>
        <View style={styles.cellContentStyle}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={styles.imageStyle} source={{uri:rowData.icon}} />
            <Text style={styles.titleStyle}>{rowData.title}</Text>
          </View>
          <Text style={styles.arrowStyle}>{'>'}</Text>
        </View>
      </TouchableOpacity>

    )
  }

  pushMyInfo(){
    console.log(this.props);
  }

}

const styles = StyleSheet.create({
  listViewStyle:{
    flex:1,
  },
  cellContentStyle:{
    flexDirection:'row',
    width:width,
    padding:15,
    justifyContent:'space-between'
  },
  imageStyle:{
    width:40,
    height:40,
    borderRadius:20,
  },
  titleStyle:{
    marginLeft:8,
    fontSize:16,
    color:'gray'
  },
  arrowStyle:{
    fontSize:20,
    color:'black'
  }
})

export default list
