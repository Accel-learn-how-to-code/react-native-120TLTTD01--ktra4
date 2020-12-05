import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default class Header extends Component {
  render() {
    const {
      receipStatus323,
      changeToAll323,
      changeToOnDrink323,
      changeToCake323,
    } = this.props;

    return (
      <View style={styles.header323}>
        <TouchableOpacity
          style={
            receipStatus323 === 0
              ? styles.headerItemActive323
              : styles.headerItem323
          }
          onPress={changeToAll323}>
          <Text
            style={
              receipStatus323 === 0
                ? styles.headerLabelActive323
                : styles.headerLabel323
            }>
            Phổ biến
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            receipStatus323 === 1
              ? styles.headerItemActive323
              : styles.headerItem323
          }
          onPress={changeToOnDrink323}>
          <Text
            style={
              receipStatus323 === 1
                ? styles.headerLabelActive323
                : styles.headerLabel323
            }>
            Thức uống
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            receipStatus323 === 2
              ? styles.headerItemActive323
              : styles.headerItem323
          }
          onPress={changeToCake323}>
          <Text
            style={
              receipStatus323 === 2
                ? styles.headerLabelActive323
                : styles.headerLabel323
            }>
            Đồ ăn
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header323: {
    backgroundColor: '#fff',
    height: 45,
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerItem323: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerItemActive323: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#eb7e23',
    fontSize: 15,
  },
  headerLabelActive323: {
    fontWeight: 'bold',
    color: '#eb7e23',
    fontSize: 15,
  },
  headerLabel323: {
    fontWeight: 'bold',
    color: '#aaa',
  },
});
