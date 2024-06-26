import Board from "./Board";
import { useState } from "react";

export default function Game({ numberOfBoards }) {
  const [boards, setBoards] = useState(
    Array(numberOfBoards)
      .fill(null)
      .map(() => Array(9).fill(null))
  );

  return (
    <div className="game">
      {boards.map((board, index) => {
        return <Board key={index} size={3} squares={board} />;
      })}
    </div>
  );
}
