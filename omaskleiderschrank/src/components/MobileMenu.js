import React, { useState } from "react";
import "./components.css";
import LanguageSwitch from "./LanguageSwitch";

export default function MobileMenu({ handleClick, data }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="mobileMenu">
      <nav className="navBar">
        <button id="closeButton" onClick={handleToggle}>
          {navbarOpen ? "CLOSE" : "MENU"}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <div className="menuNavigate">
            <h2 onClick={handleToggle}>
              <a href="#billboard">{data && data.aboutus} </a>
            </h2>
            <h2 onClick={handleToggle}>
              <a href="#gallery">{data && data.gallery}</a>
            </h2>
            <h2 onClick={handleToggle}>
              <a href="#information">{data && data.contact}</a>
            </h2>
          </div>
          <div className="menuSocial">
            {/* <a href="#" className="fa fa-facebook"></a>*/}
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fsecondhand_illertissen%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR07siREkx1Q9o0fkNIAcDvaRpbcEZQQpSDJqNYPR4cvZE64UL_80Jvr1jI&h=AT1KoNUASfjKRXiLMQG0CIZu7gEO0bkkGrr6bjsBXJGvPAw6Y4ssK3EGvz2xAChPvqYalVNhuJTQLC5RwFVm1udY9R7XQgrI0BOU2LMwCc21b-w1kcfdk-Silb6eFaAq5TYcjQ"
              className="fa fa-instagram"
            ></a>
          </div>
          <div className="menuLanguageChange" onClick={handleToggle}>
            <LanguageSwitch handleClick={handleClick} />
          </div>
        </ul>
      </nav>
    </div>
  );
}
