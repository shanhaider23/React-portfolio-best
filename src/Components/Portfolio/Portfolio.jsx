import "./Portfolio.css";
import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.jpg";
import Ecommerce from "../../img/name_it.jfif";
import HOC from "../../img/dianox.jpg";
import MusicApp from "../../img/todo.png";
import POT from "../../img/pot3.jpg";
import POT2 from "../../img/pot2.jpg";
import POT3 from "../../img/pot1.jpg";
import POT4 from "../../img/todo.png";
import POT5 from "../../img/weather.jpg";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://meal-sharing-shan.herokuapp.com/home">
            {" "}
            <img src={Sidebar} alt="" />{" "}
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://staging-simply-name-it.herokuapp.com/profile">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://www.dianox.com/">
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shan-portfolio.vercel.app/">
            <img src={POT} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://haiderium.vercel.app/">
            <img src={POT2} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shan-e-haider.netlify.app/">
            <img src={POT3} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://distracted-einstein-f6e628.netlify.app/">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shan-weather.netlify.app/">
            <img src={POT5} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
