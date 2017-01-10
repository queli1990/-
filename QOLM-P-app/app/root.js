'use strict'

import React from 'react'
import { Navigator } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import App from './containers/app';

const store = configureStore();

class Root extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Navigator
              initialRoute = {{component:App}}
              // configureScene={()=>{
              //   return Navigator.SceneConfigs.PushFromRight;//FloatFromBottom
              // }}
              configureScene = {this.gesture.bind(this,Navigator)}
              renderScene = {(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />;
              }}
            />
            {/* <App /> */}
      </Provider>
    )
  }

  gesture(Navigator){
    let configure = Navigator.SceneConfigs.PushFromRight;
    return {
      ...configure,
      // gestures:{}//或者改成null
    };
  }
}



export default Root;
