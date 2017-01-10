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
import DetailContainer from '../containers/DetailContainer'
import NavBarCommon from '../common/NavBarCommon'
import BottomListView from './HomeCompontents/bottomListView'

class Setting extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavBarCommon title={'首页'} />
        <BottomListView />
      </View>
    );
  }

  _goDetail(){
    const { reducer, navigator, dispatch } = this.props;
    navigator.push({
      component:DetailContainer
    });
    dispatch(ShowTabBar(false))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default Setting
