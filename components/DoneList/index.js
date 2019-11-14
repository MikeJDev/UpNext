import React,  {Component}  from 'react';
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout'
import {
  removeSpecificFromCompleted,
} from '../../redux/actions'

function mapDispatchToProps(dispatch) {
  return {
    removeSpecificFromCompleted: id => dispatch(removeSpecificFromCompleted(id)),
  };
}

class DoneList extends Component {
  static navigationOptions = {
    title: 'Completed',
  };

  handleSwipeRemove = (id) => {
    this.props.removeSpecificFromCompleted(id)
  }

  render () {
    const doneCards = this.props.completedTodo.map((x, i) => {
      const swipeoutBtns = [
        {
          text: 'Delete',
          backgroundColor: 'red',
          underlayColor: 'rgb(0, 0, 0)',
          onPress: () => this.handleSwipeRemove(x.id)
        }
      ]
      return (
        <Swipeout right={swipeoutBtns}
          autoClose={true}
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
            {doneCards}
          </View>
      </ScrollView>
      )
    }
  }



const mapStateToProps = state => ({
  completedTodo: state.Completed
})

const connectedDoneList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoneList)


export default connectedDoneList
