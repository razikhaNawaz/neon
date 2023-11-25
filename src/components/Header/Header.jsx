import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className='flexCenter paddings innerWidth h-container'>
        <img src="./logo.png" alt="logo" width={200} />
        <div className='flexCenter h-menu'>
          <a href="">About Us</a>
          <a href="">Home</a>
          <a href="">Our Clients</a>
          <a href="">Previous projects</a>
          <a href="">Our Services</a>
          <button className="button">
            <a href="">Contact us</a>
          </button>
        </div>
      </div>

    </section>
  )
}

export default Header