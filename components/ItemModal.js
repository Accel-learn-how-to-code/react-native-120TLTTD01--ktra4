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
const deviceWidth = Dimensions.get('window').width;

//component
import ItemHeader from './ItemHeader';

export default class ItemModal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      item: {},
    };
  }

  controlModal = (item) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  increaseQuantity = () => {
    const {item} = this.state;
    this.setState({
      item: {...item, quantity: ++item.quantity},
    });
  };

  decreaseQuantity = () => {
    const {item} = this.state;
    if (item.quantity > 1) {
      this.setState({
        item: {...item, quantity: --item.quantity},
      });
    }
  };

  render() {
    const {item} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}>
        <TouchableOpacity
          onPress={this.controlModal}
          style={styles.centeredModal}>
          <View style={styles.modalView}>
            <ItemHeader item={item} />

            <Text style={styles.label}>Giới thiệu món</Text>
            <Text style={styles.description}>{item.description}</Text>

            <View style={styles.order}>
              <View style={styles.quantity}>
                <TouchableOpacity onPress={this.decreaseQuantity}>
                  <Icon
                    name="remove-circle-outline"
                    size={35}
                    color="#eb7e23"
                  />
                </TouchableOpacity>

                <Text style={styles.itemNumber}>{item.quantity}</Text>

                <TouchableOpacity onPress={this.increaseQuantity}>
                  <Icon name="add-circle-outline" size={35} color="#eb7e23" />
                </TouchableOpacity>
              </View>

              <View style={styles.buttonHolder}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonLabel}>
                    {item.quantity * item.price}.000 đ
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
    width: deviceWidth * 0.7,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderColor: '#aaa',
  },
  description: {
    fontSize: 16,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderColor: '#aaa',
  },
  order: {
    flexDirection: 'row',
    marginTop: 7,
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  buttonHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
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
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
});
