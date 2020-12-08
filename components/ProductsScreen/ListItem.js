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
const deviceWidth323 = Dimensions.get('window').width;

function Item({item323, controlModal323}) {
  return (
    <TouchableOpacity style={styles.itemHolder323} onPress={controlModal323}>
      <Image source={item323.image} style={styles.imageHolder323} />
      <View style={styles.information323}>
        <Text style={styles.title323}>{item323.title}</Text>
        <View style={styles.priceHolder323}>
          <Text style={styles.price323}>{item323.price}.000 VNĐ &nbsp;</Text>
          <View style={styles.icon323}>
            <Icon name="add-circle-outline" size={25} color="#eb7e23" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemHolder323: {
    width: deviceWidth323 * 0.45,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 10,
    flexDirection: 'column',
    margin: 5,
  },
  imageHolder323: {
    height: 150,
    width: '100%',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
  },
  information323: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
  },
  title323: {
    fontSize: 16,
    //fontWeight: '700',
  },
  price323: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  priceHolder323: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 15,
    paddingVertical: 5,
  },
  icon323: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Item;
