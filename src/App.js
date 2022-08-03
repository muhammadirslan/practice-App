import React from "react";
import "./Card.css";
import "./App.css";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import Cart from "./Cart";
import { AuthProvider } from "./authContext";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <AuthProvider>
          <Route path="/cart" element={<Cart />} />
          <Route path="signin" element={<SignIn />} />
        </AuthProvider>
      </Routes>
    </div>
  );
}

export default App;
