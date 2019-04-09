
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './Style';

export default class TestScreen extends Component {

  static navigationOptions = { header: null };

  componentWillMount = () => {
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
