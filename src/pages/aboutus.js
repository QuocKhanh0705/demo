import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <> 
    <Hero>
    <Banner title="404" subtitle="page not found">
      <Link to="/" className="btn-primary">
       hello
      </Link>
    </Banner>
  </Hero>
     
    </>
  );
};

export default AboutUs;
