import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Login />
    // </div>
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgot" element={<Forgot />} />
          <Route exact path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
