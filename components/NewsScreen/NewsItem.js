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

export default function NewsItem({title323}) {
  return (
    <View style={styles.news323}>
      <View style={styles.labelHolder323}>
        <Text style={styles.label323}>{title323}</Text>
        <View style={styles.icon323}>
          <Ionicons name="ellipsis-horizontal-outline" color="#000" size={30} />
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.item323}>
          <View>
            <Image
              style={styles.image323}
              source={require('../../Image/banner1.png')}
            />
          </View>

          <View style={styles.infor323}>
            <Text style={styles.label323}>
              The Coffee House đồng hành cùng bạn "Go Green"
            </Text>
            <Text>
              Tại The Coffee House, hành trình "Go Green" được lan toả mỗi
              ngày...
            </Text>
          </View>

          <TouchableOpacity style={styles.button323}>
            <Text style={{color: '#eb7e23'}}>Chi tiết</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item323}>
          <View>
            <Image
              style={styles.image323}
              source={require('../../Image/banner2.png')}
            />
          </View>

          <View style={styles.infor323}>
            <Text style={styles.label323}>
              Top 10 cửa hàng The Coffee House tại Đà Nẵng
            </Text>
            <Text>
              Tại The Coffee House, hành trình "Go Green" được lan toả mỗi
              ngày...
            </Text>
          </View>

          <TouchableOpacity style={styles.button323}>
            <Text style={{color: '#eb7e23'}}>Chi tiết</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item323}>
          <View>
            <Image
              style={styles.image323}
              source={require('../../Image/banner3.png')}
            />
          </View>

          <View style={styles.infor323}>
            <Text style={styles.label323}>
              7 ngày FREE UPSIZE - Yêu bạn nữ không thể nào cai
            </Text>
            <Text>
              Tại The Coffee House, hành trình "Go Green" được lan toả mỗi
              ngày...
            </Text>
          </View>

          <TouchableOpacity style={styles.button323}>
            <Text style={{color: '#eb7e23'}}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  news323: {
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
