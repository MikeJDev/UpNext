import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import {connect} from 'react-redux'
import {
  addTodo,
} from '../../redux/actions'
import DoneList from '../DoneList/index'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (this.state.title !== "") {
      this.props.addTodo({ title });
    }
    this.setState({ title: "" });
  }

  render () {
      return (
        <View>
          <Text style={styles.header}>To-Do List</Text>
          <TextInput
            style={styles.input}
            placeholder="Add Tasks"
            returnKeyType="done"
            returnKeyLabel="done"
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={this.handleSubmit}
          ></TextInput>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'helvetica',
    fontWeight: '900'
  },
  input: {
    height: 40,
    margin: 5
  }
})

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
}

const connectedForm = connect(
  null,
  mapDispatchToProps
)(Form)
export default connectedForm