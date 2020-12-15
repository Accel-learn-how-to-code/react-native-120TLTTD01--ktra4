import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Header({receipStatus, setReceipStatus}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={receipStatus === 0 ? styles.headerItemActive : styles.headerItem}
        onPress={() => setReceipStatus(0)}>
        <Text
          style={
            receipStatus === 0 ? styles.headerLabelActive : styles.headerLabel
          }>
          Phổ biến
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={receipStatus === 1 ? styles.headerItemActive : styles.headerItem}
        onPress={() => setReceipStatus(1)}>
        <Text
          style={
            receipStatus === 1 ? styles.headerLabelActive : styles.headerLabel
          }>
          Thức uống
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={receipStatus === 2 ? styles.headerItemActive : styles.headerItem}
        onPress={() => setReceipStatus(2)}>
        <Text
          style={
            receipStatus === 2 ? styles.headerLabelActive : styles.headerLabel
          }>
          Đồ ăn
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 45,
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerItemActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#eb7e23',
    fontSize: 15,
  },
  headerLabelActive: {
    fontWeight: 'bold',
    color: '#eb7e23',
    fontSize: 15,
  },
  headerLabel: {
    fontWeight: 'bold',
    color: '#aaa',
  },
});
