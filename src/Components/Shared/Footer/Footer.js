import React from "react";
import { Link } from "react-router-dom";
import payment from "../../../images/payment.png";

const Footer = () => {
  return (
    <footer className="row text-center bg-dark p-4 text-white mt-5 d-flex align-items-center">
      <div className="col-lg-4">
        <div>
          <Link className="ms-2 text-decoration-none" to="/home">
            Home
          </Link>
          <Link className="ms-2 text-decoration-none" to="/about">
            About
          </Link>
          <Link className="ms-2 text-decoration-none" to="/bookings">
            Bookings
          </Link>
          <Link className="ms-2 text-decoration-none" to="/blogs">
            Blogs
          </Link>
          <Link className="ms-2 text-decoration-none" to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className="fs-4">
          <a href="#" target="_blank" rel="noreferrer">
            <i className="fa fa-youtube-square" aria-hidden="true"></i>
          </a>{" "}
          <a href="#" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook-square ml-4" aria-hidden="true"></i>
          </a>{" "}
          <a href="#" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram ml-4" aria-hidden="true"></i>
          </a>{" "}
          <a href="#" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter ml-4" aria-hidden="true"></i>
          </a>
        </div>
        <h6>Copyright &copy; {new Date().getFullYear()} Air Ticket</h6>
      </div>
      <div className="col-lg-3"></div>
      <div className="col-lg-5 mt-3">
        <img src={payment} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
