import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.css";
export const SignUp = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]); //array to store the user details
  const [name, setName] = useState(""); // state for name
  const [email, setEmail] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password
  const [mobile, setMobile] = useState(""); // state for mobile
  const handleRegister = (e) => {
    e.preventDefault();
    var userSignedUp = true;
    var obj = {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
    };
    // Validation
    if (!isNaN(obj.name) || obj.name === "") {
      alert("Please Enter your Full Name");
      userSignedUp = false;
    } else if (
      isNaN(obj.mobile) ||
      obj.mobile === "" ||
      obj.mobile.length < 10
    ) {
      alert("Please Enter Valid Mobile Number");
      userSignedUp = false;
    } else if (obj.password.length < 10) {
      alert("Password should be of 10 character");
      userSignedUp = false;
    }
    if (userSignedUp === true) {
      alert("Details Saved Successfully");
      userDetails.push(obj);
      setUserDetails([...userDetails]);
      localStorage.setItem("userdata", JSON.stringify(userDetails));
      navigate("/SignIn");
    }
  };
  return (
    <>
      <div className="forms_container">
        <h2 style={{ textAlign: "center" }}>Create An Account</h2>
        <form>
          <label for="name">Name</label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            onChange={(e) => setName(e.target.value)}
          />
          <label for="email">Email</label>
          <input
            className="input"
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="mobile">Phone Number</label>
          <input
            className="input"
            type="number"
            id="number"
            name="number"
            placeholder="Your mobile number.."
            onChange={(e) => setMobile(e.target.value)}
          />
          <label for="lname">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="Your password.."
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input"
            type="submit"
            value="Submit"
            onClick={handleRegister}
          />
        </form>
        <p>
          Already a user ? Click <Link to="/SignIn">here to login</Link>
        </p>
      </div>
    </>
  );
};
