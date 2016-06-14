$(document).ready(function () {

// Wraps .container element in another div element to add background color.
	$(".container").wrap("<div class='container-wrap'></div>");

// Toggles languages element on and off
	var button = $(".bar__wrapper__right__button");
	var languages = $(".bar__wrapper__right__languages");

	button.click(function () {
		languages.toggle();
	})

//	Creates sticky navigation effect and adds translate effect for cover title
	var nav = $("header");
	var navOffset = nav.offset().top;

	$(window).scroll(function () {
		var scrollPos = $(this).scrollTop();

		if (scrollPos >= navOffset) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}

		$(".cover__title").css("transform", "translate(0px, "+ scrollPos /2 +"%)");		
	});

// Submitting form with ajax
	$("form.ajax").on("submit", function () {
		var that = $(this),
			url = that.attr("action"),
			type = that.attr("method"),
			data = {};

		that.find("[name]").each(function (index, value) {
			var that = $(this),
				name = that.attr("name"),
				value = that.val();

			data[name] = value;	
		});	

		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function(response) {
				console.log(response);
			}
		});
			
		return false;
	});

//	Opens pop up window by clicking on image
		var image = $(".pop-up-image");
		var overlay = $(".overlay");

	$(".container__img").click(function () {
		var src = $(this).attr("src");
		src = src.replace(".gif", ".jpg");
		image.attr("src", src);
		overlay.fadeIn(200);
		image.fadeIn(200);
	});
// Closes pop up window by clicking on overlay
	overlay.click(function () {
		$(this).fadeOut(200);
		image.fadeOut(200);
	})
// Closes pop up window by pressing esc key
	$(document).keyup(function(e) { 
        if (e.keyCode == 27) { 
            overlay.fadeOut(200);
            image.fadeOut(200);
        }    
    }); 

});

// Adds google maps to contact page
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {
	    	lat: 44.284371,
	    	lng: 19.931720
	    },
	    zoom: 14,
	    scrollwheel: false
	  });

	  var marker = new google.maps.Marker ({
	  	position: {
	  		lat: 44.284371,
	  		lng: 19.931720
	  	},
	  	map:map
	  	
	  })
	}
