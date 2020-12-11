import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const deviceWidth323 = Dimensions.get('window').width;

//Components
import Header323 from './Header';
import Category323 from './Category';
import NewsItem323 from './NewsItem';

export default function NewsScreen() {
  return (
    <ScrollView style={styles.container323}>
      <Header323 />
      <Category323 />

      <NewsItem323 title323="Ưu đãi đặt biệt" />
      <NewsItem323 title323="Coffee Lover" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container323: {
    flex: 1,
    backgroundColor: '#efedf2',
  },
});
