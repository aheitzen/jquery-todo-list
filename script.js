// sweetAlert("I work", "I loaded", "error");
$(document).ready(function() {

	// $('task-form').submit(function(e) {
	// 	e.preventDefault();

	// }

	// $('#to-do-list').sortable();

	
	$('button').on('click', function(e) { 
		e.preventDefault();
		
		$('ul').append('<li>' + $('input').val() +'<span> X</span>' + '</li>');
		$('#item-form')[0].reset(); //input.val('');
	});
});


	$('ul li span').on('click', function () {
			// console.log('Item clicked');
			$(this).parent().remove();
			console.log(this)
		});
	$('#listContainer').on('click','li span', function () {
		$(this).parent().remove();
	});







