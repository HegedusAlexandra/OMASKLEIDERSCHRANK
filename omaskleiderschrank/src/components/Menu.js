import React from "react";
import "./components.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menuNavigate">
        <h2 id="aboutUsInMenu">Rólunk</h2>
        <h2 id="aboutUsInMenu">Képek</h2>
        <h2 id="aboutUsInMenu">Elérhetőség</h2>
      </div>
      <div className="menuSocial">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
      </div>
      <div className="menuLanguageChange">
        <h2 id="aboutUsInMenu">DE</h2>/<h2 id="aboutUsInMenu">HU</h2>/
        <h2 id="aboutUsInMenu">EN</h2>
      </div>
    </div>
  );
}
