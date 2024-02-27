
// for (let i = 0; i < 5; i++) {
//     console.log("Hei Abdulhay");
// }


// let i = 0;
// while (i<5) {
//     console.log("Hei Abdulhay igjen");
//     i++;
// }

// let randomTall = Math.round(Math.random()*100)
// console.log(randomTall);
// var dittTAll = Number(prompt("Skriv et tall for å gjette et random tall"))










let randomNumber = Math.round(Math.random()*100)
console.log(randomNumber);
var myNumber = Number(prompt("guess the random number"))

while (true){

    if(randomNumber > myNumber){
        var myNumber = Number(prompt("Guess higher number"))
       
    }
    else if(randomNumber < myNumber){
        var myNumber = Number(prompt("Guess lower number"))
    }
    else{
        alert("Correct number")
        break;
    }
    
}


 











































// while (true) {
//     let dittTAll = Number(prompt("SKriv et tall"))
//     if (randomTall > dittTAll) {
//         console.log("Skriv et høyere tall");
//     } else if (randomTall < dittTAll) {
//         console.log("Skriv et mindre tall");
//     } else {
//         console.log("Gratulerer");
//         break;
//     }
// }