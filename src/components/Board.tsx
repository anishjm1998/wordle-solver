import React from 'react';
import { useGame } from '../context/GameContext';
import classNames from 'classnames';

export const Board: React.FC = () => {
  const { board, letterStates, toggleLetterState } = useGame();

  const getTileColor = (state: string) => {
    switch (state) {
      case 'correct':
        return 'bg-green-500 text-white'; // Green for correct letters
      case 'present':
        return 'bg-yellow-500 text-black'; // Yellow for present letters
      case 'absent':
        return 'bg-gray-500 text-white'; // Gray for absent letters
      default:
        return 'bg-gray-200 text-black'; // Default state
    }
  };

  return (
    <div className="grid grid-rows-6 gap-2 p-4">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-5 gap-2">
          {row.map((letter, colIndex) => (
            <button
              key={colIndex}
              className={classNames(
                'w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold uppercase rounded transition-all duration-200',
                getTileColor(letterStates[rowIndex][colIndex])
              )}
              onClick={() => toggleLetterState(rowIndex, colIndex)}
            >
              {letter || ''}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
