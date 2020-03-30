$(document).ready(function () {
  //Counters for answers
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
  //Timer Var
    var intervalId;
    var clockRunning = false;
    var time = 30;

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
      $("#submitBtn").append("<p><input type='button' value='Submit'></p>").addClass("pb-5 pt-4 quest subBtn");
    });

    
    $(document).on("click", "#submitBtn", function(){
    
      stop();

      var userOne = $("input:radio[name='qOne']:checked").val();
      console.log(userOne);
      if (userOne === "false") {
          correct++;
      } 
      else if (userOne ===  "true") {
          wrong++;
      } 
      else {
          unanswered++;
      }

      var userTwo = $("input:radio[name='qTwo']:checked").val();
      console.log(userTwo);
      if (userTwo === "false") {
          wrong++;
      } 
      else if (userTwo ===  "true") {
          correct++;
      }  
      else {
          unanswered++;
      }

      var userThree = $("input:radio[name='qThree']:checked").val();
      if (userThree === "false") {
          correct++;
      } 
      else if (userThree ===  "true") {
          wrong++;
      } 
      else {
          unanswered++;
      }

      var userFour = $("input:radio[name='qFour']:checked").val();
      if (userFour === "false") {
          correct++;
      } 
      else if (userFour ===  "true") {
          wrong++;
      } 
      else  {
          unanswered++;
      }

      var userFive = $("input:radio[name='qFive']:checked").val();
      if (userFive === "false") {
          wrong++;
      } 
      else if (userFive ===  "true") {
          correct++;
      } 
      else {
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
