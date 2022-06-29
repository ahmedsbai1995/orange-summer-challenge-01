import axios from "axios";

//login
const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const get_User = (email, password) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5000/users/login", { password, email })
      .then((response) => {
        console.log(`get_User(LOGIN) data : `);
        console.log(response.data);
        dispatch(login(response.data));
        if (response.data._id) {
          //connection
          dispatch(get_Items());
        }
      })
      .catch((error) => {
        console.log("get_User(LOGIN) catched an error : ", error);
      });
  };
};

//get items
const getItems = (data) => {
  return {
    type: "GET_ITEMS",
    payload: data,
  };
};

export const get_Items = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/items")
      .then((response) => {
        console.log("here we are", response);
        dispatch(getItems(response.data));
      })
      .catch((error) => {
        console.log("get_items catched an error : ", error);
      });
  };
};
