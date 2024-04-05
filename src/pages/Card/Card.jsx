import "./Card.scss";
import HeatLogo from "../../assets/logos/Heat.svg";
import BamAdebayo from "../../assets/PlayerPics/BamAdebayo.png";
import PlayerInfoSmall from "../../components/PlayerInfoSmall/PlayerInfoSmall";
import PlayerInfoBig from "../../components/PlayerInfoBig/PlayerInfoBig";
import PlayerReel from "../../components/PlayerReel/PlayerReel";
import { useState } from "react";

const Card = (props) => {
  const [player, setPlayer] = useState(props.player);
  const [pageState, setPageState] = useState("infoSmall");

  return (
    <main
      className="card"
      style={{ backgroundImage: `url("${props.player.pic}")` }}
    >
      {pageState === "infoSmall" ? (
        <PlayerInfoSmall
          player={player}
          pageState={pageState}
          setPageState={setPageState}
        />
      ) : pageState === "infoBig" ? (
        <PlayerInfoBig
          player={props.player}
          pageState={pageState}
          setPageState={setPageState}
        />
      ) : pageState === "reel" ? (
        <PlayerReel player={props.player} pageState={pageState}
        setPageState={setPageState} />
      ) : (
        ""
      )}
    </main>
  );
};

export default Card;
