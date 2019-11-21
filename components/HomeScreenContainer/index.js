import React, {Component} from 'react';
import Form from '../Form'
import ToDoListContainer from '../TodoContainer'
import {
  View, StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Todo List',
    headerStyle: {
      backgroundColor: '#4d4d4d',
      color: '#c44dff'
    },
    headerTitleStyle: {
      color: '#B1F971',
      fontSize: 25
    }
  }

  render () {
    
      return (
        <ScrollView style={styles.container}>
          <View>
            <Form></Form>
            <ToDoListContainer></ToDoListContainer>
          </View>
        </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#595959',
    height: '100%'
  }
})


export default HomeScreenContainer