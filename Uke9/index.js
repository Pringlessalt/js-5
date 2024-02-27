// oppgave 1

function sum(a,b,c) {
    return a+b+c;
}

function times(a,b,c) {
    return a*b*c;
}
function div(a,b,c) {
    return a/b/c;
}
function min(a,b,c) {
    return a-b-c;
}

let tall1 = Number(prompt("Skriv tall 1"))
let tall2 = Number(prompt("Skriv tall 2"))
let tall3 = Number(prompt("Skriv tall 3"))

console.log(sum(tall1,tall2,tall3));
console.log(min(tall1,tall2,tall3));
console.log(div(tall1,tall2,tall3));
console.log(times(tall1,tall2,tall3));

//oppgave2

function tallRand(){
    let tall1 = Math.floor(Math.random()*100);
let tall2 = Math.floor(Math.random()*100);

if (tall1 > tall2){
    return tall1 + " is bigger than " + tall2 ;

}
else if (tall1 < tall2){

    return  tall1+ " is smaller than " + tall2;
}
}

console.log(tallRand());

//oppgave3
var tall1 = parseFloat(prompt("Write a number!"));
var tall2 = parseFloat(prompt("Write another number!"));

var table = prompt("+,-,/,*");

var results;
if (table === "+") {
    results = tall1 + tall2;
} else if (table === "-") {
    results = tall1 - tall2;
} else if (table === "*") {
    results = tall1 * tall2;
} else if (table === "/") {
    if (tall2 !== 0) {
        results = tall1 / tall2;
    }
 
    else {
        results = "Cannot divide 0"
    }
}
alert(results);

//oppgave4
function random(){
    var min = parseInt(prompt("enter a number"))
    var max = parseInt(prompt("enter a higher number"))
   
    if (isNaN(min) || isNaN(max)) {
        alert("Write a Number");
        return;
    }

 
    if (min >= max) {
        alert("This first number needs to be lower Then The second!!!");
        return;
    }

    
    var randoms = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert("The random number between" + min + " and " + max + " is: " + randoms);
}

random()

 