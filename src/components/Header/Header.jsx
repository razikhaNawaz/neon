import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";

import OutsideClickHandler from "react-outside-click-handler";
import { Link } from 'react-router-dom';

const Header = ({NavigateFun}) => {
  const [menuOpened, setMenuOpened] = useState(false);
 
  return (
    <section className="h-wrapper">
      <div className='flexCenter paddings innerWidth h-container'>
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
          >
        <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
          <Link to="about" onClick={()=>NavigateFun('about')}>About Us</Link>
          <Link to="home" onClick={()=>NavigateFun('home')}>Home</Link>
          <Link to="clients" onClick={()=>NavigateFun('clients')}>Our Clients</Link>
          <Link to="previous" onClick={()=>NavigateFun('previous')}>Previous projects</Link>
          <Link to="services" onClick={()=>NavigateFun('services')}>Our Services</Link>
            <Link to="contact" onClick={()=>NavigateFun('contact')}>Contact us</Link>
        </div>
        </OutsideClickHandler>
        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </section>
  )
}

export default Header
