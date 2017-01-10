import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import TopScrollView from './TopScrollView.js'
import RowScrollView from './rowScrollView'
import listViewData from '../../../firstPage_listView'

var ds = new ListView.DataSource({rowHasChanged:(r1:r2) => r1 !== r2});

const {width} = Dimensions.get('window')

class BottomList extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource = {ds.cloneWithRows(listViewData['T1348647853363'])}
          renderRow = {this.renderRow.bind(this)}
          // contentContainerStyle = {styles.listViewStyle}
          renderHeader = {this.renderHeader.bind(this)}
        />
      </View>
    )
  }

  renderHeader() {
    return (
      <View>
        <TopScrollView />
        <RowScrollView />
      </View>
    )
  }

  //cell
  renderRow(rowData){
    return (
      <View style = {styles.cellContentStyle}>
        <Image style={styles.imageStyle} source={{uri:rowData.imgsrc}}/>
        <View style={styles.rightViewStyle}>
          <Text style={styles.titleStyle}>{rowData.title}</Text>
          <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  cellContentStyle:{
    flexDirection:'row',
    padding:10,
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:0.5,
  },
  imageStyle:{
    width:90,
    height:90,
  },
  rightViewStyle:{
    width:width-90-25,
    marginLeft:8,
    // marginRight:8
  },
  titleStyle:{
    fontSize:16,
    marginBottom:5,
    padding:8
  },
  subTitleStyle:{
    color:'gray',
    padding:8
  }
})




export default BottomList
