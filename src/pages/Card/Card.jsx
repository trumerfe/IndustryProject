import "./Card.scss";
import HeatLogo from "../../assets/logos/Heat.svg";
import BamAdebayo from "../../assets/PlayerPics/BamAdebayo.png";
import PlayerInfoSmall from "../../components/PlayerInfoSmall/PlayerInfoSmall";
import PlayerInfoBig from "../../components/PlayerInfoBig/PlayerInfoBig";
import PlayerReel from "../../components/PlayerReel/PlayerReel";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import NBAData from "../../assets/Data/NBAData.json";

const Card = (props) => {
  const [player, setPlayer] = useState(props.player);
  const [pageState, setPageState] = useState("infoSmall");

  let location = useLocation();
  // console.log(location.pathname)

  const locationArr = location.pathname.split("/");
  console.log(locationArr);

  const filteredTeam = NBAData.find((team) => team.team === locationArr[1]);
  // console.log(filteredTeam.players.find((player) => player.name === "LEAKY"))

  const filteredPlayer = filteredTeam.players.find(
    (player) => player.name === locationArr[2]
  );

  console.log(filteredPlayer);

  const [currentPlayer, setCurrentPlayer] = useState(filteredPlayer);

  return (
    <main
      className="card"
      style={{ backgroundImage: `url("${currentPlayer.pic}")` }}
    >
      {pageState === "infoSmall" ? (
        <PlayerInfoSmall
          team={locationArr[1]}
          player={currentPlayer}
          pageState={pageState}
          setPageState={setPageState}
        />
      ) : pageState === "infoBig" ? (
        <PlayerInfoBig
          team={locationArr[1]}
          player={currentPlayer}
          pageState={pageState}
          setPageState={setPageState}
        />
      ) : pageState === "reel" ? (
        <PlayerReel
          team={locationArr[1]}
          player={currentPlayer}
          pageState={pageState}
          setPageState={setPageState}
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default Card;
