import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie"

function App() {
  const [cookies, setCookie, removeCookie] = useState(['users'])
  const authToken = cookies.authToken


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
