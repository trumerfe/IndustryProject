import "./Team.scss";
import upload from "../../assets/Icons/gg_search.svg";
import { useState } from "react";

const Team = (props) => {

  // console.log(props.team.players)
  const [players, setPlayers] = useState(props.team.players)


  return (
    <main className="team">
      <section className="team__header">
        <div
          className="team__headerSub1"
          style={{ backgroundColor: props.team.color1 }}
        >
          <img className="team__logo" src={props.team.logo} alt="team logo" />
          <div className="team__nameDiv">
            <p className="team__name">{props.team.team}</p>
            <p className="team__name">ROSTER</p>
          </div>
        </div>
        <form
          className="team__headerSub2"
          style={{ backgroundColor: props.team.color2 }}
        >
          <label className="team__searchLabel" htmlFor="players">
            PLAYERS
          </label>
          <input
            className="team__search"
            name="players"
            type="text"
            placeholder="Search players"
          />
          <img className="team__searchIcon" src={upload} alt="search icon" />
        </form>
      </section>
      <section className="team__cardsDiv">
        {players.map((item, index) => (
          // {console.log('hello!')}
          <div key={index} className="team__player">
            <img
              className="team__playerPic"
              src={item.pic}
              alt="player picture"
            />
            <p className="team__playerName">{item.name}</p>
            <p className="team__playerInfo">{`#${item.number} | ${item.position}`}</p>
            <button
              className="team__playerButton"
              style={{ backgroundColor: props.team.color1 }}
            >
              PLAYER STATS
            </button>
          </div>
        ))}

        {/* <div className="team__player">
          <img className="team__playerPic" src={props.team.players[0].pic} alt="player picture" />
        </div> */}
      </section>
    </main>
  );
};

export default Team;
