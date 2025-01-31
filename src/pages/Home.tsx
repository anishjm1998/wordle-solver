import React from "react";
import { Board } from "../components/Board";
import { Keyboard } from "../components/Keyboard";
import { WordList } from "../components/WordList";
import Tutorial from "../components/Tutorial";
import "../styles/home.css"; // Import new styles

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 min-h-screen w-full text-blue-900 dark:text-gray-200">
      {/* Title Box */}
      <div className="component-bg px-8 py-6 rounded-xl shadow-xl border mb-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center tracking-wide bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent">
          Wordle Solver
        </h1>
        <p className="text-sm text-center text-blue-700 mt-2">
          Your ultimate tool to solve Wordle puzzles!
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto mt-8">
        <div className="component-bg w-full lg:w-[300px] p-4 rounded-lg shadow-xl border">
          <Tutorial />
        </div>

        <div className="flex-1 flex justify-center">
          <Board />
        </div>

        <div className="component-bg w-full lg:w-[300px] p-4 rounded-lg shadow-xl border">
          <WordList />
        </div>
      </div>

      {/* Keyboard */}
      <div className="mt-10 w-full max-w-3xl mx-auto">
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;
