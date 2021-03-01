'use strict'
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
var userInput = prompt('my first name is saif').toLowerCase();
 myFunction();   
var userInput = prompt('my last name is hamaydeh').toLowerCase();
 myFunction();
var userInput = prompt('my age  is 25').toLowerCase();
myFunction();
var userInput = prompt('my place of birth UAE').toLowerCase();
myFunction();
var userInput = prompt('my faveret team is real madrid').toLowerCase();
myFunction();