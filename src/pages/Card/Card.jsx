import "./Card.scss";
import HeatLogo from "../../assets/logos/Heat.svg";
import BamAdebayo from "../../assets/PlayerPics/BamAdebayo.png";

const Card = () => {
  return (
    <main className="teamMain">
      {/* <img src={BamAdebayo} alt="" className="teamMain__pic" /> */}
      <section className="teamMain__infoDiv">
        <p className="teamMain__name">BAM</p>
        <p className="teamMain__lastName">ADEBAYO</p>
        <p className="teamMain__position">CENTER-FORWARD</p>
        <button className="teamMain__button">+ STATS
        </button>
      </section>
    </main>
  );
};

export default Card;
