import words from 'an-array-of-english-words';

// Filter 5-letter words from dictionary
export const DICTIONARY = words.filter(word => word.length === 5);

export type LetterState = 'correct' | 'present' | 'absent' | 'empty';

export interface WordGuess {
  word: string;
  states: LetterState[];
}

export const findPossibleWords = (guesses: WordGuess[]): string[] => {
  return DICTIONARY.filter(word => {
    // Check each guess against potential word
    return guesses.every(guess => {
      const wordLetters = word.split('');
      const guessLetters = guess.word.split('');
      
      // Check if pattern matches based on letter states
      for (let i = 0; i < 5; i++) {
        const state = guess.states[i];
        const letter = guessLetters[i];

        if (state === 'correct' && wordLetters[i] !== letter) {
          return false;
        }
        
        if (state === 'present' && !wordLetters.includes(letter)) {
          return false;
        }
        
        if (state === 'present' && wordLetters[i] === letter) {
          return false;
        }
        
        if (state === 'absent' && wordLetters.includes(letter)) {
          const occurrencesInGuess = guessLetters.filter((l, idx) => 
            l === letter && (guess.states[idx] === 'correct' || guess.states[idx] === 'present')
          ).length;
          const occurrencesInWord = wordLetters.filter(l => l === letter).length;
          if (occurrencesInWord > occurrencesInGuess) {
            return false;
          }
        }
      }
      return true;
    });
  });
};