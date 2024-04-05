import Card from "../Card/Card"
import Players from "../../assets/Data/players.json"
import { useState } from "react"

//! TEAMS TO BE USED:
//! HEAT, HAWKS, WIZARDS, MAGIC, HORNETS, CELTICS, RAPTORS, 76ERS, NETS, KNICKS

const Home = () => {

  const [players, setPlayers] = useState(Players)
  // console.log(players)

  return (
    <main>
      <Card player={players[1]} />
    </main>
  )
}

export default Home