import React, { useState } from "react";
import "./Contactus.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";


const Contactus = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const numHandler = (e) => {
    setNumber(e.target.value);
  };
  const mesHandler = (e) => {
    setMessage(e.target.value);
  };
  
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email',email)
   
    const obj={
      number: number,
      message: message,
      email: email,
    }
    setData([...data, obj])
    console.log(obj)
    localStorage.setItem('email',email)
    localStorage.setItem('number',number)
    localStorage.setItem('message',message)
    setNumber("");
    setMessage("");
    setEmail("");
  };
  return (
    <section id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <form className="flexColStart contactModes" onSubmit={handleSubmit}>
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Phone Number</span>
                    <input type="number" value={number} onChange={numHandler} />
                  </div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <input type="text" value={message} onChange={mesHandler} />
                  </div>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
             

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <input type="email" value={email} onChange={emailHandler} />
                  </div>
                </div>
              </div>
            </div>
            <button className="flexCenter button">Submit</button>
          </form>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
