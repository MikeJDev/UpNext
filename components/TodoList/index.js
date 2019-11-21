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
        onPress: () => handleComplete(i)
      }
    ]
    return (
      <View key={i} style={styles.view}>
      <Swipeout right={swipeoutBtns}
          autoClose={true}
          backgroundColor='transparent'>
        <Card containerStyle={styles.card}>
          <View>
            <Text style={styles.text}>
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

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#e6e6e6',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0
  },
  text: {
    fontSize: 25,
    fontWeight: '600'
  },
  view: {
    margin: 5
  }
})

const mapStateToProps = state => ({
  todo: state.Todos
})

const ToDoList = connect(mapStateToProps)(TodoList)

export default ToDoList