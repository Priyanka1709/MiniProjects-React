import { useState } from "react";

export default function Board({ squares }) {
  const status = "";
  const [isXNext, setIsXNext] = useState(true);

  const playMove = (i) => {
    const newSquares = [...squares];
    newSquares[i] = isXNext ? "X" : "0";
    setIsXNext(!isXNext);
  };

  const renderSquare = function (i) {
    return (
      <button className="square" onClick={() => playMove(i)}>
        {squares[i]}
      </button>
    );
  };

  

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
