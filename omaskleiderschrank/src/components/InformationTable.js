import React from "react";
import "./components.css";

export default function InformationTable() {
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
    <div className="information reveal active">
      <div className="textInformationBox">
        <div className="contactWritten">
          <span class="material-symbols-outlined">location_on</span>
          <p>89269 Illertissen Marktpl. 6</p>
          <span class="material-symbols-outlined">mail</span>
          <p>omaskleiderschrank@gmail.com</p>
          <span class="material-symbols-outlined">call</span>
          <p>0000 666 789 987</p>
        </div>

        <div className="openTimeWritten">
          <table>
            <tr>NYITVATARTÁS</tr>
            <tr>
              <td>Hétfő</td>
              <td>12:00 - 18:00</td>
            </tr>
            <tr>
              <td>Kedd</td>
              <td>Zárva</td>
            </tr>
            <tr>
              <td>Szerda</td>
              <td>8:00 - 14:00</td>
            </tr>
            <tr>
              <td>Csütörtök</td>
              <td>12:00 - 18:00</td>
            </tr>
            <tr>
              <td>Péntek</td>
              <td>Zárva</td>
            </tr>
            <tr>
              <td>Szombat</td>
              <td>8:00 - 14:00</td>
            </tr>
            <tr>
              <td>Vasárnap</td>
              <td>Zárva</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="mapBox">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4568.452419248439!2d10.10127192037161!3d48.22181488620668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479be16e651cfbbb%3A0x6973c96265a12b8f!2sMarktpl.%206%2C%2089257%20Illertissen%2C%20N%C3%A9metorsz%C3%A1g!5e0!3m2!1shu!2shu!4v1674120671089!5m2!1shu!2shu"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
