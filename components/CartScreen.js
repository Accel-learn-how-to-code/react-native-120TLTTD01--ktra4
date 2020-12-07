import React, {Component} from 'react';
import {Text, View} from 'react-native';
import data from '../Data/data';
export default class CartScreen extends Component {
  render() {
    console.log('test 2 arr length ' + data.length);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Gio hang!</Text>
      </View>
    );
  }
}
