import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Welcome to Adoda Resort"
          subtitle="Tinh hoa văn hóa Việt"
        >
          <Link to="/rooms" className="btn-primary">
            Xem phòng ngay
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
