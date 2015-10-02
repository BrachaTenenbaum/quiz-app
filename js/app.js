
 //////////////////Game JS///////////////////
 ///////////////////////////////////////////
var currentQuestionNumber = 0;
//var currentQuestion = null;
var score = 0;
var quiz = {
 	questions: [{
 		prompt: "The Flathead Indian Reservation is home to the which of the following tribes?",
 		answer: ["Pueblo, Shoshoni, Ute and Washo Tribes",
 				 "The Bitterroot Salish, Kootenai, and Pend d'Oreilles Tribes", 
 				"The Kootenai and Pend d'Oreilles Tribes"
 				],
 		correctAnswer: 1   
 	}, {
 		prompt: "The smallpox outbreak of the 1780's, introduced by the white settlers, killed what percentage of the Salish Tribe?",
 		answer: ["50% to 75%",
 				 "25% to 50%",
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
 		correctAnswer: 2

 	}, {
 		prompt: "Although the US Government has taken steps to repair the breach of the Treaty of Hell Gate, which of the following currenlty prevents the Confederated Salish and Kootenai Tribes from going back to their original ownership of the land given to them at the Treaty of Hell Gate?",
 		answer: ["A lot of land is still legaly owned by whites.",
 				 "The US Goverment has complete control over how and when land on the reservation is bought and sold.",
 				  "Parts of the Treaty of Hell Gate make it unlear as to whether the Confederated Salish and Kootenai Tribes have the right to some large and valuable parts of the Flathead Reservation"
 				  ],
  		correctAnswer: 0

 	}]
 }; 


//Alert message when correct or incorrect anwer is selected
function buttonClickHandler() {
	var currentQuestion = quiz.questions[currentQuestionNumber];
	console.log('Button Click'); 
 	if ($('.question button').index(this) === currentQuestion.correctAnswer) { 
		alert('Correct!');
		score++;
		currentQuestionNumber++; 
		updateQuestion(currentQuestionNumber);
	} else {
		alert('Nope, try again!');

	} 

}

//Questions are updated 
function updateQuestion(questionNumber) {
	if (questionNumber < quiz.questions.length) {
		var currentQuestion = quiz.questions[questionNumber];
	 	var answerButtons = $('.question button');
	 	$('.question h3').text(currentQuestion.prompt); 

		// One question is displayed at a time
	 	for( var i = 0; i < currentQuestion.answer.length; i++) { 
	 		answerButtons.eq(i).text(currentQuestion.answer[i]);
	 	}
 	} else {
 		//Score and message 
		var message = 'You got ' + score;
		message +=' out of ' + quiz.questions.length;
		message += ' questions correct.';
		if (score >= 5) {  
			confirm(message + ' Great job!') //read on this + change. renew game. 
		} else {
			alert(message + ' Review the history and try again!'); //add learn. // no score- learn more. 
		}
		displayFirstQuestion();
	}
 }	

// Fist question is displayed 
function displayFirstQuestion() {
currentQuestionNumber = 0
score = 0		
  updateQuestion(0);
}
 	

 //newGame();
 $(document).ready(function () {
	displayFirstQuestion();
	console.log('ready!');
	$('h3').show();	 
	$('button').click(buttonClickHandler);
	
}); 


 
 
  



  