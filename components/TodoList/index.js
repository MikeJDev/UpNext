import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'
import Swipeout from 'react-native-swipeout';
import { ScrollView } from 'react-native-gesture-handler';

const TodoList = ({
  todo,
  handleComplete
}) => {
  const todoCards = todo.map((x, i) => {
    const swipeoutBtns = [
      {
        text: 'Complete',
        backgroundColor: 'green',
        underlayColor: 'rgb(0, 0, 0)',
        onPress: () => handleComplete(x.id)
      }
    ]
    x.id = i
    return (
      <View key={i}>
      <Swipeout right={swipeoutBtns}
          autoClose={true}
          backgroundColor='transparent'>
        <Card>
          <View>
            <Text>
              {x.title}
            </Text>
          </View>
        </Card>
      </Swipeout>
      </View>
    )
  })
  
  return (
    <ScrollView>
      <View>
        {todoCards}
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => ({
  todo: state.Todos
})

const ToDoList = connect(mapStateToProps)(TodoList)

export default ToDoList