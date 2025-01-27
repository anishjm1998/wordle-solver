import React from 'react';
import { useGame } from '../context/GameContext';

const KEYBOARD_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
];

export const Keyboard: React.FC = () => {
  const { handleKeyPress } = useGame();

  return (
    <div className="flex flex-col gap-1">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => (
            <button
              key={key}
              className="px-3 py-4 bg-gray-200 rounded font-semibold text-sm"
              onClick={() => handleKeyPress(key)}
            >
              {key === 'Backspace' ? '⌫' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};