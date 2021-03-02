'use strict'
alert("welcome to the saif website");
let userName = prompt("please enter your name");
alert("hello"+" "+userName);
function myFunction() {
    
    if(userInput =='yes' || userInput == 'y')
{    //console.log('correct answer;);
    alert("correct answer");
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
alert("thanks for using my site"+" "+userName);