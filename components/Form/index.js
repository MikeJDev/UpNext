import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  handleSubmit = text => {
    this.setState({ text: text})
  }

  render () {
      return (
        <View>
          <Text style={styles.header}>To-Do List</Text>
          <TextInput
            style={styles.input}
            placeholder="Add Tasks"
            returnKeyType="done"
            returnKeyLabel="done"
          ></TextInput>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'helvetica',
    fontWeight: '900'
  },
  input: {
    height: 40,
    margin: 5
  }
})

export default Form