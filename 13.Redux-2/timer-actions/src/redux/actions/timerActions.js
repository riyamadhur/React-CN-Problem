// define action constants here
export const START_TIMER = 'START_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';
// define action creators here
export const startTimer = () => ({type: START_TIMER});
export const pauseTimer = () => ({type: PAUSE_TIMER});
export const resetTimer = () => ({type: RESET_TIMER});
export const incrementTimer = () => ({type: INCREMENT_TIMER});