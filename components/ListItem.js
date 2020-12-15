import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const deviceWidth = Dimensions.get('window').width;

function Item({item, controlModal}) {
  return (
    <TouchableOpacity style={styles.itemHolder} onPress={controlModal}>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.imageHolder}
      />
      <View style={styles.information}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceHolder}>
          <Text style={styles.price}>{item.price}.000 VNĐ &nbsp;</Text>
          <View style={styles.icon}>
            <Icon name="add-circle-outline" size={25} color="#eb7e23" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemHolder: {
    width: deviceWidth * 0.45,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 10,
    flexDirection: 'column',
    margin: 5,
  },
  imageHolder: {
    height: 150,
    width: '100%',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
  },
  information: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  priceHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 15,
    paddingVertical: 5,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Item;
