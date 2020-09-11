import React, {Component} from 'react';
import {Alert, StyleSheet, View, Button} from 'react-native';
//import Button from 'react-native-button';

export default class Buttonn extends Component {
  _onPressButton = () => {
    Alert.alert('You pressed the button !');
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Button onPress={this._onPressButton} title="Button" color="green"></Button>
        </View>
      </View>
    );
  }
}
