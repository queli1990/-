'use strict'

import React,{ Component } from 'react'
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text
} from 'react-native'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window');

class TopScrollView extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:width,
    backgroundColor:'white'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
})

export default TopScrollView
