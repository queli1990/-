import React from 'react';
import {
  View,
  Navigator,
  Image,
  StyleSheet,
  Platform
} from 'react-native';
import { connect } from 'react-redux'

import HomeContainer from './HomeContainer'
import SettingContainer from './SettingContainer'
import HealthContainer from './HealthContainer'
import ChatContainer from './ChatContainer'

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons';

import reducer from '../reducers/rootReducer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home'
    };
  }

  gesture(Navigator){
    debugger
    let configure = Navigator.SceneConfigs.PushFromRight;
    return {
      ...configure,
      gestures:{}//或者改成null
    };
  }

  render () {
    const { reducer } = this.props;
    // console.log("============",reducer.tabbarHeight);
    let over = reducer.tabbarHeight === 0 ? 'hidden' : 'visible';
    // console.log('是否显示',over);
    return (
      <TabNavigator
        tabBarStyle={{backgroundColor:'white',height:reducer.tabbarHeight,overflow: reducer.tabbarHeight === 0 ? 'hidden' : 'visible'}}
        sceneStyle = {{paddingBottom : reducer.tabbarHeight}}
        style={{backgroundColor:'white'}}
      >
        <TabNavigator.Item
          title='首页'
          selected={this.state.selectedTab === 'home'}
          renderIcon = {()=><Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
          onPress={()=> this.setState({ selectedTab : 'home' })}
        >
          {/* <Navigator
            initialRoute = {{name:'首页',component:HomeContainer}}
            configureScene={this.gesture.bind(this,Navigator)}
            renderScene = {(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />;
            }}
          /> */}
          <HomeContainer {...this.props}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          title='聊天'
          selected={this.state.selectedTab === 'chat'}
          renderIcon = {()=><Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
          onPress={()=> this.setState({ selectedTab : 'chat' })}
        >
          {/* <Navigator
            initialRoute = {{name:'首页',component:HomeContainer}}
            configureScene={this.gesture.bind(this,Navigator)}
            renderScene = {(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />;
            }}
          /> */}
          <ChatContainer {...this.props}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          title='健康'
          selected={this.state.selectedTab === 'health'}
          renderIcon = {()=><Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
          onPress={()=> this.setState({ selectedTab : 'health' })}
        >
          {/* <Navigator
            initialRoute = {{name:'首页',component:HomeContainer}}
            configureScene={this.gesture.bind(this,Navigator)}
            renderScene = {(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />;
            }}
          /> */}
          <HealthContainer {...this.props}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          title='我的'
          selected={this.state.selectedTab === 'setting'}
          renderIcon = {()=><Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
          renderSelectedIcon = {() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
          onPress={()=> this.setState({ selectedTab : 'setting' })}
        >
          {/* <Navigator
            initialRoute = {{name:'设置',component:SettingContainer}}
            configureScene={this.gesture.bind(this,Navigator)}
            // configureScene={()=>{
            //   return Navigator.SceneConfigs.PushFromRight;//FloatFromBottom
            // }}
            renderScene = {(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator} />;
            }}
          /> */}
          <SettingContainer {...this.props}/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  iconStyle:{
    width:Platform.OS === 'ios' ? 30 : 25,
    height:Platform.OS === 'ios' ? 30 : 25
  }
})

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App)
