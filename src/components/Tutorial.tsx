import React from "react";

const Tutorial: React.FC = () => {
  return (
    <div className="bg-[#9ec5f7] dark:bg-gray-800 p-5 rounded-xl shadow-lg w-full max-w-md border border-blue-400 dark:border-gray-700">
      <h2 className="text-xl font-bold text-blue-900 dark:text-gray-200 mb-3">
        Wordle Solver Guide
      </h2>

      <div className="space-y-4 text-blue-900 dark:text-gray-300">
        {/* Introduction */}
        <div className="space-y-2">
          <p className="text-sm">
            This solver helps you find the Wordle answer! Play Wordle in your browser,
            then use our solver to get suggestions for your next guess.
          </p>
        </div>

        {/* How to Use */}
        <div>
          <p className="font-bold mb-2">How to Use:</p>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>Go to Wordle in your browser</li>
            <li>Enter your guess in Wordle</li>
            <li>Type that same word in our solver</li>
            <li>Click letters to match Wordle's colors:</li>
          </ol>
        </div>

        {/* Color Guide */}
        <div>
          <p className="font-bold mb-2">Color Pattern:</p>
          <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2 bg-[#e4ecf7] dark:bg-gray-900 p-2 rounded-lg border border-gray-400 dark:border-gray-700 shadow-md">
          <span className="w-4 h-4 bg-gray-300 rounded border border-gray-400 dark:border-gray-700"></span>
  <span>Gray: Letter isn't in the word</span>
</div>
<div className="flex items-center gap-2 bg-[#e4ecf7] dark:bg-gray-900 p-2 rounded-lg border border-gray-400 dark:border-gray-700 shadow-md">
<span className="w-4 h-4 bg-yellow-300 rounded border border-yellow-400 dark:border-yellow-600"></span>
  <span>Yellow: Right letter, wrong spot</span>
</div>
<div className="flex items-center gap-2 bg-[#e4ecf7] dark:bg-gray-900 p-2 rounded-lg border border-gray-400 dark:border-gray-700 shadow-md">
<span className="w-4 h-4 bg-green-300 rounded border border-green-400 dark:border-green-600"></span>
  <span>Green: Perfect match!</span>
</div>

          </div>
        </div>

        {/* Tips */}
        <div>
          <p className="font-bold mb-2">Pro Tips:</p>
          <ul className="space-y-1.5 text-sm list-disc list-inside">
            <li>Start with "STARE" or "CRANE" - they're great first guesses</li>
            <li>Click a letter multiple times to cycle through colors</li>
            <li>Check "Possible Words" list for your next guess</li>
            <li>Press Backspace to fix mistakes</li>
            <li>Hit Enter when your word is complete</li>
          </ul>
        </div>

        <div className="bg-[#e4ecf7] dark:bg-gray-900 p-3 rounded-lg border border-blue-400 dark:border-gray-700 text-sm shadow-md">
  <p className="font-bold mb-1">Remember:</p>
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
