
 //////////////////Game JS///////////////////
 ///////////////////////////////////////////

 var quiz = {
 	question: [{
 		prompt: "The Flathead Indian Reservation is home to the which of the following tribes?",
 		answer: ["Pueblo, Shoshoni, Ute and Washo Tribes",
 				 "The Bitterroot Salish, Kootenai, and Pend d'Oreilles Tribes", 
 				"The Kootenai and Pend d'Oreilles Tribes"
 				]
 	}, {
 		prompt: "The smallpox outbreak of the 1780's, introduced by the white settlers, killed what percentage of the Salish Tribe?",
 		answer: ["50% to 75%",
 				 "5% to 50%",
 				 "75% to 85%"
 				 ]
 	}, {
 		prompt: "According to the Treaty of Hell Gate which of the following is true?",
 		answer: ["Part of the Flathead Reservation was set aside for the US government's use and benefit.",
 			     "Over 1.25 million acres of land was set aside for the tribes exclusive use and benefit except for the right to pasture livestock.",
 				 "The Flathead Reservation, over 1.25 million acres of land, was set aside for the tribes exclusive use and benefit including the right to hunt, fish, gather plants, and pasture livestock."
 				 ]
 	}, {
 		prompt: "In 1872 Representative Garfield met with the Salish near present-day Stevensville to secure their approval and signature on an agreement. What were the terms of the agreement?",
 		answer: ["The Salish were to pay the US government $55,000 in exchange for new log houses, a side of beef for every family, and plots of land designated specifically for the Salish.", 
 				 "The Salish were to move from the Bitterroot Valley to the Jocko Reservation (Flathead Reservation) in exchange for $55,000, new log houses, a side of beef for every family, and plots of land designated specifically for the Salish.", 
 				 "The US Government was to open a public school and hospital servcing the Salish Tribe in the Bitteroot Valley."
 				 ]
 	}, {
 		prompt: "Which one of the following ways was the Flathead Allotment Act of 1904 not a breach of the Treaty of Hell Gate?",
 		answer: ["The Flathead Allotment act allowed for over 60% of the reservation to be sold to white farmers, thereby restricing the indian tribes the use and benefit of the land, which was excplicitly given to them in the Treaty of Hell Gate.", 
 				 "The Flathead Allotment act allowed for the US Governmet to set aside surplus land for its own use.", 
 				 "The Flathead Allotment act divided the entire Flathead reservation evenly among Tribal members, giving couples approximatley 160,000 acres of land and singles 80,000 acres of land each."
 				 ]
 	}, {
 		prompt: "Although the US Government has taken steps to repair the breach of the Treaty of Hell Gate, which of the following currenlty prevents the Confederated Salish and Kootenai Tribes from going back to their original ownership of the land given to them at the Treaty of Hell Gate?",
 		answer: ["A lot of land is still legaly owned by whites.",
 				 "The US Goverment has complete control over how and when land on the reservation is bought and sold.",
 				  "Parts of the Treaty of Hell Gate make it unlear as to whether the Confederated Salish and Kootenai Tribes have the right to some large and valuable parts of the Flathead Reservation"
 				  ]
 	}]
 }; 

 function updateQuestion(questionNumber) {
 	var question = quiz.question[questionNumber];
 	$('.question1 h3').text(question.prompt);
 	$('.question1 button:nth-of-type(1)').text(question.answer[0]);
 	$('.question1 button:nth-of-type(2)').text(question.answer[1]);
 	$('.question1 button:nth-of-type(3)').text(question.answer[2]);

 }

// one question is displayed at a time
/*function newGame() {
$('.question1').show('.question1');
$('.question2, question3, question4, question5, question6').hide();
}/*/


//if wrong answer, then message pops up with link to chapter to learn again

//if correct, music plays and old quesion fades out, new quesion fades in     

$(document).ready(function () {
	console.log('ready!');
	 $('.correct').click(function() {
	 	$('.question1').fadeOut(1000);
	 	$('question2').fadeIn(1000);
	 	//alert('Correct!');
	 })
});

//when complete game- if all answered correctly, congrats message.  

//If 2 or more answered incorrectly, Review history lesson and play again message. 

//timer

//skip ahead to next question, go back to previous question option

//new game, home or learn clears tracker, re-starts game from first question

 
  
 ///////////////////Learn JS/////////////////////////
 ////////////////////////////////////////////////////

 //coverflow for each chapter

 //click on image/chapter and history of text fades in

 //click next/back to go to next chapter or previous chapter

 //last chapter- message- now ready to be testeed, play game! 


  