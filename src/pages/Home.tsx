import React from "react";
import { Board } from "../components/Board";
import { Keyboard } from "../components/Keyboard";
import { WordList } from "../components/WordList";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10 min-h-screen w-full bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300">
      {/* Title with gradient and shadows */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-10 text-center text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text drop-shadow-lg">
        Wordle Solver
      </h1>

      {/* Main Content Section */}
      <div className="app-container flex-col lg:flex-row gap-8">
        {/* Board Component (Centered) */}
        <div className="flex-1 flex justify-center items-center">
          <Board />
        </div>

        {/* WordList Component (Right Side) */}
        <div className="lg:block w-full sm:w-[350px] lg:w-[380px] p-4 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 rounded-lg border border-gray-200 shadow-xl">
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
