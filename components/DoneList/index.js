import React from 'react';
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


const DoneList = ({
  completedTodo
}) => {
  const doneCards = completedTodo.map((x, i) => {
    return (
      <Card key={i}>
        <View>
          <Text>
            {x.title}
          </Text>
        </View>
      </Card>
    )
  })
      return (
        <ScrollView>

        <View>
          <Text style={styles.header}>Completed</Text>
          <View>
            {doneCards}
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
})


export default ToDoDoneList
