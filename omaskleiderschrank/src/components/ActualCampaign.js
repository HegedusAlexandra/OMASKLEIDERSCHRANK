import React from "react";
import "./components.css";
import tavasz from "./virágzás.mp4";

export default function ActualCampaign() {
  return (
    <div className="actual">
      <video autoPlay muted controls loop src={tavasz} type="video/mp4"></video>
      <div id="videoBox">
        Itt a tavasz, ideje ruhatárat cserélni! Mi már készülünk!
      </div>
    </div>
  );
}
