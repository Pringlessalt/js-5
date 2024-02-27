//oppgave 1
var tall = 0;

while (tall <= 50){
    console.log(tall);
    tall++;
}
 
//oppgave 2

var num = 2; 

while (num <= 100) {
  console.log(num);
  num += 2; 
}

//oppgave 3

var alle = 0;

while (alle <= 999) {
   console.log(alle);
   alle += 3;
}

//oppgave 4

var deak = 1;

while (deak <= 1000){
    if(deak % 3 === 0 && deak % 5 === 0){
        console.log("oppgave4 " + deak);
    }
    deak++;
}

//oppgave 5

var sum = 1;
var tallo = 0;

while (num <= 100){
    tallo += sum;
    sum++;

    // console.log("summen 1 til 100 er " , tallo );
}
console.log("summen 1 til 100 er " , tallo )

//oppgave 6

var line = '#'
var max = 4;

while (line.length <= max){
    console.log(line);
    line += '*';
}

//oppgave 7

var line = '*'
var max = 50;

while (line.length <= max){
    console.log(line);
    line += '*';
}

//oppgave 8

var i = 1;

 while(i <= 100){
    var punkt = '';

    if (i % 3 === 0) {
        punkt += 'Cat';
    }

    if (i % 5 === 0){
        punkt += 'Dog';
    }
    
    if (punkt === ''){
        punkt = i;
    }

    console.log(punkt);

    i++;
 }