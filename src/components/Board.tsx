import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import classNames from 'classnames';

export const Board: React.FC = () => {
  const { board, letterStates, toggleLetterState, currentRow } = useGame();

  const getTileColor = (state: string, rowIndex: number, hasLetters: boolean) => {
    if (rowIndex < currentRow && hasLetters && state === 'empty') {
      return 'bg-gray-500 text-white dark:bg-gray-600';
    }

    switch (state) {
      case 'correct':
        return 'bg-green-500 text-white border-green-600 dark:bg-green-600 dark:border-green-700';
      case 'present':
        return 'bg-yellow-500 text-black border-yellow-600 dark:bg-yellow-600 dark:border-yellow-700';
      case 'absent':
        return 'bg-gray-500 text-white border-gray-600 dark:bg-gray-700 dark:border-gray-800';
      default:
        return 'bg-white text-black border-gray-300 hover:border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:border-gray-500';
    }
  };

  useEffect(() => {
    if (currentRow > 0) {
      const previousRow = currentRow - 1;
      const hasUnmarkedLetters = board[previousRow].some((letter, index) =>
        letter && letterStates[previousRow][index] === 'empty'
      );

      if (hasUnmarkedLetters) {
        board[previousRow].forEach((letter, index) => {
          if (letter && letterStates[previousRow][index] === 'empty') {
            toggleLetterState(previousRow, index);
          }
        });
      }
    }
  }, [currentRow, board, letterStates, toggleLetterState]);

  return (
    <div className="grid grid-rows-6 gap-2 p-4 sm:gap-3 sm:p-6">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2 sm:gap-3">
          {row.map((letter, colIndex) => (
            <button
              key={colIndex}
              className={classNames(
                'w-10 h-10 sm:w-14 sm:h-14 border-2 flex items-center justify-center text-xl sm:text-2xl font-bold uppercase',
                'rounded-lg transition-all duration-200',
                'shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                getTileColor(letterStates[rowIndex][colIndex], rowIndex, !!letter)
              )}
              onClick={() => toggleLetterState(rowIndex, colIndex)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};