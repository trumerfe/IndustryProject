import Card from "../Card/Card"
import Players from "../../assets/Data/players.json"
import { useState } from "react"
import './Home.scss'
import Data from "../../assets/Data/NBAData.json"

//! TEAMS TO BE USED:
//! HEAT, HAWKS, WIZARDS, MAGIC, HORNETS, CELTICS, RAPTORS, 76ERS, NETS, KNICKS

const Home = () => {

  const [team, setTeam] = useState(Data[0])
  // console.log(players)

  return (
    <main>
      <div className="topBar"></div>
      <Card player={team.players[2]} />
    </main>
  )
}

export default Home