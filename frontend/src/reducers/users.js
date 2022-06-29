const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    case "ADD_USER":
      return action.payload;
    case "DELETE_USER":
      return action.payload;
    case "UPDATE_USER":
      return action.payload;
    default:
      return state;
  }
};
export default usersReducer;
