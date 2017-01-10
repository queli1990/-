import React, { Component } from 'react';
import { WebView,AppRegistry,Dimensions,View } from 'react-native';

var { height } = Dimensions.get('window')

class MyWeb extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {
          (()=>{
            switch (this.props.url) {
              case '血压':
                return  <WebView source={require('./webs/xueya.html')}/>
              case '血糖':
                return <WebView source={require('./webs/xuetang.html')}/>
              case '心率':
                return <WebView source={require('./webs/xinlv.html')}/>
              case '体温':
                return <WebView source={require('./webs/chart.html')}/>
              default:

            }
          })()
        }
      </View>
    );
  }


}

export default MyWeb




{/* <WebView
  style={{
    height:height
  }}
  // source={{ uri: this.props.url }}
  source={require('./webs/xinlv.html')}
  startInLoadingState={true}
  domStorageEnabled={true}
  javaScriptEnabled={true}
  scalesPageToFit={true}
/> */}
