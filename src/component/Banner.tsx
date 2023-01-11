import React from "react";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import hrBanner from "../images/horizontalBanner.png";
import "../App.css";
import { Cards } from "./Cards";

export const Banner = () => {
  return (
    <>
      <div className="container_banner">
        <div className="card">
          <img src={banner1} className="card-img-top" alt="..." />
        </div>
        <div className="card">
          <img src={banner2} className="card-img-top" alt="..." />
        </div>
        <div className="card">
          <img src={banner3} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="horizontal_banner">
        <img
          src={hrBanner}
          className="hr_banner"
          alt="..."
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <Cards />
    </>
  );
};
