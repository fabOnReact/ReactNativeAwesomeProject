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
  Button,
  ImageBackground,
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
    <View style={styles.container}>
      <Button
        onPress={() => console.log('onPress')}
        importantForAccessibility={'no'}
        title="This button is still focusable, bt shouldn't be"
      />
      <ImageBackground
        style={{width: 50, height: 50}}
        source={{uri: 'https://reactnative.dev/img/opengraph.png'}}
        importantForAccessibility={'no-hide-descendants'}>
        <Text>This element should not be focusable, but it is</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
