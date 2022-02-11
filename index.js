let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowerCaseLetters = smallLetter();

let numbersLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let otherChars = [",", ".", "~", "!",";", ":", "?", "/", "&", "^", "#", "=", "$", "+", "*", "%", "'", "|", "'", "<", ">", "@"];

function smallLetter(){
    for(i = 0; i != upperCaseLetters.length; i++){
        let letter =  upperCaseLetters[i].toLowerCase();
        console.log(letter);
    }
}

console.log(otherChars)