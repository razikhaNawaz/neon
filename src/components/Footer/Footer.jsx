// Footer.js
import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin,FaGithub } from 'react-icons/fa';

const Footer = () => {
  const personalEmail = 'razikha02@gmail.com';
  const phoneNumber = '+91 9632775081';
  const linkedinLink = 'https://www.linkedin.com/in/razikha-parveen/';
  
  const githubLink = 'https://github.com/razikhaNawaz';

  return (
    
     <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
      <div className="flexColStart f-left">
          <span>Contact Information</span>
          <span>
            <FaEnvelope /> {personalEmail}
          </span>
          <span>
            <FaPhone /> {phoneNumber}
          </span>
        </div>
        <div className="flexColStart f-right" style={{ marginLeft: '1rem' }}>
          <span>Social Links</span>
          
          <span><a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a></span>
          
          <span><a href={githubLink} target="_blank" rel="noopener noreferrer" >
            <FaGithub /> GitHub
          </a></span>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
