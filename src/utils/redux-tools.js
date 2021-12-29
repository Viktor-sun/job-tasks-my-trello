export const createAction = type => {
  function actionCreator(payload) {
    return {
      type,
      payload,
    }
  }

  actionCreator.toString = () => type
  actionCreator.type = type

  return actionCreator
}

export const createAsyncActions = type => {
  return {
    Request: createAction(type + 'Request'),
    Success: createAction(type + 'Success'),
    Error: createAction(type + 'Error'),
  }
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
