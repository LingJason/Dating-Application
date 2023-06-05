import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['users'])
  const authToken = cookies.AuthToken


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {authToken && <Route path="/dashboard" element={<Dashboard/>}/> }
      {authToken && <Route path="/profile" element={<Profile/>}/> }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
