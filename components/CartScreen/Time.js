import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class Time extends Component {
  render() {
    return (
      <>
        <View style={styles.timeHolder323}>
          <Icon name="time-outline" size={30} color="#000" />
          <View style={styles.timeDetail323}>
            <Text>Hẹn giờ</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Trong 15-30 phút
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  timeHolder323: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  timeDetail323: {
    flex: 1,
    marginHorizontal: 10,
  },
});
