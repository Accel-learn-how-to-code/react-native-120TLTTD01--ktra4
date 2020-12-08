import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class CartScreen extends Component {
  render() {
    return (
      <>
        <View style={styles.informationHolder323}>
          <View style={styles.profile323}>
            <View style={styles.profileDetail323}>
              <Icon name="person-outline" size={25} color="#a0a0a0" />
              <Text style={styles.profileLabel323}>Võ Đình Hoàng Long</Text>
            </View>

            <View
              style={{
                ...styles.profileDetail323,
                justifyContent: 'flex-end',
                paddingRight: 20,
              }}>
              <Icon name="call-outline" size={25} color="#a0a0a0" />
              <Text style={styles.profileLabel323}>1811505310323</Text>
            </View>
          </View>

          <View style={styles.addressHolder323}>
            <Image
              style={styles.icon323}
              source={require('../../Image/label1.png')}
            />

            <View style={styles.addressDetail323}>
              <View style={styles.changeAddress323}>
                <Text style={styles.address323}>16 Tố Hữu</Text>
                <View style={styles.change323}>
                  <Text style={styles.changeLabel323}>THAY ĐỔI</Text>
                </View>
              </View>

              <Text style={{fontSize: 15, marginBottom: 5}}>
                Hòa Cường Nam, Hải Châu, Đà Nẵng
              </Text>

              <View style={styles.iconHolder323}>
                <Icon name="document-outline" size={30} color="#a0a0a0" />
                <View style={styles.holder323}></View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  informationHolder323: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profile323: {
    flexDirection: 'row',
  },
  profileDetail323: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  profileLabel323: {
    fontSize: 16,
    marginLeft: 5,
    borderBottomWidth: 0.5,
    borderColor: '#a0a0a0',
  },
  icon323: {
    height: 90,
    width: 90,
    resizeMode: 'cover',
  },
  addressHolder323: {
    flexDirection: 'row',
    marginTop: 10,
  },
  addressDetail323: {
    flex: 1,
    paddingHorizontal: 5,
  },
  changeAddress323: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  address323: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  change323: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  changeLabel323: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#eb7e23',
  },
  iconHolder323: {
    flexDirection: 'row',
  },
  holder323: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: '#a0a0a0',
  },
});
