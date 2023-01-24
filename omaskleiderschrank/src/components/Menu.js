import { React } from "react";
import "./components.css";
import LanguageSwitch from "./LanguageSwitch";

export default function Menu({ handleClick, data }) {
  return (
    <div className="menu">
      <div className="menuNavigate">
        {data &&
          data.length > 0 &&
          data.map((item) => <h2 id="aboutUsInMenu">{item}</h2>)}
      </div>
      <div className="menuSocial">
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-instagram"></a>
      </div>
      <div className="menuLanguageChange">
        <LanguageSwitch handleClick={handleClick} />
      </div>
    </div>
  );
}
