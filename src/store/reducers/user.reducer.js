export function userReducer(state, action) {
  if (action.type === "SET_AUTH_USER") {
    return {
      ...state,
      user: action.payload 
    };
  }

  return state;
}