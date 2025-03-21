import React, { useEffect } from 'react';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import { WordList } from './components/WordList';
import { GameProvider } from './context/GameContext';
import Tutorial from './components/Tutorial';
import ThemeProvider from './components/ThemeProvider';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

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
      <div className="flex flex-col min-h-screen bg-[#dfe9fc] dark:bg-gray-900 text-black dark:text-white p-4 sm:p-6 transition-colors duration-300">
        <ThemeProvider />

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 w-full max-w-7xl mx-auto">
          <div className="w-full lg:w-[300px]">
            <Tutorial />
          </div>

          <div className="flex-1 flex flex-col items-center gap-4 sm:gap-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-[#1e3a8a] dark:text-[#d1d5db]">
              Wordle Solver
            </h1>

            <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl">
              <Board />
              <Keyboard />
            </div>
          </div>

          <div className="w-full lg:w-[300px]">
            <WordList />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}

export default App;