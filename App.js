import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = { nombre: 'instagram-clone'};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
