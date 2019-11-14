import {
  ADD_TODO,
  REMOVE_SPECIFIC_TODO,
  REMOVE_SPECIFIC_FROM_COMPLETED,
  UNDO
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
        let array3 = [...state.Completed]
        array3.splice(action.payload, 1)
        return Object.assign({}, state, {
          ...state,
          Completed: array3
        })

        case UNDO:
          console.log(action.payload)
          let array5 = [...state.Todos]
          let array4 = [...state.Completed]
          array5.push(array4[action.payload])
          array4.splice(action.payload, 1)
        return Object.assign({}, state, {
          ...state, 
          Todos: array5,
          Completed: array4
        })


      default: 
        return state
    }
  }

  export default rootReducer