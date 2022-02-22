/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {Text, Button, View, TouchableOpacity, Pressable} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Text accessible={true} accessibilityRole="link">
          This is a{' '}
          <Text
            style={{color: 'green'}}
            accessibilityState={{disabled: true}}
            accessibilityRole="link"
            onPress={() => {
              alert('pressed test');
            }}>
            test
          </Text>{' '}
          of{' '}
          <Text
            style={{color: 'green'}}
            accessibilityRole="link"
            onPress={() => {
              alert('pressed Inline Links');
            }}>
            Inline Links
          </Text>
        </Text>
        <Text>Normal Text</Text>
        <Button
          accessibilityRole="button"
          title="Testing"
          onPress={() => console.warn('pressed')}
        />
        <TouchableOpacity
          accessible={true}
          onPress={() => console.log('pressed')}
          accessibilityActions={[{name: 'activate'}]}
          onAccessibilityAction={event => {
            switch (event.nativeEvent.actionName) {
              case 'activate':
                Alert.alert('Alert', 'View is clicked');
                console.log('activate');
                break;
            }
          }}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View
          accessible={true}
          accessibilityActions={[
            {name: 'cut', label: 'cut label'},
            {name: 'copy', label: 'copy label'},
            {name: 'paste', label: 'paste label'},
          ]}
          onAccessibilityAction={event => {
            switch (event.nativeEvent.actionName) {
              case 'cut':
                Alert.alert('Alert', 'cut action success');
                break;
              case 'copy':
                Alert.alert('Alert', 'copy action success');
                break;
              case 'paste':
                Alert.alert('Alert', 'paste action success');
                break;
            }
          }}>
          <Text>This view supports many actions.</Text>
        </View>
        <TouchableOpacity
          accessible={true}
          accessibilityActions={[
            {name: 'cut', label: 'cut'},
            {name: 'copy', label: 'copy'},
            {name: 'paste', label: 'paste'},
            {name: 'longpress', label: 'longpress'},
          ]}
          onLongPress={() => console.log('onLongPress')}
          onAccessibilityAction={event => {
            console.log('event', event);
            switch (event.nativeEvent.actionName) {
              case 'cut':
                Alert.alert('Alert', 'cut action success');
                break;
              case 'copy':
                Alert.alert('Alert', 'copy action success');
                break;
              case 'paste':
                Alert.alert('Alert', 'paste action success');
                break;
            }
          }}>
          <Text selectable={true}>Copy me</Text>
        </TouchableOpacity>
        <Pressable
          style={{width: 100, height: 100, backgroundColor: 'pink'}}
          accessibilityActions={[
            {
              name: 'activate',
              label: 'Download file',
            },
          ]}
          onPress={() =>
            console.warn('Never called in accessibility role. =( !')
          }>
          <Text>message text</Text>
        </Pressable>
      </>
    );
  }
}

// const styles = StyleSheet.create({
// });

export default App;
