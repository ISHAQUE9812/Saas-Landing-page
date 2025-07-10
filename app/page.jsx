import React from 'react'
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
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