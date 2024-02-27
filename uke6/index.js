//oppgave 1

for (let i = 1; i <= 50; i++) {
     console.log(i);
}

//oppgave 2

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//oppgave 3

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

//oppgave 4

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

//oppgave 5

for (let i = 7; i > 0; i--) {
    document.write(`<h${i}>Hei Abdulhay</h${i}>`)
}

//oppgave 6
var bredde = 10;
var høyde = 5; 

for (var i = 0; i < høyde; i++) {
  var star = "";
  for (var j = 0; j < bredde; j++) {
    if (  j === 10 ||  j === høyde - 5 || i === 1 ||  j === bredde - 5) {
      star += i, j;
    } else {
      star += "&nbsp";
    }
  }
  document.write(`<p${i}>*</p${i}>`); 
  document.write(`<p${j}>*</p${j}>`); 
}