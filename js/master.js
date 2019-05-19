// $(document).ready(function(){
// 		$('#myModal').modal('show');
// 	});

$(window).scroll(function() {
       if ($(document).scrollTop() > 3000 && $("#myModal").attr("displayed") === "false") {
         $('#myModal').modal('show');
         $("#myModal").attr("displayed", "true");
       }
     });

	$('#fire').on('click', function (e) {
							$(".modal-title").text("Thank you!");
							$(".modal-body").text("Check your inbox for our newsletter. Have a great day!");
							$(".modal-footer").text("");
							});
