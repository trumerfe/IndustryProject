import "./Card.scss";
import HeatLogo from "../../assets/logos/Heat.svg";
import BamAdebayo from "../../assets/PlayerPics/BamAdebayo.png"

const Card = () => {
  return (
    <main className="teamMain">
      <img src={BamAdebayo} alt="" className="teamMain__pic" />
    </main>
  );
};

export default Card;
