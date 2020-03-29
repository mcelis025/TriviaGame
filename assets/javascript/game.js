$(document).ready(function () {
//Counters for answers
  var correct = 0;
  var wrong = 0;
  var unanswered = 0
//Timer Var
  var intervalId;
  var clockRunning = false;
  var time = 3;

//Adds button to begin game
  $("#startBtn").addClass("mt-3 lead beginGame");
  $(".beginGame").append("<button>Start Game</button>");
//
  $("#startBtn").on("click", function() {
    $(".beginGame").empty();
    $("#begin").addClass("mt-3 questionClass");
    $("#begin").append('<p class="mt-3 questionClass">In New Vegas: </p>');
    
    start();
    timeOut();
    
        //Question 1
    $("#questionOne").addClass("mt-3 ml-3 q1 questionClass");
    $(".q1").append("<p>You start the game with a rocket launcher.</p>");

    $(".q1").append("<label><input type='radio' name='qOne' value='true'> True </label> <label><input type='radio' name='qOne' value='false'> False </label>");

        //Question 2
    $("#questionTwo").addClass("mt-3 ml-3 q2 questionClass");
    $(".q2").append("<p>You can vist Nellis Air Force Base.</p>");

    $(".q2").append("<label><input type='radio' name='qTwo' value='true'> True </label> <label><input type='radio' name='qTwo' value='false'> False </label>");

        //Question 3
    $("#questionThree").addClass("mt-3 ml-3 q3 questionClass");
    $(".q3").append("<p>You are a farmer before the adventure starts.</p>");

    $(".q3").append("<label><input type='radio' name='qThree' value='true'> True </label> <label><input type='radio' name='qThree' value='false'> False </label>");

        //Question 4
    $("#questionFour").addClass("mt-3 ml-3 q4 questionClass");
    $(".q4").append("<p>Deathclaw is the name of the dog you can be friends with.</p>");

    $(".q4").append("<label><input type='radio' name='qFour' value='true'> True </label> <label><input type='radio' name='qFour' value='false'> False </label>");

        //Question 5
    $("#questionFive").addClass("mt-3 ml-3 q5 questionClass");
    $(".q5").append("<p>Benny shoots you in the head.</p>");

    $(".q5").append("<label><input type='radio' name='qFive' value='true'> True </label> <label><input type='radio' name='qFive' value='false'> False </label>");

        //Submit Answers
    $("#submitBtn").append("<p><input type='button' value='Submit'></p>").addClass("quest subBtn");
  });

  function endGame() {
    $("#submitBtn").click(function(){

        stop();

        var userOne = $("input[name='qOne']:checked").val();
        if (userOne === "false") {
            correct++;
        } 
        if (userOne ===  "true") {
            wrong++;
        } 
        if (typeof userOne === "undefined") {
            unanswered++;
        }

        var userTwo = $("input[name='qTwo']:checked").val();
        if (userTwo === "false") {
            wrong++;
        } 
        if (userTwo ===  "true") {
            correct++;
        }  
        if (typeof userTwo === "undefined") {
            unanswered++;
        }

        var userThree = $("input[name='qThree']:checked").val();
        if (typeof userThree === "false") {
            correct++;
        } 
        if (userThree ===  "true") {
            wrong++;
        } 
        if (typeof userThree === "undefined") {
            unanswered++;
        }

        var userFour = $("input[name='qFour']:checked").val();
        if (userFour === "false") {
            correct++;
        } 
        if (userFour ===  "true") {
            wrong++;
        } 
        if (typeof userFour === "undefined") {
            unanswered++;
        }

        var userFive = $("input[name='qFive']:checked").val();
        if (userFive === "false") {
            wrong++;
        } 
        if (userFive ===  "true") {
            correct++;
        } 
        if (typeof userFive === "undefined") {
            unanswered++;
        }

        $(".questionClass").empty();

        $("#questionOne").addClass("mt-3 ml-3 quest questionClass");
        $(".q1").append("<p>Correct: " + correct + "</p>");

        $("#questionTwo").addClass("mt-3 ml-3 quest questionClass");
        $(".q3").append("<p>Wrong: " + wrong + "</p>");

        $("#questionThree").addClass("mt-3 ml-3 quest questionClass");
        $(".q3").append("<p>Unanswered: " + unanswered + "</p>");

        $(".subBtn").empty();
        
    });
  } endGame();

  function start() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  
  }
  function stop() {
    clearInterval(intervalId);
    clockRunning = false;
  }

  function timeOut() {
    if (time === 0) {
        $(".questionClass").empty();
        clearInterval(intervalId);
        endGame();
    }
  }

  function count() {
    time--;
    var convertedTime = timeConverter(time);
    $("#display").html(convertedTime);
  }

  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

  /*
  function timerStart () {
    var display2 = document.querySelector('#time2'),
    timer2 = new CountDownTimer(10);

timer2.onTick(format(display2)).start();

function format(display) {
    return function (minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    };
}
};


    var counter = 5;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("count");
          span.innerHTML = counter;
       }
       if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
        }
      }, 1000);
*/
    
}); 
