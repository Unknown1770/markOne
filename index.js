var readlineSync = require('readline-sync');
score =0;

highscore = [{
  name: "Vijayant Prateek",
  score:5
}, {
  name: "Anonymous User",
  score:3
}]

function game(){
  console.log("\n------------Let's Start The Game--------------\n")
    function play(question, answer) {
      var userans = readlineSync.question(question);

      if(userans.toUpperCase() === answer.toUpperCase()){
        console.log("Right Answer");
        score = score +1;

      }  else{
        console.log("Wrong Answer");
      }
      console.log("Current Score is: "+ score);
      console.log("---------------------------------")
    }

    var questions = [{
      question: "Where do I live? ",
      answer: "Bangalore"
    },  {
      question: "My Favourite Football Player? ",
      answer: "Messi"
    },  {
      question: "My Favourite Outdoor Sports? ",
      answer: "Football"
    },  {
      question: "My Favourite Sports Anime? ",
      answer: "Haikyu" 
    },  {
      question: "My Favourite Manga? ",
      answer: "Haikyu" 
    }]

    for (var i =0; i<questions.length; i++){
      var currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer)
    }
    console.log("---------------GAME OVER-------------------");
    console.log("Your Score is: " + score);

    for (var i = 0; i<highscore.length; i++){
      if(score> highscore[i].score){
        console.log("Congrats!! You have scored highest score");
        highscore[i].name = username;
        highscore[i].score = score;
      }  
    }


    console.log("\n-------------------------------------");
    console.log("High Scores By: ");
    for (var i = 0; i<highscore.length; i++){
      console.log("Name: " + highscore[i].name);
      console.log("Score: " + highscore[i].score); 
    }    
}

var username = readlineSync.question("What's Your Name? ")

console.log();

if (readlineSync.keyInYN('Welcome ' + username+ ' to DO YOU KNOW Vijayant? ')) {
  game();

} else {
  if (readlineSync.keyInYN('Do You Want to Take the Quiz Challenge? ')) {
  game();

  } else {
    console.log('Nice meeting you '+ username);
  }
}

console.log("In case Your name has come in high score Dm me the ScreenShot! I Will update it here also")

