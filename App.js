
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Chat from './components'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chat/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
