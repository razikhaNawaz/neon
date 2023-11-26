import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
// import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  // const headerColor = useHeaderColor();
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
          <a href="about">About Us</a>
          <a href="home">Home</a>
          <a href="clients">Our Clients</a>
          <a href="previous">Previous projects</a>
          <a href="services">Our Services</a>
          
            <a href="contact">Contact us</a>
          
          
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