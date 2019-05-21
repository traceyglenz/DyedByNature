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
                 Swal.fire({
                 title: 'Thank You!',
                 text: 'Check your mailbox for the newsletter.',
                 imageUrl: 'img/chunkly.jpg',
                 imageWidth: 400,
                 imageHeight: 200,
                 imageAlt: 'Custom image',
                 animation: false
               })
             });
