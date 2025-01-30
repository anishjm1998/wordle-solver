import React from "react";
import { Board } from "../components/Board";
import { Keyboard } from "../components/Keyboard";
import { WordList } from "../components/WordList";
import Tutorial from "../components/Tutorial";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 min-h-screen w-full bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Title Box with Dark Mode Support */}
      <div className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-6 py-3 rounded-lg shadow-lg">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center">
          Wordle Solver
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto mt-8">
        {/* Tutorial Component (Left Side) */}
        <div className="w-full lg:w-[300px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          <Tutorial />
        </div>

        {/* Board Component (Centered) */}
        <div className="flex-1 flex justify-center">
          <Board />
        </div>

        {/* WordList Component (Right Side) */}
        <div className="w-full lg:w-[300px] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
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
