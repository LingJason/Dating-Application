import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-route-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
