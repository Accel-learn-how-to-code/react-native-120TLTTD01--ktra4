import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class CartScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.header323}>
          <Text style={styles.headerTilte323}>Giỏ hàng của bạn</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header323: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTilte323: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
