import React from "react";
import "./components.css";

export default function OpinionTable() {
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

  return (
    <div className="opinion reveal active">
      <div className="personalOpinionContainer">
        <p>El vagyok bűvölve!</p>
        <h3>
          <i>Claudia, 49 éves</i>
        </h3>
      </div>
      <div className="personalOpinionContainer"></div>
      <div className="personalOpinionContainer"></div>
      <div className="personalOpinionContainer"></div>
      <div className="personalOpinionContainer"></div>
      <div className="personalOpinionContainer"></div>
      <div className="personalOpinionContainer"></div>
      <div className="personalOpinionContainer"></div>
    </div>
  );
}
