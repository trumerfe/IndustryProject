import "./PlayerReel.scss";
import { useState } from "react";
import PlaceholderReel from '../../assets/Images/ReelPlaceholder.png'
import upload from '../../assets/Icons/upload.svg'
import { Link } from "react-router-dom";
import Back from '../../assets/Icons/back.svg'
import BackRed from '../../assets/Icons/backRed.svg'


const PlayerReel = (props) => {
  const [playerInfo, setPlayerInfo] = useState(props.player);

  const handleReelClick = (event) => {
    props.setPageState("infoSmall")
  }

  return (
    <section className="reel">
      <Link to={`/team/${props.team}`} className="reel__backButton">
        <img src={Back} alt="Back Arrow" />

      </Link>
      <button onClick={handleReelClick} className="reel__placeholderBack"><img src={BackRed} alt="Back Arrow" /></button>
      <div className="reel__bar">
        <div
          className="reel__progress"
          style={{ backgroundColor: playerInfo.mainColor }}
        ></div>
      </div>
      <div>
        <img className="reel__reelPlaceholder" src={PlaceholderReel}></img>
      </div>
      <button className="reel__button" style={{backgroundColor: playerInfo.mainColor}}>SHARE
      <img src={upload} alt="upload" />
      </button>
    </section>
  );
};

export default PlayerReel;
