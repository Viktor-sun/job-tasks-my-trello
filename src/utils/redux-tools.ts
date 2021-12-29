export const createAction = <T>(type: string) => {
  function actionCreator(payload?: T) {
    return {
      type,
      payload,
    };
  }

  actionCreator.toString = () => type;
  actionCreator.type = type;

  return actionCreator;
};

export const createAsyncActions = (type: string) => {
  return {
    Request: createAction(type + "Request"),
    Success: createAction(type + "Success"),
    Error: createAction(type + "Error"),
  };
};
