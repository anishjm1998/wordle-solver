import React from 'react';
import { useGame } from '../context/GameContext';

export const WordList: React.FC = () => {
  const { possibleWords } = useGame();

  return (
    <div className="bg-transparent">
      <div className="bg-[#9ec5f7] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border-2 border-blue-400 dark:border-gray-600">
        <div className="p-4 bg-[#7ea9e4] dark:bg-gray-700 rounded-t-lg text-blue-900 dark:text-gray-200">
          <h2 className="text-xl font-semibold">
            Possible Words
            <span className="ml-2 text-sm font-light text-blue-900 dark:text-gray-200">
              ({possibleWords.length})
            </span>
          </h2>
        </div>

        <div className="p-4 max-h-[300px] overflow-y-auto custom-scrollbar">
          <ul className="space-y-3">
            {possibleWords.map((word, index) => (
              <li
                key={index}
                className="p-3 text-center rounded-lg border border-blue-400 dark:border-gray-600 bg-[#e4ecf7] dark:bg-gray-900 text-blue-900 dark:text-gray-300 font-medium shadow-sm hover:bg-[#c9ddfa] dark:hover:bg-gray-800 transition-all duration-200 ease-in-out"
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