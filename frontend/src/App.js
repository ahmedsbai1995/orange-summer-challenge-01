import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { get_Items, get_User } from "./actions";
import { useEffect, useState } from "react";

function App() {
  const items = useSelector((state) => state.items);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //state
  const [mode, setMode] = useState("login");
  const [loginemail, setLoginemail] = useState("");
  const [registeremail, setRgisteremail] = useState("");
  const [password, setPassword] = useState("");
  const [registerfirstname, setRegisterfirstname] = useState("");
  const [registerlastname, setRegisterlastname] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  //renders
  const loginRender = (
    <div className="login">
      <label>email</label>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(event) => {
          setLoginemail(event.target.value);
        }}
      ></input>
      <label>password</label>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(get_User(loginemail, password));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setMode("register");
        }}
      >
        Register
      </button>
    </div>
  );
  const registerRender = (
    <div className="register">
      <label>email</label>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(event) => {
          setRgisteremail(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter votre prenom"
        onChange={(event) => {
          setRgisteremail(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter votre nom"
        onChange={(event) => {
          setRgisteremail(event.target.value);
        }}
      ></input>
      <label>password</label>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(event) => {
          setPassword1(event.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="Repeter password"
        onChange={(event) => {
          setPassword2(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(get_User(loginemail, password));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setMode("register");
        }}
      >
        Register
      </button>
    </div>
  );
  const homeRender = (
    <div>
      <h1>This is the home render</h1>
    </div>
  );
  useEffect(() => {
    console.log("triggered useeffect");
  }, [items, users, user]);
  return (
    <div className="App">
      {user._id
        ? homeRender
        : mode === "register"
        ? registerRender
        : loginRender}
    </div>
  );
}

export default App;
