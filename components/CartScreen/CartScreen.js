import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import firestore from '@react-native-firebase/firestore';

//data
import cart323 from '../../Data/cart';

//component
import Title323 from './Title';
import Header323 from './Header';
import Information323 from './Information';
import Time323 from './Time';
import Item323 from './Item';
import ItemModal323 from './ItemModal';

export default class CartScreen extends Component {
  constructor() {
    super();
    this.state = {
      count323: 0,
    };
  }
  refreshScreen323 = () => {
    this.setState({
      count323: ++this.state.count323,
    });
  };

  buyItem323 = async () => {
    const ref = firestore().collection('cart');
    await ref.add({
      cart323,
    });
  };

  render() {
    let listItem323 = cart323.map((item323) => {
      return (
        <Item323
          controlModal323={() => this.itemModal323.controlModal323(item323)}
          item323={item323}
          key={item323.id}
        />
      );
    });

    let totalPrice323 = cart323.reduce(
      (total323, currentItem323) =>
        total323 + currentItem323.price * currentItem323.quantity,
      0,
    );
    return (
      <>
        <Header323 />

        <ScrollView style={styles.container323}>
          <Title323 title323="Thông tin đơn hàng" />
          <Information323 />

          <Title323 title323="Thời gian nhận hàng" />
          <Time323 />

          <Title323 title323="Chi tiết đơn hàng" />
          {listItem323.length !== 0 ? (
            listItem323
          ) : (
            <View style={styles.priceHolder323}>
              <View style={styles.price323}>
                <Text style={styles.title323}>Giỏ hàng trống</Text>
                <View style={styles.priceLabel323}>
                  <Text style={styles.title323}>0 đ</Text>
                </View>
              </View>
            </View>
          )}

          <View style={styles.priceHolder323}>
            <View style={styles.price323}>
              <Text style={styles.title323}>Tạm tính</Text>
              <View style={styles.priceLabel323}>
                <Text style={styles.title323}>{totalPrice323}.000 đ</Text>
              </View>
            </View>

            <View style={styles.price323}>
              <Text style={styles.title323}>Phí giao hàng</Text>
              <View style={styles.priceLabel323}>
                <Text style={styles.title323}>Miễn phí</Text>
              </View>
            </View>
          </View>

          <View style={{...styles.priceHolder323, paddingVertical: 15}}>
            <View style={styles.price323}>
              <Text style={{...styles.title323, fontWeight: 'bold'}}>
                Tổng cộng
              </Text>
              <View style={styles.priceLabel323}>
                <Text style={{...styles.title323, fontWeight: 'bold'}}>
                  {totalPrice323}.000 đ
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button323} onPress={this.buyItem323}>
          <Text>Thanh toán</Text>
        </TouchableOpacity>

        <ItemModal323
          ref={(value) => (this.itemModal323 = value)}
          refreshScreen323={this.refreshScreen323}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container323: {
    backgroundColor: '#efeef3',
  },
  priceHolder323: {
    paddingHorizontal: 15,
    paddingRight: 25,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#a0a0a0',
  },
  priceLabel323: {
    flex: 1,
    alignItems: 'flex-end',
  },
  price323: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title323: {
    fontSize: 16,
  },
  button323: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
});
