import React, { useEffect, useState } from "react";
import ReviewsDetails from "./ReviewsDetails";
import founder from "../../../images/founder.jpg";
const reviews = [
  {
    id: "1",
    name: "Naim",
    imageURL: founder,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!",
  },
  {
    id: "2",
    name: "Shoshe",
    imageURL: founder,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!",
  },
  {
    id: "3",
    name: "Durjoy",
    imageURL: founder,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias repudiandae rem voluptatum dignissimos!",
  },
];

const Testimonials = () => {
  return (
    <div className="container mt-5">
      <h3 className="container mb-5 text-center">
        Whats Peoples Told About Us
      </h3>

      <div className="row">
        {reviews.map((review) => (
          <ReviewsDetails key={review._id} review={review}></ReviewsDetails>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
