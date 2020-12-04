import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const WelcomeTab = () => {
  return (
    <TouchableOpacity style={styles.welcomeTab323}>
      <View style={styles.logoHolder323}>
        <Image
          style={styles.logoProfile323}
          source={require('../../Image/pipi.jpg')}
        />
      </View>
      <View style={styles.titleHolder323}>
        <Text style={styles.loginSignupLabel323}>Võ Đình Hoàng Long</Text>
        <Text style={styles.welcomLabel323}>
          Khách hàng mới | 1811505310323
        </Text>
      </View>
      <View style={styles.icon323}>
        <Icon name="chevron-forward-outline" color="#000" size={25} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  welcomeTab323: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  logoHolder323: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoProfile323: {
    height: 65,
    width: 65,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  titleHolder323: {
    flex: 73,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  welcomLabel323: {
    fontSize: 15,
    color: '#000',
  },
  loginSignupLabel323: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  icon323: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
export default WelcomeTab;
