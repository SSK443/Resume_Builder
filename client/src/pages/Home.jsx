import React from 'react'
import Banner from '../components/home/Banner'
import FeatureSection from '../components/home/FeatureSection'
import HeroSection from '../components/home/Herosection'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'

function Home() {
  return (
    <div>
      <Banner />
      <HeroSection />
      <FeatureSection id="features" />
      <Testimonials id="testimonials" />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home
