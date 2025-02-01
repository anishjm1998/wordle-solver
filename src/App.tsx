import React, { useEffect } from 'react';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import { WordList } from './components/WordList';
import { GameProvider } from './context/GameContext';
import Tutorial from './components/Tutorial';
import ThemeProvider from "./components/ThemeProvider";

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
      <div className="flex min-h-screen bg-[#dfe9fc] dark:bg-gray-900 text-black dark:text-white justify-center items-center p-6 transition-colors duration-300">
        <ThemeProvider />

        {/* Tutorial Component (Left Side) */}
        <div className="mr-12">
          <Tutorial />
        </div>

        {/* Main Content (Board and Keyboard) */}
        <div className="flex-1 flex flex-col items-center gap-8">
        <h1 className="text-5xl font-extrabold text-center text-[#1e3a8a] dark:text-[#d1d5db] mt-4">
  Wordle Solver
</h1>





          <div className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-2xl">
            <Board />
            <Keyboard />
          </div>
        </div>

        {/* WordList Sidebar (Right Side) */}
        <div className="hidden lg:block w-[350px] p-4 bg-transparent overflow-y-auto">
          <WordList />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
