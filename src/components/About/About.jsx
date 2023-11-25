import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">About Page</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            "Maharashtra Constructions provides general contracting, construction management and building services to private, commercial and industrial clients throughout India concentrating mainly in providing Civil and Mechanical support to Solar parks. India has done a terrific job in molding its energy infrastructure to welcome green energy revolution. ARASU Constructions vision is to spearhead the global transition to renewable energy. While it’s no small ambition, our vision of a world without fossil fuels is already evolving and transforming the way we live. Our part to play in that transition is to deliver cost effective renewable Energy and infrastructure solutions to customers and governments through our set of cohesive company values."
          </span>
          </div>
        </div>
        </section>
  )
}

export default About