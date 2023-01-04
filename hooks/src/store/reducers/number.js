export function numberReducer(state, action) {
  switch (action.type) {
    case "number_action":
      return { ...state, number: action.payload };
    case "addN":
      return { ...state, number: action.payload };
    default:
      return state;
  }
}
