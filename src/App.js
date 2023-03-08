import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { store } from "./app/store";
import { Provider, useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import ProfileScreen from './screens/ProfileScreen'
import ErrorScreen from "./screens/ErrorScreen";
import "@stripe/stripe-js";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }))
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route path="*" element={<ErrorScreen />}/>
              <Route path="/" element={<HomeScreen />} />
              <Route path="profile" element={<ProfileScreen />}/>
            </Routes>
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
