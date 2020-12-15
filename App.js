import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import firestore from '@react-native-firebase/firestore';
import ProductScreen from './components/ProductsScreen';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    firestore()
      .collection('products')
      .get()
      .then((querySnapshot) => {
        console.log('Products Number : ' + querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          const {data} = this.state;
          data.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
          this.setState({
            data: data,
          });
        });
      });
  }

  render() {
    const {data} = this.state;
    return <ProductScreen data={data} />;
  }
}
