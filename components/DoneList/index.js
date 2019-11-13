import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const DoneList = ({
  todo
}) => {
  console.log('todo:', todo)

  // const todoItems = todo.map((x, y) => {
  //   <Text key={y}>{x.title}</Text>
  // })
      return (
        <View>
          <Text>Done List</Text>
          <Text>
          {todo}
          </Text>
        </View>
      )
}

export default DoneList
