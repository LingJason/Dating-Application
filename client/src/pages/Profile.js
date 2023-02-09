import React, {useState} from "react";
import Navbar from "../components/Navbar";

export default function Profile() {

  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob: "",
    gender: "",
    gender_interest: "",
    email: "",
    url: "",
    about: "",
    matches: []
  })

  const handleSubmit = () => {
    console.log("handle Submit");
  }

  const handleChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    const name = event.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
 
  return (<>
    <Navbar showModal={false}
      setShowModal={
        () => {}
      }/>
    <div className="profile">
      <h2>Create Profile</h2>

      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="first_name">First Name</label>
          <input id="first_name" type="text" name="first_name" placeholder="First Name"
            required={true}
            value={formData.first_name}
            onChange={handleChange}/>

          <label>Last Name</label>
          <input id="last_name" type="text" name="last_name" placeholder="Last Name"
            required={true}
            value={formData.last_name}
            onChange={handleChange}/>

          <label>Date of Birth</label>
          <input id="dob" type="text" name="dob" placeholder="Date of Birth"
            required={true}
            value={formData.dob}
            onChange={handleChange}/>

          <label>Gender</label>
          <div className="multiple-input">

            <input id="male" type="radio" name="gender"
              value={"male"}
              checked={formData.gender === "male"}
              onChange={handleChange}/>
            <label htmlFor="male-gender">Male</label>

            <input id="female" type="radio" name="gender"
              value={"female"}
              checked={formData.gender === "female"}
              onChange={handleChange}/>
            <label htmlFor="female-gender">Female</label>

            <input id="LGBTQ2Q+" type="radio" name="gender"
              value={"LGBTQ2Q+"}
              checked={formData.gender === "LGBTQ2Q+"}
              onChange={handleChange}/>
            <label htmlFor="LGBTQ2Q+">LGBTQ2Q+</label>
          </div>

          <label>Show Me</label>
          <div className="multiple-input-container">

            <input id="male-interest" type="radio" name="gender_interest"
              value={"male"}
              checked={formData.gender_interest === "male"}
              onChange={handleChange}/>
            <label htmlFor="male-interest">Male</label>

            <input id="female-interest" type="radio" name="gender_interest"
              value={"female"}
              checked={formData.gender_interest === "female"}
              onChange={handleChange}/>
            <label htmlFor="female-interest">Female</label>

            <input id="LGBTQ2Q+-interest" type="radio" name="gender_interest"
              value={"LGBTQ2Q+"}
              checked={formData.gender_interest === "LGBTQ2Q+"}
              onChange={handleChange}/>
            <label htmlFor="LGBTQ2Q+-interest">LGBTQ2Q+</label>
          </div>

          <label htmlFor="about">About Me</label>
          <input id="about" type="text" name="about"
            required={true}
            placeholder="Anything interesting you would like others to know"
            value={formData.about}
            onChange={handleChange}/>
          <input type="submit"/>
        </section>

        <section>
          <label htmlFor="profile_pics">Profile Pictures #1</label>
          <input type="url" name="pp" id="pp1"
            onChange={handleChange}
            required={true}/>
          <label htmlFor="profile_pics">Profile Pictures #2</label>
          <input type="url" name="pp" id="pp2"
            onChange={handleChange}
            required={true}/>
          <label htmlFor="profile_pics">Profile Pictures #3</label>
          <input type="url" name="pp" id="pp3"
            onChange={handleChange}
            required={true}/>

          <div className="photo-container"></div>
            <img src={formData.url} alt="profile picture preview"/>
        </section>
      </form>
    </div>
  </>)
};
