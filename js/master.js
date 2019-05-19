$(document).ready(function(){
		$('#myModal').modal('show');
	});

	$('#fire').on('click', function (e) {
							$(".modal-title").text("Thank you!");
							$(".modal-body").text("Check your inbox for our newsletter.");
							$(".modal-footer").text("");
							});
