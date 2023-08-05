console.log("We are here")

// Var with array and object for questions 
var questions = [
    {
        title: "Who is the president of Cameroon",
        choices: ["Jake", "Biya", "Tochi", "Amelia"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
console.log(questions)

//Declared variables
var score = 0;
var questionIndex = 0;

//Start code
//Declared variables

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector('#questionsDiv');
var wrapper = document.querySelector("#wrapper");

//Seconds left is 15 seconds per question:
var secondsLeft = 10;
//Holds interval time
var holdInterval = 0;
//Holds penalty time
var penalty = 10;
//Creates new element
var ulCreate = document.createElement("ul");

//Triggers timer on button, shows user a display on the screen

timer.addEventListener("click", function (e) {
    //prevent default
    e.preventDefault();
    //We are checking zero because it s originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval)
                currentTime.textContent = "Time's up!";
            }
            
        },1000)
    }
})
