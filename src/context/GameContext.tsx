import React, { createContext, useContext, useState, useCallback } from 'react';
import { LetterState, WordGuess, findPossibleWords } from '../utils/dictionary';

interface GameContextType {
  currentRow: number;
  currentCol: number;
  board: string[][];
  letterStates: LetterState[][];
  possibleWords: string[];
  handleKeyPress: (key: string) => void;
  toggleLetterState: (row: number, col: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array(5).fill(''))
  );
  const [letterStates, setLetterStates] = useState<LetterState[][]>(
    Array.from({ length: 6 }, () => Array(5).fill('empty'))
  );
  const [possibleWords, setPossibleWords] = useState<string[]>([]);

  const handleKeyPress = useCallback(
    (key: string) => {
      if (currentRow > 5) return;

      if (key === 'Backspace') {
        if (currentCol > 0) {
          const newBoard = board.map(row => [...row]); // Deep copy
          newBoard[currentRow][currentCol - 1] = '';
          setBoard(newBoard);
          setCurrentCol(currentCol - 1);
        }
        return;
      }

      if (key === 'Enter') {
        if (currentCol === 5) {
          const guesses: WordGuess[] = [];
          for (let i = 0; i <= currentRow; i++) {
            guesses.push({
              word: board[i].join(''),
              states: letterStates[i],
            });
          }
          const newPossibleWords = findPossibleWords(guesses);
          setPossibleWords(newPossibleWords);
          setCurrentRow(currentRow + 1);
          setCurrentCol(0);
        }
        return;
      }

      if (key.length === 1 && /^[a-z]$/i.test(key) && currentCol < 5) {
        const newBoard = board.map(row => [...row]); // Deep copy
        newBoard[currentRow][currentCol] = key.toLowerCase();
        setBoard(newBoard);
        setCurrentCol(currentCol + 1);
      }
    },
    [currentRow, currentCol, board, letterStates]
  );

  const toggleLetterState = useCallback((row: number, col: number) => {
    const states: LetterState[] = ['empty', 'absent', 'present', 'correct'];
    setLetterStates(prev => {
      const newStates = prev.map(row => [...row]); // Deep copy
      const currentIndex = states.indexOf(prev[row][col]);
      const nextIndex = (currentIndex + 1) % states.length;
      newStates[row][col] = states[nextIndex];
      return newStates;
    });
  }, []);

  return (
    <GameContext.Provider
      value={{
        currentRow,
        currentCol,
        board,
        letterStates,
        possibleWords,
        handleKeyPress,
        toggleLetterState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
