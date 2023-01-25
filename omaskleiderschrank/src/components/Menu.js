import { React } from "react";
import "./components.css";
import LanguageSwitch from "./LanguageSwitch";

export default function Menu({ handleClick, data }) {
  return (
    <div className="menu">
      <div className="menuNavigate">
        <h2>{data && data.aboutus}</h2>
        <h2>{data && data.gallery}</h2>
        <h2>{data && data.contact}</h2>
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
