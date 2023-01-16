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
          className="cloud"
          src={val}
          key={val}
          alt="combo"
          width={100}
          style={{
            top: `${Math.random()}` * 6000,
            position: "absolute",
            background: "red",
            animation: `${
              Math.random() > 0.5
                ? "rightToLeft ease 10s infinite"
                : "LEFTtOrIGHT ease 10s infinite"
            }`,
          }}
        />
      ))}
    </div>
  );
}
