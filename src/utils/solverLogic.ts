import _ from 'lodash';
import { dictionary } from './dictionary';

// Function to check the word feedback (gray, yellow, green)
export const checkWord = (guess: string, target: string) => {
  let feedback = Array(guess.length).fill('gray'); // Initialize feedback to 'gray'
  let targetCopy = target.split(''); // Copy of the target word to modify

  // First pass: check for green (correct letters in the correct position)
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      feedback[i] = 'green';
      targetCopy[i] = ''; // Remove the letter from the target copy to avoid double counting
    }
  }

  // Second pass: check for yellow (correct letters in the wrong position)
  for (let i = 0; i < guess.length; i++) {
    if (feedback[i] !== 'green' && targetCopy.includes(guess[i])) {
      feedback[i] = 'yellow';
      targetCopy[targetCopy.indexOf(guess[i])] = ''; // Remove the letter from the target copy
    }
  }

  return feedback; // Array of 'gray', 'yellow', or 'green' for each letter
};

// Function to get possible words based on feedback
export const getPossibleWords = (feedback: string[], guess: string) => {
  return dictionary.filter(word => {
    let isPossible = true;
    let targetCopy = word.split('');

    // Check for feedback consistency
    for (let i = 0; i < feedback.length; i++) {
      if (feedback[i] === 'green' && word[i] !== guess[i]) {
        isPossible = false; // Word does not match green feedback
        break;
      } else if (feedback[i] === 'yellow' && word[i] === guess[i]) {
        isPossible = false; // Word does not match yellow feedback
        break;
      } else if (feedback[i] === 'gray' && word.includes(guess[i])) {
        isPossible = false; // Word should not include the gray letter
        break;
      }
    }

    return isPossible;
  });
};
