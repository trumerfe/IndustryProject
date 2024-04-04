import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
