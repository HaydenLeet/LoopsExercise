// LOOPS EXERCISE

// 1
for (i=1; i<=7; i++){
    console.log(i);
}

let b = '='.repeat(25);
console.log(b);

// 2
for (i=5; i<=25; i+=4){
    console.log(i);
}

console.log(b);

// 3a
const wizards =[
    'Harry Potter', 
    'Hermoine Grenger', 
    'Ron Weasley'
];

// 3b
for (wiz of wizards){
    console.log(wiz);
};

console.log(b);

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies < 8){
    // harryPotterMovies+=1;
    // harryPotterMovies = harryPotterMovies + 1;
    harryPotterMovies++;
    // 4c
    console.log(harryPotterMovies);
};

console.log(b);

// BONUS
// 5a
const hogwartsHouses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
];

// 5b
for (house of hogwartsHouses){
    for (letter of house){
        console.log(letter);
    }
};

// 6a
const quote = [
    'Yer',
    'A',
    'Wizard',
    'Harry'
];

// 6b
let text2 = '';
for (words of quote){
    text2 += words + ' ';
}
console.log(text2);

// OR
// let completeQuote = '';
// for (i=0; i<4; i++){
//     completeQuote += quote[i] + ' ';
// };
// console.log(completeQuote);

// OR
// let completeQuote = '';
// for (i=0; i<quote.length; i++){
//     completeQuote += quote[i] + ' ';
// };
// console.log(completeQuote);

// OR
// console.log(quote.join(' '));

// OR
// function addSpace(space){
//     return space.join(' ');
// };
// console.log(addSpace(quote));

console.log(b);

// 7
// Inspired by FizzBuzz
for (i=1; i<26; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('Expecto Patronum'); //Fizz Buzz
    } else if (i % 3 === 0){
        console.log('Expecto'); //Fizz
    } else if (i % 5 === 0){
        console.log('Patronum'); //Buzz
    } else {
        console.log(i);
    }
};