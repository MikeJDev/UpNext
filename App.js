import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducer/index'
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension'
import HomeNav from './components/HomeNav';


const store = createStore(rootReducer, composeWithDevTools())

const App = () => {
  return (
    <>
    <Provider store={ store }>
      {/* <SafeAreaView>
      </SafeAreaView> */}
        <HomeNav></HomeNav>
    </Provider>
    </>
  );
};

const styles = StyleSheet.create({

})

export default App;
