import React from "react";
import "./components.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import wood from "./pictures/újság.jpg";
import girl from "./pictures/landingGirl.jpg";

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 20;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

export default function GalleryWithFrame() {
  return (
    <div className="gallery reveal active">
      <div className="pictureContainer">
        <Swiper navigation={true} modules={[Navigation]}>
          <SwiperSlide>
            <img src={wood} alt="none" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={girl} alt="none" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
