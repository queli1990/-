import React,{ Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import NavigationBar from '../common/NavBarCommon'
import WebPage from './HealthComponents/WebPages'

var { width } = Dimensions.get('window')

class Health extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <NavigationBar title={'健康'}/>

        <ScrollView>
          <View style={styles.personlInfoStyle}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:60,height:60,borderRadius:30,marginLeft:8}} source={{uri:'icon1'}}/>
              <Text style={{marginLeft:8}}>{'张三'}</Text>
            </View>
            <Text style={{fontSize:16,color:'gray',marginRight:8}}>{'>'}</Text>
          </View>

          <Space />
          <TouchableOpacity onPress={this.click.bind(this,'血压')}>
            <CellModel
              title = {'血压'}
              titleValue = {'110/70mmHg'}
              time = {'最后一次测量:2016-10-25 16:50:23'}
            />
          </TouchableOpacity>

          <Space />
          <TouchableOpacity onPress={this.click.bind(this,'心率')}>
            <CellModel
              title = {'心率'}
              titleValue = {'75次/分钟'}
              time = {'最后一次测量:2016-10-25 16:50:23'}
            />
          </TouchableOpacity>


          <Space />
          <TouchableOpacity onPress={this.click.bind(this,'血糖')}>
            <CellModel
              title = {'血糖'}
              titleValue = {'5mmol'}
              time = {'最后一次测量:2016-10-25 16:50:23'}
            />
          </TouchableOpacity>


          <Space />
          <TouchableOpacity onPress={this.click.bind(this,'体温')}>
            <CellModel
              title = {'体温'}
              titleValue = {'37'}
              time = {'最后一次测量:2016-10-25 16:50:23'}
            />
          </TouchableOpacity>

        </ScrollView>

      </View>
    )
  }

  click(url){
    console.log(url);
    this.props.navigator.push({
      component:WebPage,
      passProps:{url}
    })
  }

}

class CellModel extends Component {
  render (){
    return (
      <View style={{flexDirection:'row',borderWidth:2,marginTop:10,marginRight:8,marginLeft:8,borderColor:'gray',justifyContent:'space-between',alignItems:'center',padding:10}}>
        <View style={{marginLeft:8}}>
          <View style={{flexDirection:'row',}}>
            <Text>{this.props.title}</Text>
            <Text>{this.props.titleValue}</Text>
          </View>
          <Text style={{marginTop:5}}>{this.props.time}</Text>
        </View>
        <Image source={{uri:'icon1'}} style={{width:60,height:60,borderRadius:30}}/>
      </View>
    )
  }
}

class Space extends Component {
  render (){
    return (
      <View style={{width:width,height:20,backgroundColor:'#e8e8e8'}} />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  personlInfoStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:5
  },



})

export default Health
