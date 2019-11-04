import React, {Component} from 'react';
import DoneList from '../DoneList'
import TodoList from '../TodoList'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class TodoContainer extends Component {
  render () {
      return (
        <View>
          <DoneList></DoneList>
          <TodoList></TodoList>
        </View>
      )
  }
}

export default TodoContainer