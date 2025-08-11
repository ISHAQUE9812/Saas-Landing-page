import React from 'react'
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Footer from "./components/Footer";


const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}

export default HomePage