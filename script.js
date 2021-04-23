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

// Create stories

/* for(let i = 0; i < 12; i++){
    const rndNum = Math.floor(Math.random() * 20);
    console.log(rndNum);
} */

const getRndWrd = rndWord => {
    let word = Math.floor(Math.random() * rndWord.length);
    return rndWord[word];
}

const arcade = () => {
    console.log("When I go to the arcade with my " + "'" + getRndWrd(pluralNouns) + "'" + " there are lots of games to play." +
                "\nI spend lots of time there with my friends. In \"X-men\" you can be different " + "'" + getRndWrd(pluralNouns) + "'" + "." +
                "\nThe point of the game is to " + "'" +  getRndWrd(verbs) + "'" + " every robot." +
                "\nYou also need to save people, and then you can go to the next level." +
                "\nIn \"Star Wars\" you are Luke Skywalker and you try to destroy every " + "'" + getRndWrd(nouns) + "'" + "." +
                "\nIn a car racing / motorcyle racing game you need to beat every computerized vehicle that you are " + "'" +  getRndWrd(ingVerbs) + "'" + " against." +
                "\nThere are a whole lot of other cool games." +
                "\nWhen you play some games you win " + "'" +  getRndWrd(pluralNouns) + "'" + " for certain scores." +
                "\nOnce you're done you can cash in your tickets to get a big " + "'" + getRndWrd(nouns) + "'" + "." +
                "\nYou can save your " + "'" + getRndWrd(pluralNouns) + "'" +  " for another time." +
                "\nWhen I went to this arcade I didn't believe how much fun it would be." +
                "\nYou might annoy your parents by asking them over and over if you can go back to there." +
                "\nSo far I have had a lot of fun every time I've been to this great arcade!");
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

arcade();