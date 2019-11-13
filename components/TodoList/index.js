import React from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';


const TodoList = ({
  todo,
  handleComplete
}) => {
  const dataArray = []
  const rawTodos = todo.map((el, x) => {
    dataArray.push({id: x, 'title': el.title})
  })
  
  return (
    <View>
      <FlatList
        data={dataArray}
        renderItem={({item}) => 
        <TouchableOpacity
          onPress={() => handleComplete(item.id)}
          ><Text style={styles.listItem} >{item.title}</Text> 
        </TouchableOpacity>}
        keyExtractor={item => item.id.toString()}
      ></FlatList>
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