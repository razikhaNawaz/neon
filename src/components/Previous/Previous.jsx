import React from "react";
import data from "../../utils/slider1.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Previous.css";
import { sliderSettings } from "../../utils/common";

const Previous = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className="orangeText">Our Projects</span>
                <span className="primaryText">Previous Projects</span>
            </div>
        </div>

        <Swiper {...sliderSettings}>
        <SliderButtons/>
            {data.map((card,i)=>(
                <SwiperSlide key={i}>
                    
                    <div className="flexColStart r-card">
                        <img src={card.image} alt="home" />
                        <span className="secondaryText r-[price">
                            {/* <span style={{color:"orange"}}>$</span> */}
                            {/* <span>{card.price}</span> */}
                        </span>
                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.detail}</span>
                    </div>
                </SwiperSlide>
            )

            )}
        </Swiper>

    </section>
  );
};

export default Previous;

const SliderButtons=()=>{
    const swiper=useSwiper();

    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}
