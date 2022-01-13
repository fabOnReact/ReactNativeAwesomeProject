/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';

import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const accessibilityAction = [
    {
      name: 'activate',
      label: 'activate label',
    },
  ];

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <View
        onClick={() => console.log('click')}
        accessible={true}
        accessibilityRole="button"
        accessibilityActions={accessibilityAction}
        // accessibilityLabel="this is custom label"
        style={{backgroundColor: 'red', height: 100, marginTop: 150}}>
        <Text>Some Other Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
