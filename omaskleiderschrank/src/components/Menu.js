import { React } from "react";
import "./components.css";
import LanguageSwitch from "./LanguageSwitch";

export default function Menu({ handleClick, data }) {
  return (
    <div className="menu">
      <div className="menuNavigate">
        <h2>
          <a href="#billboard">{data && data.aboutus}</a>
        </h2>
        <h2>
          <a href="#gallery">{data && data.gallery}</a>
        </h2>
        <h2>
          <a href="#information">{data && data.contact}</a>
        </h2>
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
