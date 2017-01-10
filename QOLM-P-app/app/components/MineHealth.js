import React,{Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions
} from 'react-native'

import NavigationBar from '../common/NavBarCommon'

var {width} = Dimensions.get('window')

class MineHealthPage extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    <View style={styles.container}>
      <NavigationBar title={'个人健康档案'} leftTitle={'<'} leftAction={this._backTo} />
      <View style={{width:width,height:30,backgroundColor:'gray',justifyContent:'center',alignItems:'center'}}>
        <Text>{'基本资料（必须填）'}</Text>
      </View>
      <View style={styles.view1}>
        <View>
          <Text>{'姓名'}</Text>
          <View style={{borderWidth:1,width:60,borderColor:'gray'}}></View>
        </View>
        <View>
          <Text>{'性别'}</Text>
          <Text>{'男'}</Text>
          <Text>{'女'}</Text>
        </View>
      </View>
      <View style={styles.view1}></View>
      <View style={styles.view1}></View>

    </View>
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  view1:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  view2:{

  },

})

export default MineHealthPage
