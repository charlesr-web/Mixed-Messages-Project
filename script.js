// Main file for mixed messages
// Topic is to generate a mad lib story with randomly generated words as the input

/* 
    Need random variables for:
    - nouns
    - plural nouns
    - verbs
    - 'ing' verbs
    - exclamations
    - sound
    - adjectives
    - a month
    - a drink
    - a number(up to 12)
    - a color
*/

// Create function to get random words

/* for(let i = 0; i < 12; i++){
    const rndNum = Math.floor(Math.random() * 20);
    console.log(rndNum);
} */

const getLib = libWord => {
    let word = Math.floor(Math.random() * libWord.length);
    return libWord[word];
}

const nouns = ['evening', 'oxygen', 'daughter', 'whale', 'morning', 'piano', 'sandwich', 'leather', 'hydrogen', 'notebook', 'teacher', 'ice'];
const pluralNouns = ['evenings', 'oxygens', 'daughters', 'whales', 'mornings', 'pianos', 'sandwiches', 'leathers', 'hydrogens', 'notebooks', 'teachers', 'ices'];
const verbs = ['paint', 'kick', 'eat', 'pursue', 'thrive', 'acquire', 'grasp', 'persuade', 'investigate', 'emphasize', 'modify', 'search'];
const ingVerbs = ['painting', 'kicking', 'eating', 'pursuing', 'thriving', 'acquiring', 'grasping', 'persuading', 'investigating', 'emphasizing', 'modifying', 'searching'];
const exclamations = ['Amen', 'Bravo', 'Yippee', 'Awesome', 'My Goodness', 'Hello', 'Hip, hip, hooray', 'Howdy', 'Hmm', 'Ick', 'Heavens', 'Super'];
const sounds = ['growl', 'roar', 'buzz', 'squeak', 'bark', 'swoosh', 'click', 'ping', 'ding', 'beep', 'tick', 'pop'];
const adjectives = ['based', 'harsh', 'enthusiastic', 'elegant', 'interesting', 'belligerent', 'auspicious', 'concerned', 'barren', 'tall', 'fair', 'quiet'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const drinks = ['coke', 'cider', 'orange juice', 'beer', 'martini', 'hot chocolate', 'gatorade', 'club soda', 'milk', 'water', 'coffee', 'apple juice'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const colors = ['blue', 'yellow', 'green', 'beige', 'pink', 'gold', 'dark blue', 'brown', 'gray', 'red', 'black', 'silver'];

console.log(getLib(nouns));