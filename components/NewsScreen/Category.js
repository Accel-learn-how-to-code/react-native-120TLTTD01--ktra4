import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function NewsScreen() {
  return (
    <View style={styles.category323}>
      <View style={styles.categoryItem323}>
        <Image
          style={styles.icon323}
          source={require('../../Image/label3.png')}
        />
        <Text style={styles.label323}>Tích điểm</Text>
      </View>

      <View style={styles.categoryItem323}>
        <Image
          style={styles.icon323}
          source={require('../../Image/label1.png')}
        />
        <Text style={styles.label323}>Đặt hàng</Text>
      </View>

      <View style={styles.categoryItem323}>
        <Image
          style={styles.icon323}
          source={require('../../Image/label2.png')}
        />
        <Text style={styles.label323}>Coupon</Text>
      </View>

      <View style={styles.categoryItem323}>
        <Image
          style={styles.icon323}
          source={require('../../Image/label4.png')}
        />
        <Text style={styles.label323}>Rewards</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category323: {
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  icon323: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
  },
  categoryItem323: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
