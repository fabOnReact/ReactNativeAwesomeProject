/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import type {Node} from 'react';

import React from 'react';
import {
  TouchableNativeFeedback,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export class App extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {disabled: false, accessibilityDisabled: false, value: false};
  }

  setAccessibilityDisabled(value) {
    if (value === 'reset') {
      this.setState({accessibilityDisabled: null});
    } else {
      this.setState((state, props) => ({
        accessibilityDisabled: !state.accessibilityDisabled,
      }));
    }
  }

  setDisabled(value) {
    if (value === 'reset') {
      this.setState({disabled: null});
    } else {
      this.setState((state, props) => ({
        disabled: !state.disabled,
      }));
    }
  }

  setValue() {
    this.setState((state, props) => ({
      value: !state.value,
    }));
  }

  render() {
    const {disabled, accessibilityDisabled, value} = this.state;

    return (
      <>
        <Text>
          accessibilityState.disabled is set to{' '}
          <Text style={{color: 'red'}}>
            {accessibilityDisabled === null
              ? 'null'
              : accessibilityDisabled.toString()}
          </Text>
        </Text>
        <Text>
          disabled is set to{' '}
          <Text style={{color: 'red'}}>
            {disabled === null ? 'null' : disabled.toString()}
          </Text>
        </Text>
        <Button
          accessibilityLabel="enable accessibility label"
          title={`${
            accessibilityDisabled ? 'enable' : 'disable'
          } accessibilityState disabled`}
          onPress={() => this.setAccessibilityDisabled()}
        />
        <Button
          title={`${disabled ? 'enable' : 'disable'} disabled prop`}
          onPress={() => this.setDisabled()}
        />
        <Button
          title={`set accessibilityState to null`}
          onPress={() => this.setAccessibilityDisabled('reset')}
        />
        <Button
          title={`set disabled to null`}
          onPress={() => this.setDisabled('reset')}
        />
        <Switch
          onValueChange={() => this.setValue()}
          trackColor={{
            true: 'yellow',
            false: 'purple',
          }}
          value={value}
          disabled={disabled}
          accessibilityState={{disabled: accessibilityDisabled}}
        />
      </>
    );
  }
}
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
