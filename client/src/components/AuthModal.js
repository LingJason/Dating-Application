import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function AuthModal(props) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);

  const nav = useNavigate()

  const handleClick = () => {
    props.setShowModal(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (props.isSignUp && (password !== confirmPassword)) {
        setError("Passwords do not match!")
        return
      }
      const response = await axios.post(`http://localhost:8000/${props.isSignUp ? 'signup' : 'login'}`, {email, password})

      setCookies("AuthToken", response.data.token)
      setCookies("UserId", response.data.userId)

      if (response.status === 201 && props.isSignUp) nav("/profile")
      if (response.status === 201 && !props.isSignUp) nav("/dashboard")
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