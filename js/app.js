'use strict'
let c =0;
alert("welcome to the saif website");
let userName = prompt("please enter your name");
alert("hello"+" "+userName);
function myFunction() {
    
    if(userInput =='yes' || userInput == 'y')
{    //console.log('correct answer;);
    alert("correct answer");
    c+=1;
}
else if(userInput =='n' || userInput == 'no' )
{  //console.log('WRONG answer;);
    alert("WRONG answer"); 
}

else
{
    //console.log('WRONG input;);
    alert('wrong input');
}
 }
var userInput = prompt('my first name is saif please answer yes or no').toLowerCase();
 myFunction();   
var userInput = prompt('my last name is hamaydeh please answer yes or no').toLowerCase();
 myFunction();
var userInput = prompt('my age  is 25 please answer yes or no').toLowerCase();
myFunction();
var userInput = prompt('my place of birth UAE please answer yes or no').toLowerCase();
myFunction();
var userInput = prompt('my faveret team is real madrid please answer yes or no').toLowerCase();
myFunction();
let GuessNumber = 5 ; 
let userGuessNumber = prompt('please guess the number betweem 0 and 9');

var i;
for (i = 0; i <4; i++) {
    
    if(userGuessNumber<5){
        alert('too low');
        userGuessNumber = prompt('please guess the number betweem 0 and 9');
}
else if(userGuessNumber>5 && userGuessNumber<=10)
{alert('too high');
userGuessNumber = prompt('please guess the number betweem 0 and 9');}
else if(userGuessNumber==5){
alert('congrats thats correct');
c+=1;
break;}
else{
    alert('wrong input'); 
    userGuessNumber = prompt('please guess the number betweem 0 and 9');

} }
console.log("saif");
if(userGuessNumber!=5){
alert("i'm sorry the guess number is 5");
}


let x;
for (i = 0; i <6; i++){
let n = prompt ("Guess my fav series");
 var series = ["game of thrones", "breaking bad", "vikings", "you", "black list", "friends", "sherlock", "prison breack", "witcher", "la casa de papel"];
 for (let i = 0; i < 10; i++) {
    if (n === series[i]) {
        x = series[i] ; 
        break;
    } }
    if (x === n) {

        alert ("Correct")
         c += 1 ;
         break;
    }
    else {

        alert ("Wrong");
    }}

alert("number of correcr answer"+" "+c);  
alert("thanks for using my site"+" "+userName);