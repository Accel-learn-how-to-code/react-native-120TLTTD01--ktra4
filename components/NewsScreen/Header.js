import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default function Header() {
  return (
    <View style={styles.header323}>
      <Image
        style={styles.avatar323}
        source={require('../../Image/pipi.jpg')}
      />
      <View style={styles.profile323}>
        <Text style={styles.name323}>Võ Đình Hoàng Long</Text>
        <Text style={styles.description323}>
          Khách hàng mới | 1811505310323
        </Text>
      </View>
      <Ionicons name="notifications-outline" size={30} color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  header323: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatar323: {
    height: 50,
    width: 50,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  profile323: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
  },
  name323: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  description323: {
    fontSize: 15,
    color: 'grey',
  },
});
