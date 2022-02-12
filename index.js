//Generate random capital letters
const passwordChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ",", ".", "~", "!",";", ":", "?", "/", "&", "^", "#", "=", "$", "+", "*", "%", "'", "|", "'", "<", ">", "@"]

//let randomChar = Math.floor(Math.random() * passwordChars.length);
//let passCode = passwordChars[randomChar];








//Render out the generated passwords in the output holders
let boxEl1 = document.getElementById("box_1");
let boxEl2 = document.getElementById("box_2");
let boxEl3 = document.getElementById("box_3");
let boxEl4 = document.getElementById("box_4");


//GENERATE PASSWORD (CLICKED!)
function generate(){
    for(i = 0; i < 15; i ++){
        boxEl1.textContent += passwordChars[randomFunctionGenerator()];
        boxEl2.textContent += passwordChars[randomFunctionGenerator()];
        boxEl3.textContent += passwordChars[randomFunctionGenerator()];
        boxEl4.textContent += passwordChars[randomFunctionGenerator()];
    }
}

//This function creates a random passwordChars index for each value in the array
function randomFunctionGenerator(){
    return Math.floor(Math.random() * passwordChars.length);
}


function boxSelector(){

}