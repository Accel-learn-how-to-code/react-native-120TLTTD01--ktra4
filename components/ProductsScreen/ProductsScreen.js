import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';

//Data
import data323 from '../../Data/data';

//Components
import ListItem323 from './ListItem';
import Header323 from './Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      receipStatus323: 0, //0: All, 1: thức uống, 2: Đồ ăn
    };
  }

  changeToAll323 = () => {
    this.setState({
      receipStatus323: 0,
    });
  };

  changeToOnDrink323 = () => {
    this.setState({
      receipStatus323: 1,
    });
  };

  changeToCake323 = () => {
    this.setState({
      receipStatus323: 2,
    });
  };

  render() {
    const {receipStatus323} = this.state;

    let items323 = [];

    receipStatus323 === 0
      ? (items323 = data323)
      : (items323 = data323.filter((item323) => {
          return item323.type === receipStatus323;
        }));

    let itemsList323 = items323.map((item323) => {
      return (
        <ListItem323
          //controlModal={() => this.selectModal.controlModal(item.id)}
          item323={item323}
          key={item323.id}
        />
      );
    });
    return (
      <>
        <Header323
          receipStatus323={receipStatus323}
          changeToAll323={this.changeToAll323}
          changeToOnDrink323={this.changeToOnDrink323}
          changeToCake323={this.changeToCake323}
        />
        <ScrollView style={{backgroundColor: '#efeef3'}}>
          <Text style={styles.label323}>Danh sách sản phẩm</Text>
          <View style={styles.container323}>{itemsList323}</View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container323: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
  label323: {
    paddingHorizontal: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
