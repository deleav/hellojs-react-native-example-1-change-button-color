/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class HellojsExample extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      style: styles.button1
    }
  }

  changeColor = () => {
    if ( this.state.style == styles.button1 )
      this.setState({
        style: styles.button2
      });
    else if ( this.state.style == styles.button2 )
      this.setState({
        style: styles.button1
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeColor} style={this.state.style}>
          <Text>press me to change style</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button1: {
    backgroundColor: '#81D8D0',
    padding: 20
  },
  button2: {
    backgroundColor: '#DDA0DD',
    padding: 20
  }
});

AppRegistry.registerComponent('HellojsExample', () => HellojsExample);
