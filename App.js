import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducer/index'
import {
  SafeAreaView, StyleSheet, View
} from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension'
import HomeNav from './components/HomeNav';


const store = createStore(rootReducer, composeWithDevTools())

const App = () => {
  console.disableYellowBox = true;
  return (
    <>
    <Provider store={ store }>
        <HomeNav></HomeNav>
    </Provider>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#d9d9d9'
//   }
// })

export default App;
