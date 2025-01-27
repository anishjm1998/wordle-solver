import React, { useEffect } from 'react';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import { WordList } from './components/WordList';
import { GameProvider } from './context/GameContext';

function App() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key.match(/^[a-zA-Z]$/) || key === 'Backspace' || key === 'Enter') {
        e.preventDefault();
        document.dispatchEvent(new CustomEvent('virtualKeyPress', { detail: key }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <GameProvider>
      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-1 flex flex-col items-center p-8">
          <h1 className="text-4xl font-bold mb-8">Wordle Solver</h1>
          <div className="flex flex-col items-center gap-8">
            <Board />
            <Keyboard />
          </div>
        </div>
        <WordList />
      </div>
    </GameProvider>
  );
}

export default App;