import React from "react";
import "./components.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import keret from "./pictures/aranykeret.png";

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

//console.log(images);

export default function GalleryWithFrame() {
  return (
    <div className="gallery reveal active">
      <img alt="keret" id="keret" src={keret}></img>
      <div className="pictureContainer">
        <Swiper navigation={true} modules={[Navigation]}>
          {Object.values(images).map((val) => (
            <SwiperSlide key={`00${val}`}>
              <img className="cloth" src={val} key={val} alt="combo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
