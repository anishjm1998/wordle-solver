import React from "react";
import { Board } from "../components/Board";
import { Keyboard } from "../components/Keyboard";
import { WordList } from "../components/WordList";
import Tutorial from "../components/Tutorial";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 min-h-screen w-full bg-[#e4ecf7] dark:bg-gray-900 text-blue-900 dark:text-gray-200">
      <div className="px-4 py-3 sm:px-8 sm:py-6 rounded-xl shadow-xl border-2 border-blue-400 dark:border-gray-600 bg-[#9ec5f7] dark:bg-gray-800 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-[#1e3a8a] dark:text-[#d1d5db] mt-2 sm:mt-4">
          Wordle Solver
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 w-full max-w-7xl mx-auto mt-4 sm:mt-8">
        <div className="w-full lg:w-[300px]">
          <Tutorial />
        </div>

        <div className="flex-1 flex justify-center">
          <Board />
        </div>

        <div className="w-full lg:w-[300px]">
          <WordList />
        </div>
      </div>

      <div className="mt-6 sm:mt-10 w-full max-w-3xl mx-auto">
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;