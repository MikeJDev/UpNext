import React,  {Component}  from 'react';
import {connect} from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout'
import {
  removeSpecificFromCompleted,
  undo
} from '../../redux/actions'

function mapDispatchToProps(dispatch) {
  return {
    removeSpecificFromCompleted: id => dispatch(removeSpecificFromCompleted(id)),
    undo: id => dispatch(undo(id))
  };
}

class DoneList extends Component {
  static navigationOptions = {
    title: 'Completed',
    headerStyle: {
      backgroundColor: '#4d4d4d'
    },
    headerTitleStyle: {
      color: '#B1F971',
      fontSize: 25
    }
  };

  handleSwipeRemove = (id) => {
    this.props.removeSpecificFromCompleted(id)
  }

  handleUndo = (id) => {
    this.props.undo(id)
  }

  render () {
    const doneCards = this.props.completedTodo.map((x, i) => {
      const swipeoutBtns = [
        {
          text: 'Delete',
          backgroundColor: 'red',
          underlayColor: 'rgb(0, 0, 0)',
          onPress: () => this.handleSwipeRemove(x.id),
        },
        {
          text: 'Undo',
          backgroundColor: 'orange',
          underlayColor: 'rgb(0, 0, 0)',
          onPress: () => this.handleUndo(x.id)
        }
      ]
      return (
        <View style={styles.cards}>
          <Swipeout right={swipeoutBtns}
            autoClose={true}
            backgroundColor='transparent'>
            <Card key={i} containerStyle={styles.card}>
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
          <View style={styles.container}>
        <ScrollView style={styles.view}>
            {doneCards}
      </ScrollView>
          </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#595959',
      height: '100%',
    },
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
      marginTop: 10,
    },
    cards: {
      margin: 5
    }
  })



const mapStateToProps = state => ({
  completedTodo: state.Completed
})

const connectedDoneList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoneList)


export default connectedDoneList
