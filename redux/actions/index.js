export const addTodo = todo => (
  {
    type: 'ADD_TODO',
    payload: todo
  }
)

export const removeSpecificTodo = todo => (
  {
    type: 'REMOVE_SPECIFIC_TODO',
    payload: todo
  }
)

export const removeSpecificFromCompleted = todo => (
  {
    type: 'REMOVE_SPECIFIC_FROM_COMPLETED',
    payload: todo
  }
)
