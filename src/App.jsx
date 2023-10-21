import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

import "./App.css";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Register User</h2>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Create User</button>
      </div>

      <div className="container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Log In</button>
      </div>

      <div className="container">
        <h4>
          User Logged In: <span>{user?.email}</span>
        </h4>
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;
