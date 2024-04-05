import "./PlayerInfoSmall.scss";
import { useState } from "react";
import Back from '../../assets/Icons/back.svg'
import { Link } from "react-router-dom";
import Forward from '../../assets/Icons/forward.svg'
import ForwardRed from '../../assets/Icons/forwardRed.svg'


const PlayerInfoSmall = (props) => {

  const [playerInfo, setPlayerInfo] = useState(props.player)
  const [numColor, setNumColor] = useState(`rgba(${props.player.mainColor}, 0.3)`)

  const handleClick = (event) => {
    props.setPageState("infoBig")
  }

  const handleReelClick = (event) => {
    props.setPageState("reel")
  }

  return (
    <section className="smallInfoDiv">
      <button onClick={handleReelClick} className="smallInfoDiv__placeholderNext"><img src={ForwardRed} alt="Forward Arrow" /></button>
      <div className="smallInfoDiv__bar">
        <div className="smallInfoDiv__progress" style={{backgroundColor: playerInfo.mainColor}}></div>
      </div>
      <Link to={`/team/${props.team}`} className="smallInfoDiv__backButton">
        <img src={Back} alt="Back Arrow" />
      </Link>
      <p className="smallInfoDiv__number" style={{color: '#9C9C9C'}}>{playerInfo.number}</p>
      <p className="smallInfoDiv__name">{playerInfo.name}</p>
      <p className="smallInfoDiv__lastName">{playerInfo.lastName}</p>
      <p className="smallInfoDiv__position">{playerInfo.position}</p>
      <button onClick={handleClick} className="smallInfoDiv__button" style={{backgroundColor: playerInfo.mainColor}}>+ STATS</button>
    </section>
  );
};

export default PlayerInfoSmall;
