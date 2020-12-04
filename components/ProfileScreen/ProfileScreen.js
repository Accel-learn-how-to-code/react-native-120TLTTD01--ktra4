import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import WelcomeTab323 from './WelcomeTab';
import ProfileTab323 from './ProfileTab';

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container323}>
      <ScrollView style={styles.scrollView323}>
        <WelcomeTab323 />
        <View style={styles.tabHolder323}>
          <ProfileTab323
            title323="The Coffee House Rewards"
            icon323="star-outline"
          />
          <ProfileTab323
            title323="Thông tin tài khoản"
            icon323="person-outline"
          />
          <ProfileTab323
            title323="Nhạc đang phát"
            icon323="musical-notes-outline"
          />
          <ProfileTab323 title323="Lịch sử" icon323="newspaper-outline" />
          <ProfileTab323 title323="Giúp đỡ" icon323="help-circle-outline" />
          <ProfileTab323 title323="Cài đặt" icon323="settings-outline" />
        </View>
        <View style={styles.signOut323}>
          <Text style={styles.label323}>Đăng xuất</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container323: {
    flex: 1,
  },
  scrollView323: {
    backgroundColor: '#eee',
  },
  tabHolder323: {
    marginVertical: 7,
  },
  signOut323: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  label323: {
    fontSize: 15,
  },
});
export default ProfilePage;
