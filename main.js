const prompt = require('prompt-sync')();
const REVERTSTRINGS = require('./revert-strings');

const inputString = prompt("Enter the test string:");
REVERTSTRINGS.revertWithSpecialChars(inputString);