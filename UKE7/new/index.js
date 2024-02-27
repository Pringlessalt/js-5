var input = document.getElementById("guessField");

input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
    }
    
 }); 

var randomNumber = Math.floor(Math.random() * 101);

function checkGuess() {

    var userGuess = parseInt(document.getElementById('guessField').value);
    
    if (userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
        document.getElementById('message').innerHTML = 'Skriv et nummer mellom 0 and 100.';
        return;
    }

    // var input = document.getElementById("guessField");
    // input.addEventListener("keypress", function(event) {
    //   if (event.key === "Enter") {
    //     event.preventDefault();
    //     document.getElementById("myBtn").click();
    //     }
    //  }); 

    if (userGuess === randomNumber) {
        document.getElementById('message').innerHTML = `Gratulerer det er correct nummer ${randomNumber}!`;
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerHTML = 'Talen er høy! prøv igjen.';
    } else {
        document.getElementById('message').innerHTML = 'Talen er mindre! prøv igjen.';
    }
    
  } 