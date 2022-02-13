/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  header = () => {
    return (
      <View>
        <Text>POSTS</Text>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        keyExtractor={item => item.id}
        // importantForAccessibility="yes"
        numColumns={3}
        pagingEnabled={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
      />
    );
  }
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Marketplace',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'FriendsList',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Groups',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8bbb',
    title: 'Pages',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97676',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e27234',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29234',
    title: 'Seven Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571429234',
    title: 'Eight Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-115571429234',
    title: 'Nine Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1155h1429234',
    title: 'Ten Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1155h1429234',
    title: 'Ten Item',
  },
];

const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: 200,
    width: 400,
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});

export default App;
