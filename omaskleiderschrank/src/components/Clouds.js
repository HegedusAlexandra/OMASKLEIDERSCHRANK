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
      {Object.values(images).map((val) => (
        <img
          className={
            Math.random() > 0.66
              ? "cloud cloudLeft"
              : 0.66 >= Math.random() > 0.33
              ? "cloud cloudMid"
              : "cloud cloudRight"
          }
          src={val}
          key={val}
          alt="combo"
          style={{
            top: `${Math.random()}` * 5800 - 400,
            width: `${Math.random()}` * 800 + 800,
          }}
        />
      ))}
    </div>
  );
}
