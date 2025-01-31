# Wordle Solver

A web-based Wordle solver that helps players solve Wordle puzzles more efficiently by providing suggestions based on previous guesses and feedback. The solver takes into account the letter states (correct, present, absent) and filters the word list accordingly.

## Features:

- **Interactive Wordle Board:** Enter your guesses and see the feedback based on letter states (correct, present, absent).
- **Keyboard with Color Feedback:** Displays the possible letter states for each key (green for correct, yellow for present, gray for absent).
- **Possible Words List:** View a filtered list of possible words based on your guesses.
- **Tutorial Guide:** Learn how to use the solver with an easy-to-follow tutorial.

## Tech Stack:

- **Frontend:** React, Tailwind CSS, TypeScript
- **State Management:** React Context API
- **UI Framework:** Tailwind CSS for responsive and modern UI design

## Installation

Follow these steps to get the project running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wordle-solver.git

2. Navigate into the project directory:
   ```bash
   cd wordle-solver

3. Install the dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm start

5. Open your browser and navigate to http://localhost:3000 to start using the Wordle Solver!

## Usage:

1. Go to Wordle https://www.nytimes.com/games/wordle/index.html.
2. Play the game and enter your guess in the solver.
3. Click on letters to cycle through the possible feedback colors (gray, yellow, green).
4. The list of possible words will update as you enter each guess.
5. Use the keyboard provided to enter letters or use the Enter/Backspace keys.

## Color Guide:

- Gray: The letter is not in the word.
- Yellow: The letter is in the word, but not in the correct position.
- Green: The letter is in the word and in the correct position.

## Contributing:

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Here are a few things you can do:

- Improve the UI: Enhance the design or add new themes (e.g., Dark Mode).
- Enhance Solver Logic: Improve the efficiency or accuracy of the word filtering algorithm.
- Add Tests: Help increase the test coverage for the project.
- Documentation: Improve the documentation or write new tutorials.

## How to Contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
3. Make your changes and commit them:
   ```bash
   git commit -am 'Add feature'
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
5. Submit a pull request.

-------------------------------------------------------------------------------------------------------------------------------------