export const NEW_GAME = 'NEW GAME';
export const newGame = () => ({
    type:NEW_GAME, correctAnswer: Math.round(Math.random()*100)
});
export const MAKE_GUESSES = 'MAKE_GUESSES';
export const makeGuess =(guess) => ({
    type: MAKE_GUESSES, guess
});
export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});