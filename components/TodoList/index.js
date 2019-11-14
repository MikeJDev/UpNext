import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'

const TodoList = ({
  todo,
  handleComplete
}) => {
  const todoCards = todo.map((x, i) => {
    x.id = i
    console.log(x)
    return (
      <Card key={i}>
        <View>
        <TouchableOpacity
          onPress={() => handleComplete(x.id)}
          ><Text>
            {x.title}
          </Text>
          </TouchableOpacity>
        </View>
      </Card>
    )
  })
  
  return (
    <View>
      {todoCards}
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 7,
    borderColor: 'black',
    borderWidth: .5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 3,
    marginTop: 2,
    borderRadius: 4
  }
})
const mapStateToProps = state => ({
  todo: state.Todos
})

const ToDoList = connect(mapStateToProps)(TodoList)

export default ToDoList