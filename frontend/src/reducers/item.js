const itemReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return action.payload;
    case "ADD_ITEM":
      return action.payload;
    case "DELETE_ITEM":
      return action.payload;
    case "UPDATE_ITEM":
      return action.payload;
    default:
      return state;
  }
};
export default itemReducer;
