import React from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './components/intro'
import Gamepage from './components/gamepage'
function App() {
  const [game, setGame] = React.useState(true)
  const [gameLimit, setGameLimit] = React.useState(0)
  function startGame1(){
    setGameLimit(15)
    setGame(false)
  }
  function startGame2(){
    setGameLimit(30)
    setGame(false)
  }
  return (
    game ? 
    <Intro handleClick1={startGame1} handleClick2={startGame2}/> :
    <Gamepage gamelimit={gameLimit}/>
  );
}

export default App;
