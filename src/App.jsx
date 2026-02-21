import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsCarousel from './components/ProductsCarousel'
import Promo from './components/Promo'
import Reviews from './components/Reviews'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'
import './index.css'

function App() {
   return (
    <>
      <Navbar />

      {/* Hero must NOT be inside any max-width container */}
      <Hero />

      {/* Other sections CAN be inside a container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Products, Promos, etc here */}
        <ProductsCarousel />
      </div>
      <Promo />
      <Reviews />
      <div className="h-10">
        <About />
        <Footer />
      </div>
      
    </>
  );
}

export default App
