import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProdContext } from "../App";
import "./Forms.css";

export const SignIn = () => {
  const navigate = useNavigate();//usenavigate hook for redirecting
  const data = useContext(ProdContext);
  const [mobile, setMobile] = useState(); //state for user's mobile
  const [password, setPassword] = useState();//state for user's password
  const handleLogIn = (e) => {
    e.preventDefault();
    let userdata = JSON.parse(localStorage.getItem("userdata")); //data stored in local storage
    for (var i = 0; i < userdata.length; i++) {
      if (userdata[i].mobile !== mobile || mobile === "") {
        alert("Mobile Number not matched");
      } else if (userdata[i].password !== password || password === "") {
        alert("Please Enter Correct Password");
      } else {
        alert("LoggedIn Successfully");
        data.setLoggedIn(true);
        navigate("/Cart");
      }
    }
  };
  return (
    <div className="forms_container">
      <h2 style={{ textAlign: "center" }}>LogIn</h2>
      <form>
        <label for="mobile">Mobile Number</label>
        <input
          className="input"
          type="number"
          id="mobile"
          name="mobile"
          placeholder="Your mobile.."
          onChange={(e) => setMobile(e.target.value)}
        />

        <label for="password">Password</label>
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
          onClick={handleLogIn}
        />
      </form>
      <span class="psw">
        Forgot <a href="#0">password ?</a>
      </span>
      <p>
        New User ? Click <Link to="/SignUp">here to create an account</Link>
      </p>
    </div>
  );
};
