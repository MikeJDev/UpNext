import React from 'react';
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


const DoneList = ({
  completedTodo
}) => {
  const todoCards = completedTodo.map((x, i) => {
    return (
      <Card>
        <View key={i}>
          <Text>
            {x.title}
          </Text>
        </View>
      </Card>
    )
  })
  console.log('todoCards:', todoCards)
      return (
        <ScrollView>

        <View>
          <Text style={styles.header}>Completed</Text>
          <View>
            {todoCards}
            {/* <Card style={styles.card}>
                {
                  completedTodo.map((todo, i) => {
                    return (
                      <View key={i} style={styles.item}>
                      <Text >{todo.title}</Text>
                      </View>
                      );
                    })
                  }
                </Card> */}
          </View>
        </View>
      </ScrollView>
      )
}

const mapStateToProps = state => ({
  completedTodo: state.Completed
})

const ToDoDoneList = connect(mapStateToProps)(DoneList)


const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'helvetica',
    fontWeight: '900'
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    width: '100%'
  },
  card: {
    height: '100%',
    backgroundColor: 'black'
  }
})


export default ToDoDoneList
