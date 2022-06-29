const userReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOG_OUT":
      return state;
    default:
      return state;
  }
};
export default userReducer;
