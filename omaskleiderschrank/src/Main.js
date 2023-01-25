import { React, useEffect, useState } from "react";
import "./Main.css";
import Clouds from "./components/Clouds";
import Menu from "./components/Menu";
import LandingIntroductionPlate from "./components/LandingIntroductionPlate";
import ActualCampaign from "./components/ActualCampaign";
import Billboard from "./components/Billboard";
import GalleryWithFrame from "./components/GalleryWithFrame";
import OpinionTable from "./components/OpinionTable";
import InformationTable from "./components/InformationTable";
import ScrollUp from "./components/ScrollUp";

function Main() {
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("de");

  const handleClick = (languageReceived) => {
    console.log("handleClick", languageReceived);
    setLang(languageReceived);
  };

  const getData = () => {
    fetch("languages.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson[lang]);
        setData(myJson[lang]);
      });
  };

  useEffect(() => {
    getData();
  }, [lang]);

  return (
    <div className="mainContainer">
      <Clouds />
      <div className="main">
        <Menu handleClick={handleClick} data={data.Menu} />
        <LandingIntroductionPlate data={data.Landing} />
        <ActualCampaign />
        <Billboard />
        <GalleryWithFrame />
        <OpinionTable />
        <InformationTable />
        <ScrollUp />
      </div>
    </div>
  );
}

export default Main;
