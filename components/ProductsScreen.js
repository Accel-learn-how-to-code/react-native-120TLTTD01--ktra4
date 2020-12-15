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

//Components
import ListItem from './ListItem';
import Header from './Header';
import ItemModal from './ItemModal';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      receipStatus: 0, //0: All, 1: thức uống, 2: Đồ ăn
    };
  }

  changeToAll = () => {
    this.setState({
      receipStatus: 0,
    });
  };

  changeToOnDrink = () => {
    this.setState({
      receipStatus: 1,
    });
  };

  changeToCake = () => {
    this.setState({
      receipStatus: 2,
    });
  };

  render() {
    const {receipStatus} = this.state;
    const {data} = this.props;

    let items = [];

    receipStatus === 0
      ? (items = data)
      : (items = data.filter((item) => {
          return item.type === receipStatus;
        }));

    let itemsList = items.map((item) => {
      return (
        <ListItem
          controlModal={() => this.itemModal.controlModal(item)}
          item={item}
          key={item.id}
        />
      );
    });
    return (
      <>
        <Header
          receipStatus={receipStatus}
          changeToAll={this.changeToAll}
          changeToOnDrink={this.changeToOnDrink}
          changeToCake={this.changeToCake}
        />

        <ScrollView style={{backgroundColor: '#efeef3'}}>
          <Text style={styles.label}>Danh sách sản phẩm</Text>
          <View style={styles.container}>{itemsList}</View>
        </ScrollView>

        <ItemModal ref={(value) => (this.itemModal = value)} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
  label: {
    paddingHorizontal: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
