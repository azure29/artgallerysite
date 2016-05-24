// alert('hello');
$(document).on('ready', function() {
	$('form').on('submit', function() {
		
		if ($('#name').val() === ''){
	 		alert('name is required');
	 	
	 	} else if ($('#email').val() === '') {
	 		alert('email is required');
	 	
	 	} else if ($('#subject').val() === ''){
	 		alert('subject is required');
	 	
	 	} else if ($('#message').val() === ''){
	 		alert(' please enter a short message');
	 	
	 	 }  else {
	 	 	alert('All clear');
	 	 }
	 	 return false;
	});
		
});//en of .ready;


	 	
	 	
















