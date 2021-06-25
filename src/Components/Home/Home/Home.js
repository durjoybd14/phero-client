import React from "react";
import Header from "../Header/Header";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
