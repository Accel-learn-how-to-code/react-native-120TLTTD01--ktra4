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
  news323: {
    //paddingHorizontal: 20,
    marginVertical: 20,
  },
  labelHolder323: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  label323: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#000',
  },
  icon323: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  item323: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: deviceWidth323 * 0.6,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  infor323: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image323: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    resizeMode: 'cover',
  },
  button323: {
    borderWidth: 1,
    width: 80,
    height: 30,
    borderRadius: 20,
    borderColor: '#eb7e23',
    marginVertical: 10,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
