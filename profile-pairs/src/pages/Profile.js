import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {

  const handleSubmit = () => {
    console.log("handle Submit");
  }

  const handleChange = () => {
    console.log("handle change")
  }

  return (
    <>
    <Navbar
      showModal={false}
      setShowModal={() => {}}
      />
    <div className="profile">
      <h2>Create Profile</h2>

      <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          placeholder="First Name"
          required={true}
          value={""}
          onChange={handleChange}
          />

        <label>Last Name</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          placeholder="Last Name"
          required={true}
          value={""}
          onChange={handleChange}
          />

        <label>Date of Birth</label>
        <input
          id="dob"
          type="text"
          name="dob"
          placeholder="Date of Birth"
          required={true}
          value={""}
          onChange={handleChange}
          />

        <label>Gender</label>
        <div className="multiple-input">
          <input
            id="male"
            type="radio"
            name="gender"
            value={"male"}
            checked={false}
            onChange={handleChange}
            />
            <label htmlFor="male-gender">Male</label>
            <input
            id="female"
            type="radio"
            name="gender"
            value={"female"}
            checked={false}
            onChange={handleChange}
            />
            <label htmlFor="female-gender">Female</label>
            <input
            id="LGBTQ2Q+"
            type="radio"
            name="gender"
            value={"LGBTQ2Q+"}
            checked={false}
            onChange={handleChange}
            />
            <label htmlFor="LGBTQ2Q+">LGBTQ2Q+</label>
          </div>

          <label>Show Me</label>
          <div className="multiple-input-container">
          <input
            id="male_interest"
            type="radio"
            name="gender"
            value={"male"}
            checked={false}
            onChange={handleChange}
            />
            <label htmlFor="male-interest">Male</label>
            <input
            id="female_interest"
            type="radio"
            name="gender"
            value={"female"}
            checked={false}
            onChange={handleChange}
            />
            <label htmlFor="female-interest">Female</label>
            <input
            id="LGBTQ2Q+_interest"
            type="radio"
            name="gender"
            value={"LGBTQ2Q+"}
            checked={false}
            onChange={handleChange}
            />
            <label htmlFor="LGBTQ2Q+-interest">LGBTQ2Q+</label>
          </div>

          <label htmlFor="about">About Me</label>
          <input
            id="about"
            type="text"
            name="about"
            required={true}
            placeholder="Anything interesting you would like others to know"
            value={""}
            onchange={handleChange}
          />
      </section>
      </form>
    </div>
    </>
  )
};