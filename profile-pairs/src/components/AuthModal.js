import React, { useState } from "react";

export default function AuthModal(props) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    props.setShowModal(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      if (props.isSignUp && (password !== confirmPassword)) {
        setError("Passwords do not match!")
      }
    }
    catch(err) {
      console.log(err.message)
    }
  }
  


  return (
    <div className="auth-modal">
      <div onClick={handleClick}>Exit</div>
      <h2>{props.isSignedUp ? "Create Account" : "Login"}</h2>
      <p>Term and Agreement</p>
      <form onSubmit ={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(event) => setPassword(event.target.value)}
        />
        {props.isSignedUp && <input
          type="password"
          id="password-checker"
          name="password-checker"
          placeholder="Confirm Password"
          required={true}
          onChange={(event) => setConfirmPassword(event.target.value)}
        /> }
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
    </div>
  )
};