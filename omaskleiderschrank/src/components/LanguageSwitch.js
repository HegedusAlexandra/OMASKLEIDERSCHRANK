import React from "react";
import "./components.css";

export default function LanguageSwitch({ handleClick }) {
  return (
    <div className="language">
      <button onClick={(event) => handleClick("de")}>DE/</button>
      <button onClick={(event) => handleClick("hu")}>HU/</button>
      <button onClick={(event) => handleClick("en")}>EN</button>
    </div>
  );
}
