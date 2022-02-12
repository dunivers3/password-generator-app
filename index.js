//Generate random capital letters
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let caps = upperCaseLetters[randomCapitalLetters()];
//console.log(caps);

//Generate random small letters
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let small = lowerCaseLetters[randomSmallLetters()];
//console.log(small);

//Generate random numbers
const numbersLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num = numbersLength[randomNumbers()];
//console.log(num);

//Generate random special characters
const otherChars = [",", ".", "~", "!",";", ":", "?", "/", "&", "^", "#", "=", "$", "+", "*", "%", "'", "|", "'", "<", ">", "@"];
let chars = otherChars[randomCharacters()];
//console.log(chars);


let combinedFunctions = [
    num,
    chars,
    caps,
    small
]

//Render out the generated passwords in the output holders
let rectangleEl = document.getElementById("rectangle_el");


//GENERATE PASSWORD (CLICKED!)
function genPass(){
    rectangleEl.textContent += combinedFunctions[randomPassword()];
}



//CAPITAL LETTERS
function randomCapitalLetters(){
    return Math.floor(Math.random() * upperCaseLetters.length);
}

//SMALL LETTERS
function randomSmallLetters(){
    return Math.floor(Math.random() * lowerCaseLetters.length);
}

//NUMBERS
function randomNumbers(){
    return Math.floor(Math.random()* numbersLength.length);
}
//SPECIAL CHARACTERS
function randomCharacters(){
    return Math.floor(Math.random()* otherChars.length);
}

//COMBINED FUNCTION ARRAY
function randomPassword(){
    return Math.floor(Math.random()* combinedFunctions.length);
}


console.log(randomPassword())




//return 




/*
function smallLetter(){
    for(i = 0; i != upperCaseLetters.length; i++){
        let smallLetter =  upperCaseLetters[i].toLowerCase();
        return smallLetter;
    }
}

 */