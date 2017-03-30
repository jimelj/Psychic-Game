var alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = "0";
var losses = "0";
var guessLeft = "9";
var yourGuess;
var yourGuessArr = [];
console.log(alphabet.length);

document.onkeyup = function() {
   yourGuess = String.fromCharCode(event.keyCode).toLowerCase();
   yourGuessArr.push(yourGuess);
  console.log(yourGuess);

 var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
 console.log(randomLetter);


         if (yourGuess == randomLetter) {
             wins++;
         }else {
             guessLeft--;
         }

         if (guessLeft == 0){
           losses++;
           guessLeft = 9;

         }

         if (losses == 10) {
           wins = 0;
           losses= 0;
           yourGuessArr = [];
         }
         console.log("wins: ",wins);
         console.log("Guesses Left: ", guessLeft);
         console.log("My array: ", yourGuessArr)



         var html =
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessLeft + "</p>" +
          "<p>Your Guesses so far: " + yourGuessArr.join(", ") + "</p>";

          document.querySelector('#game').innerHTML = html;

}
// console.log("test",(yourGuess+=yourGuess));
