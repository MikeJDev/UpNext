import React, {Component} from 'react';
import Form from '../Form'
import ToDoListContainer from '../TodoContainer'
import {
  View,
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