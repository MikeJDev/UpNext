import React, {Component} from 'react';
import Form from '../Form'
import ToDoListContainer from '../TodoContainer'
import {
  View, StyleSheet,
} from 'react-native';

class HomeScreenContainer extends Component {

  render () {
      return (
        <View>
          <Form></Form>
          <ToDoListContainer></ToDoListContainer>
        </View>
      )
  }
}


export default HomeScreenContainer