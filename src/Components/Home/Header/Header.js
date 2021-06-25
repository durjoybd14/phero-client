import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/top-banner.jpg";
const Header = () => {
  return (
    <main className="container py-5">
      <div className="row d-flex align-items-center justify-content-center ">
        <div className="col-lg-6 p-5">
          <h2>Get the Air Ticket at Cheapest Price Here</h2>
          <p className="text-muted mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sit at enim dolores tempora totam nesciunt quis itaque excepturi
            voluptatibus ...
          </p>
          <Link to="/bookings" className="btn btn-primary mt-3">
            Book Now
          </Link>
        </div>
        <div className="col-lg-6">
          <img src={banner} alt="" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default Header;
