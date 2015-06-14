$( document ).ready(function() {
			
			// appends html to body element - make sure you are linked to bootstrap icon fonts. 
			$( 'body' ).append('<a class="back-to-top" href="#"><i class="glyphicon glyphicon-chevron-up"></i></a>');
  			
			
		    var offset = 600; // sets distance in pixels when back to top will appear 
			var duration = 400;  // fade in duration 
			$(window).scroll(function() {
				if ($(this).scrollTop() > offset) {
					$('.back-to-top').fadeIn(duration);
				} else {
					$('.back-to-top').fadeOut(duration);
				}
			});
			
			
			$('.back-to-top').click(function(){
			$("html, body").animate({scrollTop:0}, 'slow');	
				return false;
				
				});	

});	

