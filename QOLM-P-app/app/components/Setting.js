/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { ShowTabBar } from '../action/TabbarHandle'
import NavigationBar from '../common/NavBarCommon'
import List from './SettingComponents/listView'

class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title={'我的'}/>
        <List />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e8e8e8'
  },
});

export default Setting
