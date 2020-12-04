import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const ProfileTab = ({title323, icon323}) => {
  return (
    <TouchableOpacity style={styles.profileTab323}>
      <View style={styles.icons323}>
        <Icon name={icon323} color="#000" size={25} />
      </View>
      <View style={styles.labelHolder323}>
        <Text style={styles.label323}>{title323}</Text>
      </View>
      <View style={styles.arrowIcon323}>
        <Icon name="chevron-forward-outline" color="#000" size={25} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icons323: {
    flex: 10,
  },
  profileTab323: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  labelHolder323: {
    flex: 83,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  label323: {
    fontSize: 15,
  },
  arrowIcon323: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default ProfileTab;
