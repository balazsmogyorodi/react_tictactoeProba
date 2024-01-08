import Mezo from "./mezo";

  



  function Tabla({ elem }) {


    return (
      <>
        <div className="status">status</div>
        <div className="board-row">
          <Mezo value={elem[0]} onSquareClick={() => console.log(elem)} />
          <Mezo value={elem[1]} onSquareClick={() => console.log('X')} />
          <Mezo value={elem[2]} onSquareClick={() => console.log('X')} />
        </div>
        <div className="board-row">
          <Mezo value={elem[3]} onSquareClick={() => console.log('X')} />
          <Mezo value={elem[4]} onSquareClick={() => console.log('X')} />
          <Mezo value={elem[5]} onSquareClick={() => console.log('X')} />
        </div>
        <div className="board-row">
          <Mezo value={elem[6]} onSquareClick={() => console.log('X')} />
          <Mezo value={elem[7]} onSquareClick={() => console.log('X')} />
          <Mezo value={elem[8]} onSquareClick={() => console.log('X')} />
        </div>
      </>
    );
  }

  export default Tabla;