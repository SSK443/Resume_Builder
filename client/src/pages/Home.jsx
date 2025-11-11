// Home.jsx
import React from "react";
import Banner from "../components/home/Banner";
import FeatureSection from "../components/home/FeatureSection";
import HeroSection from "../components/home/HeroSection";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div>
      <Banner />
      <HeroSection />
      <div id="features">
        <FeatureSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <CallToAction />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
