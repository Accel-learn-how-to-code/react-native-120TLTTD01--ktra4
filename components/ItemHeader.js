import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const WelcomeTab = ({item323}) => {
  return (
    <TouchableOpacity style={styles.welcomeTab323}>
      <View style={styles.logoHolder323}>
        <Image style={styles.logoProfile323} source={item323.image} />
      </View>
      <View style={styles.titleHolder323}>
        <Text style={styles.loginSignupLabel323}>{item323.title}</Text>
        <Text style={styles.welcomLabel323}>{item323.price}.000 đ</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  welcomeTab323: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  logoHolder323: {},
  logoProfile323: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titleHolder323: {
    flex: 1,
    paddingHorizontal: 15,
  },
  welcomLabel323: {
    fontSize: 18,
    color: '#000',
  },
  loginSignupLabel323: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default WelcomeTab;
