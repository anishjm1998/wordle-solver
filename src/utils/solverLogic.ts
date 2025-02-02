import _ from 'lodash';
import { dictionary } from './dictionary';

export const checkWord = (guess: string, target: string) => {
  let feedback = Array(guess.length).fill('gray');
  let targetCopy = target.split('');

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      feedback[i] = 'green';
      targetCopy[i] = '';
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (feedback[i] !== 'green' && targetCopy.includes(guess[i])) {
      feedback[i] = 'yellow';
      targetCopy[targetCopy.indexOf(guess[i])] = '';
    }
  }

  return feedback;
};

export const getPossibleWords = (feedback: string[], guess: string) => {
  return dictionary.filter(word => {
    let isPossible = true;
    let targetCopy = word.split('');

    for (let i = 0; i < feedback.length; i++) {
      if (feedback[i] === 'green' && word[i] !== guess[i]) {
        isPossible = false;
        break;
      } else if (feedback[i] === 'yellow' && word[i] === guess[i]) {
        isPossible = false;
        break;
      } else if (feedback[i] === 'gray' && word.includes(guess[i])) {
        isPossible = false;
        break;
      }
    }

    return isPossible;
  });
};
