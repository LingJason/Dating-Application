import Navbar from "../components/Navbar";
import React, { useState } from "react";
import AuthModal from "../components/AuthModal";
import { useCookies } from "react-cookie";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [cookies, setCookies, removeCookies] = useCookies(['user'])

  const authToken = cookies.authToken;

  const handleClick = () => {
    if (authToken) {
      removeCookie('UserId', cookies.UserId)
      removeCookie('AuthToken', cookies.authToken)
      window.location.reload
      return
    }
    setShowModal(true);
    setIsSignedUp(true);
  }

  return (
  <>
  <div className="overlay">
  <Navbar
  authToken={authToken} 
    showModal ={showModal} 
    setShowModal={setShowModal}
    setIsSignedUp={setIsSignedUp} />
    <div className="home">
      <h1>Personality Pairs</h1>
      <button className="primary-button"
        onClick={handleClick}> {
        authToken ? "Signout" : "Create Account"
      } </button>

      {showModal && (<AuthModal setShowModal={setShowModal} isSignedUp={isSignedUp}/>)}
    </div>
    </div>
  </>)
};
