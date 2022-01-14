/* eslint-disable react-native/no-inline-styles */
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
    <View>
      <View style={styles.group}>
        <Button
          onPress={() => console.log('onPress')}
          importantForAccessibility={'yes'}
          title="This button is still focusable, bt shouldn't be"
        />
        <TouchableOpacity
          onPress={() => console.log('onTouchableOpacity onPress')}>
          <Text>This is a touchable opacity</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.group}>
        <Text
          accessible={true}
          accessibilityLabel="test"
          onPress={() => console.log('on Text press')}>
          Parent Text
          <Text
            accessible={true}
            accessibilityLabel="Testing"
            onPress={() => console.log('on Text press')}
            importantForAccessibility="yes">
            Child Text
          </Text>
        </Text>
      </View>
      <View style={styles.group}>
        <Button
          onPress={() => console.log('onPress')}
          importantForAccessibility={'yes'}
          title="This button is still focusable, bt shouldn't be"
        />
        <ImageBackground
          style={{width: 50, height: 50}}
          source={{uri: 'https://reactnative.dev/img/opengraph.png'}}
          importantForAccessibility={'no'}>
          <Text>This element should not be focusable, but it is</Text>
        </ImageBackground>
      </View>
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
  group: {backgroundColor: 'yellow', margin: 50},
});

export default App;
