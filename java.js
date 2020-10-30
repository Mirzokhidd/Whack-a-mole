var scores = 0;//Set scores

//Set a random time generator
function setRandomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

// Set random id from the array and return it
function setRandomizer() {
    var array = ["one", "two", "three", "four", "five", "six"];
    var text =  array[Math.floor(Math.random() * array.length)];
    return text;
}

//Present the random chosen id from setRandomizer for a random amount of time.
function fade() {
    document.getElementById("button").innerHTML = "Playing"; //Change the button
    setInterval(function() {
        var randomChoice = setRandomizer();
        $( document ).ready(function(){
            $('#' + randomChoice).fadeIn('slow', function(){
                $('#' + randomChoice).delay(setRandomTime(30, 130)).fadeOut(); 
            });
        });
    }, setRandomTime(800, 1300));
}

//Keep track of the score
function score() {
    scores++;
    document.getElementById("score").innerHTML = "Scores: " + scores;

    if (scores == 20) {
        alert("You got 20 points great");
        document.location = "file:///C:/Users/mirzo/Desktop/Github/Coding/Whack-a-mole/index.html";
        scores = 0;
    };
};