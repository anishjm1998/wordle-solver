import React from 'react';
import { useGame } from '../context/GameContext';

export const WordList: React.FC = () => {
  const { possibleWords } = useGame();

  return (
    <div className="bg-transparent">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Header with Word Count */}
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-gray-800 dark:to-gray-900 rounded-t-lg text-white">
          <h2 className="text-xl font-semibold">
            Possible Words
            <span className="ml-2 text-sm font-light text-gray-200">
              ({possibleWords.length})
            </span>
          </h2>
        </div>

        {/* Scrollable Word List */}
        <div className="p-4 max-h-[400px] overflow-y-auto">
          <ul className="space-y-3">
            {possibleWords.map((word, index) => (
              <li
                key={index}
                className="p-3 text-center bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white font-medium shadow-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white transition-all duration-200 ease-in-out"
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
