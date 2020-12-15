import React, {Component} from 'react';
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
