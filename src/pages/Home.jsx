import React from 'react'
import Announcement from '../comonents/Announcement'
import Categories from '../comonents/Categories'
import Footer from '../comonents/Footer'
import Navbar from '../comonents/Navbar'
import NewsLetter from '../comonents/NewsLetter'
import Products from '../comonents/Products'
import Slider from '../comonents/Slider'



const Home = () => {
  return (
    <div>
      <Announcement/> 
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
