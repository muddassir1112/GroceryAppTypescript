import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProdContext } from "../App";
import logoImg from "../images/logo.png";

export const Navbar = () => {
  const data: any = useContext(ProdContext as any);
  const navigate = useNavigate();
  // function to logged in
  const isLoggedIn = (e: any) => {
    e.preventDefault();
    if (data.loggedIn === true) {
      data.setLoggedIn(true);
      navigate("/Cart");
    } else navigate("/SignUp");
  };
  return (
    <>
      <div className="top-linear"></div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginBottom: "-28px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logoImg} alt="logo"></img>
          </Link>
          {/* search open */}
          <div
            className="input-group mb-3"
            style={{ width: "40%", marginLeft: "2%", marginRight: "2%" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i className="fas fa fa-search"></i>
            </button>
          </div>
          {/* search close */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a
                  className="nav-link active dropdown-toggle"
                  aria-current="page"
                  href="#0"
                >
                  <i className="fas fa fa-map-marker-alt"></i> Location
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active dropdown-toggle" to="/SignIn">
                  <i className="fas fa fa-user-alt"></i> Sign in to your account
                </Link>
              </li>
              <li className="nav-item">
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  className="nav-link active dropdown-toggle"
                  aria-disabled="true"
                  onClick={isLoggedIn}
                >
                  <i className="fa fa-shopping-cart"></i> My Cart{" "}
                  <span style={{ color: "red" }}>
                    {data.productDetails.length}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr></hr>
    </>
  );
};
