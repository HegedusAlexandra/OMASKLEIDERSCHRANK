import React from "react";
import "./components.css";
import tavasz from "./virágzás.mp4";

export default function ActualCampaign({ data }) {
  return (
    <div className="actual">
      <video autoPlay muted controls loop src={tavasz} type="video/mp4"></video>
      <div id="videoBox">{data && data.suggestion}</div>
    </div>
  );
}
