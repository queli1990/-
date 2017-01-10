import React,{Component} from 'react'

import {
  View,
  Image,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import jsonData from '../../../firstPage_rowScroll.json'

var {width} = Dimensions.get('window');
var ds = new ListView.DataSource({rowHasChanged:(r1:r2) => r1 !== r2});

class rowScrollView extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <View>
        <ListView
          dataSource = {ds.cloneWithRows(jsonData.data)}
          renderRow = {this.renderRow.bind(this)}
          contentContainerStyle = {styles.listViewStyle}
        />
      </View>
    )
  }

  renderRow (rowData) {
    return (
      <TouchableOpacity activeOpacity={0.5} >
        <View style={styles.cellContentStyle}>
          <Image style={styles.imageStyle} />
          <Text style={styles.textStyle}>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}



const styles = StyleSheet.create({
  listViewStyle:{
    flexDirection:'row',
    alignItems:'flex-start',
    flexWrap:'wrap',
  },
  cellContentStyle:{
    padding:5,
    width:width/3,
    justifyContent:'center',
    alignItems:'center',
  },
  imageStyle:{
    backgroundColor:'yellow',
    width:width/6,
    height:width/6,
    resizeMode:'contain',
  },
  textStyle:{
    marginTop:5,
    color:'gray',
    fontSize:14,
  }
})

export default rowScrollView
