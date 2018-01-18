$(document).ready(function(){
  //FACTORIALS
// var userInput = parseInt(prompt("Enter a number:"));
//   for (var i = (userInput - 1) ; ( i >= 1 ); i-- ){
//     if (i === 1){
//       break;
//     }
//     userInput = userInput * i;
//     alert(userInput);
//   }

//HELLO OLLEH
// userInput = (prompt("Enter something:")).split("");
// userReverse = userInput.slice().reverse();
// //userReverse.reverse()
// for (var i = 0; i < userInput.length; i++) {
//   if (userInput[i] == userReverse[i]){
//     console.log(userInput[i]);
//   }
//   else {
//     alert("Nope");
//     break;
//   }
// }
//PRIMENUMBER
var userInput = parseInt(prompt("Enter a number:"));
primeArray = [];
for (var num = 3; num < userInput; num++) {
  primeArray.push(num);
}
for (var i = 2; i < userInput; i++) {
  for (var o = 2; (o*i) < userInput; o++) {
    for (var u = 0; u < primeArray.length; u++) {
      if ((o * i) == primeArray[u]) {
        primeArray.splice(u, 1);
      }
    }
  }
}
});
