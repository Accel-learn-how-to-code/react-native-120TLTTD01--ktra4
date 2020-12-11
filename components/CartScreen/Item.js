import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

//data
import cart from '../../Data/cart';

export default class Item extends Component {
  render() {
    const {item323, controlModal323} = this.props;
    let totalPrice323 = item323.price * item323.quantity;
    return (
      <TouchableOpacity style={styles.container323} onPress={controlModal323}>
        <Image
          source={{
            uri: item323.image,
          }}
          style={styles.icon323}
        />
        <View style={styles.infor323}>
          <View>
            <Text style={styles.title323}>{item323.title}</Text>
            <Text>Số lượng x{item323.quantity}</Text>
          </View>
          <View style={styles.totalPrice323}>
            <Text style={styles.priceLabel323}>{item323.price}.000 đ</Text>
            <Text>{totalPrice323}.000 đ</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container323: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  icon323: {
    height: 45,
    width: 45,
  },
  infor323: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title323: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  totalPrice323: {
    flex: 1,
    alignItems: 'flex-end',
  },
  priceLabel323: {
    fontSize: 17,
  },
});
