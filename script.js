
let Answer = Math.floor((Math.random() * 10 + 1)) ;
let guesses = 0;

document.getElementById("submitnumber").onclick = function(){
    
   let guess =  document.getElementById("guessed").value;
   guesses += 1;
   if(guess == Answer){
    alert(`${guess} is the true Number, it took you ${guesses} guesses`);
   }
   else if(guess < Answer){
    alert(`${guess} is too small`);
   }
   else{
    alert("the number is too large");
   }


}