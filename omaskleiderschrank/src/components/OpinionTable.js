import React from "react";
import "./components.css";

export default function OpinionTable({ data }) {
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
      {data &&
        Object.keys(data).map((key, i) => (
          <div key={i} className="personalOpinionContainer">
            <p>{key}</p>
            <h3>
              <i>{data[key]}</i>
            </h3>
          </div>
        ))}
    </div>
  );
}
