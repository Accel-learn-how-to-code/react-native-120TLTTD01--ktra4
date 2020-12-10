import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const deviceWidth323 = Dimensions.get('window').width;

//Data
import cart from '../../Data/cart';

//component
import ItemHeader323 from './ItemHeader';

export default class ItemModal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      item323: {},
    };
  }

  controlModal323 = (item323) => {
    let index = cart.findIndex((x) => {
      return item323.id === x.id;
    });
    index !== -1
      ? this.setState({
          modalVisible: !this.state.modalVisible,
          item323: {...cart[index]},
        })
      : this.setState({
          modalVisible: !this.state.modalVisible,
          item323: {...item323, quantity: 1},
        });
  };

  addItem323 = () => {
    const {item323} = this.state;
    let index = cart.findIndex((x) => {
      return item323.id === x.id;
    });

    index === -1 ? cart.push(item323) : (cart[index] = item323);
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  increaseQuantity323 = () => {
    const {item323} = this.state;
    this.setState({
      item323: {...item323, quantity: ++item323.quantity},
    });
  };

  decreaseQuantity323 = () => {
    const {item323} = this.state;
    if (item323.quantity > 1) {
      this.setState({
        item323: {...item323, quantity: --item323.quantity},
      });
    }
  };

  render() {
    const {item323} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}>
        <TouchableOpacity
          onPress={this.controlModal323}
          style={styles.centeredModal}>
          <View style={styles.modalView}>
            <ItemHeader323 item323={item323} />

            <Text style={styles.label323}>Giới thiệu món</Text>
            <Text style={styles.description323}>
              Tận hưởng từng ngụm ấm áp, ngọt dịu từ sô cô la thượng hạng kết
              hợp với lúa mạch thơm lừng. Vị giáng sinh đặc biệt này là dành cho
              bạn, thưởng thức ngay nhé.
            </Text>

            <View style={styles.order323}>
              <View style={styles.quantity323}>
                <TouchableOpacity onPress={this.decreaseQuantity323}>
                  <Icon
                    name="remove-circle-outline"
                    size={35}
                    color="#eb7e23"
                  />
                </TouchableOpacity>

                <Text style={styles.itemNumber323}>{item323.quantity}</Text>

                <TouchableOpacity onPress={this.increaseQuantity323}>
                  <Icon name="add-circle-outline" size={35} color="#eb7e23" />
                </TouchableOpacity>
              </View>

              <View style={styles.buttonHolder323}>
                <TouchableOpacity
                  style={styles.button323}
                  onPress={this.addItem323}>
                  <Text style={styles.buttonLabel323}>
                    {item323.quantity * item323.price}.000 đ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: deviceWidth323 * 0.7,
  },
  label323: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderColor: '#aaa',
  },
  description323: {
    fontSize: 16,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderColor: '#aaa',
  },
  order323: {
    flexDirection: 'row',
    marginTop: 7,
  },
  quantity323: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemNumber323: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  buttonHolder323: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button323: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe9400',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#fe9400',
    borderRadius: 10,
  },
  buttonLabel323: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
});
