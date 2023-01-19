import React from "react";
import "./components.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import keret from "./pictures/aranykeret.png";
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
reveal();

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("./clothes", false, /\.(png|jpe?g|svg)$/)
);

console.log(images);

export default function GalleryWithFrame() {
  return (
    <div className="gallery reveal active">
      <img alt="keret" id="keret" src={keret}></img>
      <div className="pictureContainer">
        <Swiper navigation={true} modules={[Navigation]}>
          {Object.values(images).map((val) => (
            <SwiperSlide>
              <img className="cloth" src={val} key={val} alt="combo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
