import React from "react";
import "./components.css";
import RL from "./pictures/RL.png";
import SO from "./pictures/SO.png";
import TT from "./pictures/TT.png";
import TH from "./pictures/TH.png";
import ONLY from "./pictures/ONLY.png";
import ADIDAS from "./pictures/ADIDAS.png";
import ESPRIT from "./pictures/ESPRIT.png";
import PUMA from "./pictures/PUMA.png";

export default function Billboard() {
  //reveal :works with css and classname

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

  window.addEventListener("scroll", reveal);

  return (
    <div className={"billboard active reveal"}>
      <div id="billboardContainer">
        <div id="introduction"></div>
        <div id="newspaper"></div>
      </div>
      <div id="logoBox">
        <div className="imgBox">
          <img src={RL} alt="logo" />
        </div>
        <div className="imgBox">
          <img src={ONLY} alt="logo" />
        </div>
        <div className="imgBox">
          <img src={PUMA} alt="logo" />
        </div>
        <div className="imgBox">
          <img src={TT} alt="logo" />
        </div>
        <div className="imgBox">
          <img src={TH} alt="logo" />
        </div>
        <div className="imgBox">
          <img src={ADIDAS} alt="logo" />
        </div>
        <div className="imgBox">
          <img src={ESPRIT} alt="logo" />
        </div>
        <div className="imgBox">
          <img src={SO} alt="logo" />
        </div>
      </div>
    </div>
  );
}
