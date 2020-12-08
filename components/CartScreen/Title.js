import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';

export default class Title extends Component {
  render() {
    const {title323} = this.props;
    return (
      <>
        <View style={styles.labelHolder323}>
          <Text style={styles.label323}>{title323}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  labelHolder323: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  label323: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
