import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const WelcomeTab = ({item}) => {
  return (
    <TouchableOpacity style={styles.welcomeTab}>
      <View style={styles.logoHolder}>
        <Image
          style={styles.logoProfile}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.titleHolder}>
        <Text style={styles.loginSignupLabel}>{item.title}</Text>
        <Text style={styles.welcomLabel}>{item.price}.000 đ</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  welcomeTab: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  logoHolder: {},
  logoProfile: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titleHolder: {
    flex: 1,
    paddingHorizontal: 15,
  },
  welcomLabel: {
    fontSize: 18,
    color: '#000',
  },
  loginSignupLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default WelcomeTab;
