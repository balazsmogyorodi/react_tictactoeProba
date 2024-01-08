import { useState } from 'react';
import Tabla from '../view/tabla.js';



export default function Game() {
  const [tabla, setTabla] = useState([Array(9).fill(null)]);
  const [mezo, setJelenlegiMezo] = useState(0);
  const xIsNext = mezo % 2 === 0;
  const aktualisMezo = tabla[mezo];


  return (
    <div className="game">
      <div className="game-board">
        <Tabla  elem={aktualisMezo}/>
      </div>
      <div className="game-info">
        <ol>moves</ol>
      </div>
    </div>
  );
}


