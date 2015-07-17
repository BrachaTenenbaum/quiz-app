
 //////////////////Game JS///////////////////
 ///////////////////////////////////////////

var score = 0;
var quiz = {
 	question: [{
 		prompt: "The Flathead Indian Reservation is home to the which of the following tribes?",
 		answer: ["Pueblo, Shoshoni, Ute and Washo Tribes",
 				 "The Bitterroot Salish, Kootenai, and Pend d'Oreilles Tribes", 
 				"The Kootenai and Pend d'Oreilles Tribes"
 				],
 		correctAnswer: 1   
 	}, {
 		prompt: "The smallpox outbreak of the 1780's, introduced by the white settlers, killed what percentage of the Salish Tribe?",
 		answer: ["50% to 75%",
 				 "5% to 50%",
 				 "75% to 85%"
 				 ],
 		correctAnswer: 0

 	}, {
 		prompt: "According to the Treaty of Hell Gate which of the following is true?",
 		answer: ["Part of the Flathead Reservation was set aside for the US government's use and benefit.",
 			     "Over 1.25 million acres of land was set aside for the tribes exclusive use and benefit except for the right to pasture livestock.",
 				 "The Flathead Reservation, over 1.25 million acres of land, was set aside for the tribes exclusive use and benefit including the right to hunt, fish, gather plants, and pasture livestock."
 				 ],
 		correctAnswer: 2

 	}, {
 		prompt: "In 1872 Representative Garfield met with the Salish near present-day Stevensville to secure their approval and signature on an agreement. What were the terms of the agreement?",
 		answer: ["The Salish were to pay the US government $55,000 in exchange for new log houses, a side of beef for every family, and plots of land designated specifically for the Salish.", 
 				 "The Salish were to move from the Bitterroot Valley to the Jocko Reservation (Flathead Reservation) in exchange for $55,000, new log houses, a side of beef for every family, and plots of land designated specifically for the Salish.", 
 				 "The US Government was to open a public school and hospital servcing the Salish Tribe in the Bitteroot Valley."
 				 ],
  		correctAnswer: 1

 	}, {
 		prompt: "Which one of the following ways was the Flathead Allotment Act of 1904 not a breach of the Treaty of Hell Gate?",
 		answer: ["The Flathead Allotment act allowed for over 60% of the reservation to be sold to white farmers, thereby restricing the indian tribes the use and benefit of the land, which was excplicitly given to them in the Treaty of Hell Gate.", 
 				 "The Flathead Allotment act allowed for the US Governmet to set aside surplus land for its own use.", 
 				 "The Flathead Allotment act divided the entire Flathead reservation evenly among Tribal members, giving couples approximatley 160,000 acres of land and singles 80,000 acres of land each."
 				 ],
 		Correctanswer: 2

 	}, {
 		prompt: "Although the US Government has taken steps to repair the breach of the Treaty of Hell Gate, which of the following currenlty prevents the Confederated Salish and Kootenai Tribes from going back to their original ownership of the land given to them at the Treaty of Hell Gate?",
 		answer: ["A lot of land is still legaly owned by whites.",
 				 "The US Goverment has complete control over how and when land on the reservation is bought and sold.",
 				  "Parts of the Treaty of Hell Gate make it unlear as to whether the Confederated Salish and Kootenai Tribes have the right to some large and valuable parts of the Flathead Reservation"
 				  ],
  		correctAnswer: 0

 	}]
 }; 

function updateQuestion(questionNumber) {
 	var question = quiz.question[questionNumber];
 	var answerButtons = $('.question button');
 	//var answer = $('question.correctAnswer'); //assign correct answer to variable here
 	$('.question h3').text(question.prompt); 

	// One question is displayed at a time
 	for( var i = 0; i < question.length; i++) {
 	answerButtons.eq(i).text(question.answer[i]);

 		if (answer.click) { //if click on correct answer 
 		alert('Correct!');
 		score++;
 		} else {
 		alert('Nope, try again!');
 		}
 	}
 }	
 	

// Fist question is displayed 
function displayFirstQuestion() {		
  //var currentQuestion = quiz.question[0];
  updateQuestion(0);
}

 //newGame();
$(document).ready(function () {
	console.log('ready!');
	$('h3').show();	 
	$(displayFirstQuestion);
}); 

//when complete game- if all answered correctly, congrats message. 
//If 2 or more answered incorrectly, Review history lesson and play again message. 

/*var message = 'You got ' + score + ' out of 6 questions correct.';
	if ((quesion[5].click) && (score > 5)) { //when reach the last questions 
		alert(message + ' Great job!')
	} else {
	alert(message + ' Review the history and try again!');
} */


//new game, home or learn clears tracker, re-starts game from first question


 
  
 ///////////////////Learn JS/////////////////////////
 ////////////////////////////////////////////////////

 //coverflow for each chapter

 //click on image/chapter and history of text fades in

 //click next/back to go to next chapter or previous chapter

 //last chapter- message- now ready to be testeed, play game! 


  