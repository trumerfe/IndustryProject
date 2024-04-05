import "./PlayerInfoBig.scss";
import { useState } from "react";

const PlayerInfoBig = (props) => {

  const [playerInfo, setPlayerInfo] = useState(props.player)

  const handleClick = (event) => {
    props.setPageState("infoSmall")
  }

  return (
    <section className="infoDiv">
      <p className="infoDiv__number">{playerInfo.number}</p>
      <p className="infoDiv__name">{playerInfo.name}</p>
      <p className="infoDiv__lastName">{playerInfo.lastName}</p>
      <p className="infoDiv__position">{playerInfo.position}</p>
      <div className="infoDiv__stats1div">
        <p className="infoDiv__stats1title">HEIGTH</p>
        <p className="infoDiv__stats1value">{playerInfo.personalStats.height}</p>
        <p className="infoDiv__stats1title">WEIGHT</p>
        <p className="infoDiv__stats1value">{playerInfo.personalStats.weight}</p>
        <p className="infoDiv__stats1title">AGE</p>
        <p className="infoDiv__stats1value">{playerInfo.personalStats.age}</p>
        <p className="infoDiv__stats1title">YEARS PRO</p>
        <p className="infoDiv__stats1value">{playerInfo.personalStats.yearsPro}</p>
        <p className="infoDiv__stats1title">COUNTRY</p>
        <p className="infoDiv__stats1value">{playerInfo.personalStats.country}</p>
      </div>
      <div className="infoDiv__stats2div">
        <div className="infoDiv__stats2subdiv">
          <p className="infoDiv__stats2text">GAMES</p>
          <p className="infoDiv__stats2text">{playerInfo.gameStats.games}</p>
        </div>
        <div className="infoDiv__stats2subdiv">
          <p className="infoDiv__stats2text">PPG</p>
          <p className="infoDiv__stats2text">{playerInfo.gameStats.ppg}</p>
        </div>
        <div className="infoDiv__stats2subdiv">
          <p className="infoDiv__stats2text">RPG</p>
          <p className="infoDiv__stats2text">{playerInfo.gameStats.rpg}</p>
        </div>
        <div className="infoDiv__stats2subdiv">
          <p className="infoDiv__stats2text">APG</p>
          <p className="infoDiv__stats2text">{playerInfo.gameStats.apg}</p>
        </div>
      </div>
      <button onClick={handleClick} className="infoDiv__button" style={{backgroundColor: playerInfo.mainColor}}>X STATS</button>
    </section>
  );
};

export default PlayerInfoBig;
