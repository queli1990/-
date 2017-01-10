import React from 'react';
import {
  Linking,
  MapView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export default class CustomView extends React.Component {
  render() {
    if (this.props.currentMessage.location) {
      return (
        <View style={{width:50,height:50,backgroundColor:'cyan'}}>
          
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
  },
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
});

CustomView.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  mapViewStyle: {},
};

CustomView.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  mapViewStyle: View.propTypes.style,
};
