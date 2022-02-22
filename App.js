/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
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
        <Button
          accessibilityRole="button"
          title="Testing"
          onPress={() => console.warn('pressed')}
        />
        <TouchableOpacity
          accessible={true}
          focusabled={true}
          accessibilityLabel="i'm an accessible view"
          style={{height: 100, backgroundColor: 'yellow'}}
          onPress={() => console.log('pressed')}
          accessibilityActions={[{name: 'activate'}]}
          onAccessibilityAction={event => {
            switch (event.nativeEvent.actionName) {
              case 'activate':
                Alert.alert(
                  'Alert',
                  'View is clicked and event activate triggered',
                );
                break;
            }
          }}>
          <Text
            accessible={true}
            accessibilityActions={[{name: 'activate'}]}
            onAccessibilityAction={event => {
              switch (event.nativeEvent.actionName) {
                case 'activate':
                  Alert.alert(
                    'Alert',
                    'Text is clicked and event activate triggered',
                  );
                  break;
              }
            }}>
            Click me. I and my parent view have the activate action.
          </Text>
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
        <View>
          <RNTesterBlock title="TextView without label">
            <Text>
              Text's accessibilityLabel is the raw text itself unless it is set
              explicitly.
            </Text>
          </RNTesterBlock>

          <RNTesterBlock title="TextView with label">
            <Text accessibilityLabel="I have label, so I read it instead of embedded text.">
              This text component's accessibilityLabel is set explicitly.
            </Text>
          </RNTesterBlock>

          <RNTesterBlock title="Nonaccessible view with TextViews">
            <View>
              <Text style={{color: 'green'}}>
                This is text one inside Nonaccessible view.
              </Text>
              <Text style={{color: 'blue'}}>This is text two.</Text>
            </View>
          </RNTesterBlock>

          <RNTesterBlock title="Accessible view with TextViews wihout label">
            <View accessible={true}>
              <Text style={{color: 'green'}}>This is text one.</Text>
              <Text style={{color: 'blue'}}>This is text two.</Text>
            </View>
          </RNTesterBlock>

          <RNTesterBlock title="Accessible view with TextViews with label">
            <View
              accessible={true}
              accessibilityLabel="I have label, so I read it instead of embedded text.">
              <Text style={{color: 'green'}}>This is text one.</Text>
              <Text style={{color: 'blue'}}>This is text two.</Text>
            </View>
          </RNTesterBlock>

          {/* Android screen readers will say the accessibility hint instead of the text
           since the view doesn't have a label. */}
          <RNTesterBlock title="Accessible view with TextViews with hint">
            <View accessibilityHint="Accessibility hint." accessible={true}>
              <Text style={{color: 'green'}}>
                This is text one inside a view with hint.
              </Text>
              <Text style={{color: 'blue'}}>This is text two.</Text>
            </View>
          </RNTesterBlock>

          <RNTesterBlock title="Accessible view TextViews with label and hint">
            <View
              focusable={true}
              style={{height: 100, backgroundColor: 'red'}}
              accessibilityLabel="Accessibility label."
              accessibilityHint="Accessibility hint."
              accessible={true}>
              <Text style={{color: 'green'}}>
                This is text one inside view with accessibilityLabel.
              </Text>
              <Text style={{color: 'blue'}}>This is text two.</Text>
            </View>
          </RNTesterBlock>

          <RNTesterBlock title="Text with accessibilityRole = header">
            <Text accessibilityRole="header">This is a title.</Text>
          </RNTesterBlock>

          <RNTesterBlock title="Touchable with accessibilityRole = link">
            <TouchableOpacity
              onPress={() => Alert.alert('Link has been clicked!')}
              accessibilityRole="link">
              <View>
                <Text>Click me</Text>
              </View>
            </TouchableOpacity>
          </RNTesterBlock>

          <RNTesterBlock title="Touchable with accessibilityRole = button">
            <TouchableOpacity
              onPress={() => Alert.alert('Button has been pressed!')}
              accessibilityRole="button">
              <Text>Click me</Text>
            </TouchableOpacity>
          </RNTesterBlock>

          <RNTesterBlock title="Disabled Touchable with role">
            <TouchableOpacity
              onPress={() => Alert.alert('Button has been pressed!')}
              accessibilityRole="button"
              accessibilityState={{disabled: true}}
              disabled={true}>
              <View>
                <Text accessibilityState={{disabled: true}}>
                  I am disabled. Clicking me will not trigger any action.
                </Text>
              </View>
            </TouchableOpacity>
          </RNTesterBlock>

          <RNTesterBlock title="Disabled TouchableOpacity">
            <TouchableOpacity
              onPress={() => Alert.alert('Disabled Button has been pressed!')}
              accessibilityLabel={'You are pressing Disabled TouchableOpacity'}
              accessibilityState={{disabled: true}}>
              <View>
                <Text>
                  I am disabled. Clicking me will not trigger any action.
                </Text>
              </View>
            </TouchableOpacity>
          </RNTesterBlock>
          <RNTesterBlock title="View with multiple states">
            <View
              focusable={true}
              accessibilityLabel="Accessibility label."
              style={{height: 200, backgroundColor: 'red'}}
              accessible={true}>
              <Text>This view is selected and disabled.</Text>
            </View>
          </RNTesterBlock>

          <RNTesterBlock title="View with label, hint, role, and state">
            <View
              accessible={true}
              accessibilityLabel="Accessibility label."
              accessibilityRole="button"
              accessibilityState={{selected: true}}
              accessibilityHint="Accessibility hint.">
              <Text>Accessible view with label, hint, role, and state</Text>
            </View>
          </RNTesterBlock>

          <RNTesterBlock title="TextInput with accessibilityLabelledBy attribute">
            <View>
              <Text nativeID="formLabel1">Mail Address</Text>
              <TextInput
                accessibilityLabel="input test1"
                accessibilityLabelledBy="formLabel1"
                style={styles.default}
              />
              <Text nativeID="formLabel2">First Name</Text>
              <TextInput
                accessibilityLabel="input test2"
                accessibilityLabelledBy={['formLabel2', 'formLabel3']}
                style={styles.default}
                value="Foo"
              />
            </View>
          </RNTesterBlock>
        </View>
      </ScrollView>
    );
  }
}

const RNTesterBlock = props => {
  return <View style={{marginTop: 100}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  default: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
  touchable: {
    backgroundColor: 'blue',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderStyle: 'solid',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  disabledImage: {
    width: 120,
    height: 120,
  },
  containerAlignCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default App;
