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
    );
  }
}

const DATA = [
  {
    id: '1',
    title: '1 Item',
  },
  {
    id: '2',
    title: '2 Item',
  },
  {
    id: '3',
    title: '3 Item',
  },
  {
    id: '4',
    title: '4 Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Sixth Item',
  },
  {
    id: '7',
    title: 'Seven Item',
  },
  {
    id: '8',
    title: 'Eight Item',
  },
  {
    id: '9',
    title: 'Nine Item',
  },
  {
    id: '10',
    title: 'Ten Item',
  },
  {
    id: '11',
    title: 'Eleven Item',
  },
  {
    id: '12',
    title: 'Twelve Item',
  },
  {
    id: '13',
    title: 'Thirdteen Item',
  },
  {
    id: '14',
    title: 'Fourteen Item',
  },
  {
    id: '15',
    title: 'Fifthteen Item',
  },
  {
    id: '16',
    title: 'Sixteen Item',
  },
  {
    id: '17',
    title: '17 Item',
  },
  {
    id: '18',
    title: '18 Item',
  },
  {
    id: '19',
    title: '19 Item',
  },
  {
    id: '20',
    title: '20 Item',
  },
  {
    id: '21',
    title: '21 Item',
  },
  {
    id: '22',
    title: '22 Item',
  },
  {
    id: '21',
    title: '23 Item',
  },
  {
    id: '22',
    title: '24 Item',
  },
  {
    id: '22',
    title: '25 Item',
  },
  {
    id: '23',
    title: '26 Item',
  },
  {
    id: '24',
    title: '27 Item',
  },
  {
    id: '25',
    title: '28 Item',
  },
  {
    id: '26',
    title: '29 Item',
  },
];

const renderItem = ({item, key}) => (
  <View key={key} style={styles.item}>
    <Text key={key}>{item.title}</Text>
  </View>
);

const styles = StyleSheet.create({
});

export default App;
