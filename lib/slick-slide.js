$(document).ready(function() {
	$('.home-slider').slick({})
	$(window).on("load resize", function(){
	    var width = $(document).width(); 
	    if (width <= 768) {
	      $('.work-tumbnails').not('.slick-initialized').slick({  
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 3000,
	        infinite: true,
	        dots: true,
	        responsive:[
				{
					breakpoint: 480,
					settings: {
						slidesToShow:1
					}
				}
			]
	      });
	    }
	});
});