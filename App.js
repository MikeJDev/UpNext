import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducer/index'
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

export default App;
