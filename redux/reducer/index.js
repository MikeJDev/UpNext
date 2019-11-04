import {combineReducers} from 'redux'

const initialState = {
  Todos: [],
  Completed: []
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        ...state,
        Todos: state.Todos.concat(action.payload)
      });
    }
  }

export default combineReducers({
  TodosReducer: rootReducer,
})