import "./Main.css";
import Clouds from "./components/Clouds";
import Menu from "./components/Menu";
import LandingIntroductionPlate from "./components/LandingIntroductionPlate";
import ActualCampaign from "./components/ActualCampaign";
import Billboard from "./components/Billboard";
import GalleryWithFrame from "./components/GalleryWithFrame";
import OpinionTable from "./components/OpinionTable";
import InformationTable from "./components/InformationTable";

function Main() {
  return (
    <div className="mainContainer">
      <Clouds />
      <div className="main">
        <Menu />
        <LandingIntroductionPlate />
        <ActualCampaign />
        <Billboard />
        <GalleryWithFrame />
        <OpinionTable />
        <InformationTable />
      </div>
    </div>
  );
}

export default Main;
