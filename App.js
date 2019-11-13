import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducer/index'
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension'
import HomeScreenContainer from './components/HomeScreenContainer'
import HomeNav from './components/HomeNav';


const store = createStore(rootReducer, composeWithDevTools())

const App = () => {
  return (
    <>
    <Provider store={ store }>
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
        <HomeNav></HomeNav>
    </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(29, 29, 29)'
  }, 
})

export default App;
