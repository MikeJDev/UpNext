import React, {Component} from 'react';
import TodoList from '../TodoList'
import {connect} from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  removeSpecificTodo
} from '../../redux/actions/index'


class TodoContainer extends Component {

  handleCheckBoxComplete = (id) => {
    this.props.removeSpecificTodo(id)
  }

  render () {
      return (
        <View>
          <TodoList
            handleComplete={this.handleCheckBoxComplete}
          ></TodoList>
        </View>
      )
  }
}
const styles = StyleSheet.create({

})

function mapDispatchToProps(dispatch) {
  return {
    removeSpecificTodo: id => dispatch(removeSpecificTodo(id)),
  };
}

const connectedListContainer = connect(
  null,
  mapDispatchToProps
)(TodoContainer)

export default connectedListContainer