import React from "react";
import { Board } from "../components/Board";
import { Keyboard } from "../components/Keyboard";
import { WordList } from "../components/WordList";
import Tutorial from "../components/Tutorial";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Title Box with Light and Dark Mode Support */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl shadow-xl border border-blue-400 mb-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center tracking-wide">
          Wordle Solver
        </h1>
        <p className="text-sm text-center text-blue-100 mt-2">
          Your ultimate tool to solve Wordle puzzles!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto mt-8">
        {/* Tutorial Component (Left Side) */}
        <div className="w-full lg:w-[300px] p-4 bg-white rounded-lg shadow-xl border border-gray-100">
          <Tutorial />
        </div>

        {/* Board Component (Centered) */}
        <div className="flex-1 flex justify-center">
          <Board />
        </div>

        {/* WordList Component (Right Side) */}
        <div className="w-full lg:w-[300px] p-4 bg-white rounded-lg shadow-xl border border-gray-100">
          <WordList />
        </div>
      </div>

      {/* Keyboard Component */}
      <div className="mt-10 w-full max-w-3xl mx-auto">
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;