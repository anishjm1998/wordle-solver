import React, { useState } from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";

const Home: React.FC = () => {
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Wordle Solver</h1>
      <Board board={board} />
      <div className="mt-4">
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;
