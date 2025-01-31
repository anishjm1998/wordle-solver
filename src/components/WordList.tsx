import React from 'react';
import { useGame } from '../context/GameContext';

export const WordList: React.FC = () => {
  const { possibleWords } = useGame();

  return (
    <div className="bg-transparent">
      <div className="bg-[#9ec5f7] dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-blue-300 dark:border-gray-700">
        {/* Header with Word Count */}
        <div className="p-4 bg-[#7ea9e4] dark:bg-gray-700 rounded-t-lg text-blue-900 dark:text-gray-200">
          <h2 className="text-xl font-semibold">
            Possible Words
            <span className="ml-2 text-sm font-light text-blue-600 dark:text-gray-400">
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
                className="p-3 text-center bg-white dark:bg-gray-700 rounded-lg text-blue-800 dark:text-gray-300 font-medium shadow-sm hover:bg-blue-200 dark:hover:bg-gray-600 transition-all duration-200 ease-in-out"
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

export default WordList;