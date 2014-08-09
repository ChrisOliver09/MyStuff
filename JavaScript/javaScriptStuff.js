//This is the start of beautiful Javascript

confirm("Are you ready to play??")// brings up an alert box with ok or cancel (default values)

var age = prompt("What's your age?"); //this will bring up an alert view and store what the user inputs into the variable

console.log("Hay") //log info to terminal 

var foodDemand = function(food) { //Basic function in javascript. all lines inside as well as the end bracket must end with semi-colon
    console.log("I want to eat" + " " + food);
};

foodDemand("Pizza"); //calling the above function

var timesTwo = function(number) { //functions can return (just like any other language)
    return number * 2;
};