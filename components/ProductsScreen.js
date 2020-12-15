import React, {useState, useRef} from 'react';
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

export default function App({data}) {
  const [receipStatus, setReceipStatus] = useState(0);
  const itemModal = useRef();

  let items = [];

  receipStatus === 0
    ? (items = data)
    : (items = data.filter((item) => {
        return item.type === receipStatus;
      }));

  let itemsList = items.map((item) => {
    return (
      <ListItem
        controlModal={() => itemModal.current.controlModal(item)}
        item={item}
        key={item.id}
      />
    );
  });
  return (
    <>
      <Header receipStatus={receipStatus} setReceipStatus={setReceipStatus} />

      <ScrollView style={{backgroundColor: '#efeef3'}}>
        <Text style={styles.label}>Danh sách sản phẩm</Text>
        <View style={styles.container}>{itemsList}</View>
      </ScrollView>

      <ItemModal ref={itemModal} />
    </>
  );
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
