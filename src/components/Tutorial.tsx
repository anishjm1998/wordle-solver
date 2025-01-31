import React from "react";

const Tutorial: React.FC = () => {
  return (
    <div className="bg-[#9ec5f7] dark:bg-gray-800 p-5 rounded-xl shadow-lg w-full max-w-md border border-blue-300 dark:border-gray-700">
      <h2 className="text-xl font-bold text-blue-800 dark:text-gray-200 mb-3">
        Wordle Solver Guide
      </h2>

      <div className="space-y-4 text-blue-800 dark:text-gray-300">
        {/* Introduction */}
        <div className="space-y-2">
          <p className="text-sm">
            This solver helps you find the Wordle answer! Play Wordle in your browser,
            then use our solver to get suggestions for your next guess.
          </p>
        </div>

        {/* How to Use */}
        <div>
          <p className="font-medium mb-2">How to Use:</p>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>Go to Wordle in your browser</li>
            <li>Enter your guess in Wordle</li>
            <li>Type that same word in our solver</li>
            <li>Click letters to match Wordle's colors:</li>
          </ol>
        </div>

        {/* Color Guide */}
        <div>
          <p className="font-medium mb-2">Color Pattern:</p>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-gray-700 p-2 rounded">
              <span className="w-4 h-4 bg-gray-300 rounded"></span>
              <span>Gray: Letter isn't in the word</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-gray-700 p-2 rounded">
              <span className="w-4 h-4 bg-yellow-300 rounded"></span>
              <span>Yellow: Right letter, wrong spot</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-gray-700 p-2 rounded">
              <span className="w-4 h-4 bg-green-300 rounded"></span>
              <span>Green: Perfect match!</span>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div>
          <p className="font-medium mb-2">Pro Tips:</p>
          <ul className="space-y-1.5 text-sm list-disc list-inside">
            <li>Start with "STARE" or "CRANE" - they're great first guesses</li>
            <li>Click a letter multiple times to cycle through colors</li>
            <li>Check "Possible Words" list for your next guess</li>
            <li>Press Backspace to fix mistakes</li>
            <li>Hit Enter when your word is complete</li>
          </ul>
        </div>

        {/* Key Info */}
        <div className="bg-blue-50 dark:bg-gray-700 p-3 rounded text-sm">
          <p className="font-medium mb-1">Remember:</p>
          <p>
            The word list updates automatically as you enter each guess.
            All suggested words are valid Wordle answers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;