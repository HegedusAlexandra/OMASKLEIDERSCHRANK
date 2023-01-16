import React from "react";
import "./components.css";

//import all the images once into an object
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("./clouds", false, /\.(png|jpe?g|svg)$/)
);

console.log(images);

export default function Clouds() {
  return (
    <div className="clouds">
      <img
        src="/static/media/01.3add8de1309e3d944d52.png"
        alt="combo"
        width={1000}
      />
      {/*  Object.values(animals).forEach(val => console.log(val)); */}
    </div>
  );
}
