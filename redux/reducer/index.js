import {
  ADD_TODO,
  REMOVE_SPECIFIC_TODO,
  REMOVE_SPECIFIC_FROM_COMPLETED
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
      let array2 = [...state.Completed]
      array2.push(state.Todos[action.payload])
      array.splice(action.payload, 1)

      return Object.assign({}, state, {
        ...state,
        Completed: array2,
        Todos: array
      })

      case REMOVE_SPECIFIC_FROM_COMPLETED:
        console.log(action.payload)
        let array3 = [...state.Completed]
        array3.splice(action.payload, 1)
        return Object.assign({}, state, {
          ...state,
          Completed: array3
        })

      default: 
        return state
    }
  }

  export default rootReducer