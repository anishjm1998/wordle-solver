import React from 'react';
import { useGame } from '../context/GameContext';
import { LetterState } from '../utils/dictionary';

const KEYBOARD_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
];

export const Keyboard: React.FC = () => {
  const { handleKeyPress, board, letterStates, currentRow } = useGame();

  const getLetterState = (key: string): LetterState => {
    if (key === 'Enter' || key === 'Backspace') return 'empty';

    let bestState: LetterState = 'empty';
    const stateRank = { correct: 3, present: 2, absent: 1, empty: 0 };

    for (let row = 0; row < currentRow; row++) {
      for (let col = 0; col < 5; col++) {
        if (board[row][col] === key) {
          const state = letterStates[row][col];
          if (stateRank[state] > stateRank[bestState]) {
            bestState = state;
          }
        }
      }
    }
    return bestState;
  };

  const getKeyStyles = (key: string) => {
    const baseStyles = "font-bold rounded-lg transition-all duration-200 active:scale-95 text-sm sm:text-base flex items-center justify-center";

    if (key === 'Enter') {
      return `${baseStyles} bg-green-100 dark:bg-green-500 hover:bg-green-200 dark:hover:bg-green-600 text-green-700 dark:text-white px-4 py-3 sm:px-6 sm:py-4`;
    }
    if (key === 'Backspace') {
      return `${baseStyles} bg-red-100 dark:bg-red-500 hover:bg-red-200 dark:hover:bg-red-600 text-red-700 dark:text-white px-4 py-3 sm:px-6 sm:py-4`;
    }

    const state = getLetterState(key);
    switch (state) {
      case 'correct':
        return `${baseStyles} bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-3 py-3 sm:px-4 sm:py-4`;
      case 'present':
        return `${baseStyles} bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white px-3 py-3 sm:px-4 sm:py-4`;
      case 'absent':
        return `${baseStyles} bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white px-3 py-3 sm:px-4 sm:py-4`;
      default:
        return `${baseStyles} bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white px-3 py-3 sm:px-4 sm:py-4`;
    }
  };

  return (
    <div className="bg-white/50 dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-2">
        {KEYBOARD_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1.5">
            {row.map((key) => (
              <button
                key={key}
                className={getKeyStyles(key)}
                onClick={() => handleKeyPress(key)}
              >
                {key === 'Backspace' ? '⌫' : key.toUpperCase()}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
