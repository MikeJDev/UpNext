import {
  ADD_TODO,
  REMOVE_SPECIFIC_TODO
} from '../actionTypes/index'

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
      })

      case REMOVE_SPECIFIC_TODO:
      let array = [...state.Todos]
      // let array2 = [...state.Completed]
      // array2.push[array[action.payload]]
      array.splice(action.payload, 1)

      return Object.assign({}, state, {
        ...state,
        Todos: array
      })

      default: 
        return state
    }
  }

  export default rootReducer