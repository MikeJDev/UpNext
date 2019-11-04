import {
  ADD_TODO
} from '../actionTypes/index'

const initialState = {
  Todos: [],
  Completed: []
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        Todos: state.Todos.concat(action.payload)
      }
      default: 
        return state
    }
  }

  export default rootReducer