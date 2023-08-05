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

//All done will append last page

function allDone() {
    questionsDiv.innerHTML = "";
    // currentTime.innerHTML = "";

    //Heading 
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!!!";
    
    //Append h1
    questionsDiv.append(createH1);

    //Paragraph
    var createP = document.createElement('p');
    createP.setAttribute('id', 'createP');
    //Append P
    questionsDiv.append(createP);

    //Calculate time remaining and replace it with score
    
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement('p');
        clearInterval(holdInterval);
        createP.textContent = `Your final score is ${timeRemaining}`;

        questionsDiv.append(createP2)
    }
        // Label
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
    //Append label
    questionsDiv.appendChild(createLabel);

      // input
      var createInput = document.createElement("input");
      createInput.setAttribute("type", "text");
      createInput.setAttribute("id", "initials");
      createInput.textContent = "";
  
    questionsDiv.appendChild(createInput);
    
    
    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    //Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function (e) {
        e.preventDefault();

        var initials = createInput.value;
        if (initials === null) {
            console.log("No value entered");
        } else {
            var finalScore = {
                initials: initials,
                score:timeRemaining
            }
            console.log(finalScore);
            //Get items from localstorage
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            //Travels to final Page
            window.location.replace("./scores.html");
        }
    },false)
}
