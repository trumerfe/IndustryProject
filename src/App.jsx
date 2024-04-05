import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Data from "./assets/Data/NBAData.json";
import Card from "./pages/Card/Card";
import Team from "./pages/Team/Team";

function App() {
  const [team, setTeam] = useState(Data[0]);

  const navigate = useNavigate()

  return (
    <BrowserRouter>
      <div className="topBar"></div>
      <Routes>
        <Route path="/" element={<Navigate to={"/:team:playerName"} />} />
        <Route path="/:team/:playerName" element={<Card player={team.players[2]} />} />
        <Route path="/team/:teamName" element={<Team team={team} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
