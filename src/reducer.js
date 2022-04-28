const initialStateValues = {
  name: "prajakta"
};

export const reducerAction = function (state = initialStateValues, action) {
  switch (action.type) {
    case "showData":
      return {
        ...state
      };
    default:
      return state;
  }
};
