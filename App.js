import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducer/index'
import {
  SafeAreaView,
} from 'react-native';
import Form from './components/Form/index'
import TodoContainer from './components/TodoContainer/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import HomeScreenContainer from './components/HomeScreenContainer'

const store = createStore(rootReducer, composeWithDevTools())

const App = () => {
  return (
    <>
    <Provider store={ store }>
      <SafeAreaView>
        <HomeScreenContainer></HomeScreenContainer>
      </SafeAreaView>
    </Provider>
    </>
  );
};

export default App;
