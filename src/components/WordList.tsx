import React from 'react';
import { useGame } from '../context/GameContext';

export const WordList: React.FC = () => {
  const { possibleWords } = useGame();

  return (
    <div className="w-64 h-full bg-white p-4 border-l">
      <h2 className="text-xl font-bold mb-4">Possible Words ({possibleWords.length})</h2>
      <div className="h-[calc(100vh-120px)] overflow-y-auto">
        {possibleWords.map((word, index) => (
          <div key={index} className="py-1 border-b">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};