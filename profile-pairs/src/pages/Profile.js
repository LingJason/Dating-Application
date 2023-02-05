import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {

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
            <input
            id="female"
            type="radio"
            name="gender"
            value={"female"}
            checked={false}
            onChange={handleChange}
            />
            <input
            id="LGBTQ2Q+"
            type="radio"
            name="gender"
            value={"LGBTQ2Q+"}
            checked={false}
            onChange={handleChange}
            />
            
          </div>
      </section>
      </form>
    </div>
    </>
  )
};