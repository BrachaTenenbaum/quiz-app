 ///////////////////Learn JS/////////////////////////
 ////////////////////////////////////////////////////
 
$(document).ready(function() {
	var blurbId; // blurb Id undefined
	$('input[type="radio"]').click(function() {
		if (blurbId) {
			$(blurbId).hide();
		} 
		blurbId= '#blurb-' + $(this).attr('id').substr(6); 
		$(blurbId).show();
	});

});
 

 //last chapter- message- now ready to be testeed, play game! 