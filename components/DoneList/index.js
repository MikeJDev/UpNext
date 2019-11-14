import React,  {Component}  from 'react';
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';

class DoneList extends Component {
  static navigationOptions = {
    title: 'Completed',
  };

  render () {
    const swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgb(0, 0, 0)',
      }
    ]

    const doneCards = this.props.completedTodo.map((x, i) => {
      return (
        <Swipeout right={swipeoutBtns}
          autoClose='true'
          backgroundColor='transparent'>
          <Card key={i}>
              <View>
                <Text>
                  {x.title}
                </Text>
              </View>
          </Card>
        </Swipeout>
      )
    })

      return (
        <ScrollView>
        <View>
          <View>
            {doneCards}
          </View>
        </View>
      </ScrollView>
      )
    }
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
