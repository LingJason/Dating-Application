import Navbar from "../components/Navbar";
import React, { useState } from "react";
import AuthModal from "../components/AuthModal";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    console.log('clicked');
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
