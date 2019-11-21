import React, {Component} from 'react';
import { StyleSheet, View, TextInput} from 'react-native';
import {connect} from 'react-redux'
import {
  addTodo,
} from '../../redux/actions'

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (this.state.title !== "") {
      this.props.addTodo({ title });
    }
    this.setState({ title: '' });
  }

  render () {
      return (
        <View style={styles.container}>
          <TextInput 
            style={styles.input}
            placeholder="Click here to add tasks"
            placeholderTextColor="#B1F971"
            returnKeyType="done"
            returnKeyLabel="done"
            onChangeText={(title) => this.setState({title})}
            onSubmitEditing={this.handleSubmit}
            value={this.state.title}
          ></TextInput>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#595959',
  },  
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'helvetica',
    fontWeight: '900',
    color: 'rgb(179, 138, 245)'
  },
  input: {
    height: 40,
    margin: 5,
    padding: 5,
  }
})

const connectedForm = connect(
  null,
  mapDispatchToProps
)(Form)
export default connectedForm