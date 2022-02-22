/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {Text, Button, View} from 'react-native';

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
        <View
          accessible={true}
          accessibilityActions={[{name: 'activate'}]}
          onAccessibilityAction={event => {
            switch (event.nativeEvent.actionName) {
              case 'activate':
                Alert.alert('Alert', 'View is clicked');
                break;
            }
          }}>
          <Text>Click me</Text>
        </View>
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
      </>
    );
  }
}

// const styles = StyleSheet.create({
// });

export default App;
