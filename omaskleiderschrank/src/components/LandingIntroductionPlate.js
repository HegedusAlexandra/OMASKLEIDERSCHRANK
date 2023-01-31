import React from "react";
import "./components.css";

export default function LandingIntroductionPlate({ data }) {
  //console.log(data);

  return (
    <div className="landing">
      <div id="landingGlassContainer">
        <div id="landingImageContainer"></div>
        <div id="landingTextBoxContainer">
          <h2>{data && data.sideTextOne}</h2>
          <div id="landingWoodBoard">
            <h1>{data && data.headline}</h1>
          </div>
          <h2>{data && data.sideTextTwo}</h2>
          <div id="landingSuggestion">
            <h2>{data && data.checkItOut}</h2>
            <div className="scroll"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
