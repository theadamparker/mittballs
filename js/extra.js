	konami = new Konami()
	konami.code = function() {
		var windowHeight = ($(window).height())-(90);
		
		$(function() {
			var randomMargin = Math.floor(90 + (1-90)*Math.random()) + "%" ;
			var randomWidth = Math.floor(242 + (1+200-242)*Math.random()) + "px" ;
			var randomLanding = Math.floor(280 + (1+200-280)*Math.random())*(-1) + "px" ;
			var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;
			
			$('<img src="ray.png" />').appendTo(".nest")
					.css({ left : randomMargin , width : randomWidth , marginTop : randomLanding , rotate: randomRotation})
					.delay(200) 
					.animate({
						top: windowHeight
						}, {
						duration: 1200,
						easing: "easeOutBounce" }
			);
		
		});
					
		$(function() {
			var randomMargin = Math.floor(90 + (1-90)*Math.random()) + "%" ;
			var randomWidth = Math.floor(242 + (1+200-242)*Math.random()) + "px" ;
			var randomLanding = Math.floor(280 + (1+200-280)*Math.random())*(-1) + "px" ;
			var randomRotation = Math.floor((-45) + (1+45-(-45))*Math.random()) + "deg" ;
			
			$('<img src="nick.png" />').appendTo(".nest")
					.css({ left : randomMargin , width : randomWidth , marginTop : randomLanding , rotate: randomRotation})
					.delay(500) 
					.animate({
						top: windowHeight
						}, {
						duration: 1800,
						easing: "easeOutBounce" }
			);
		
		});
			
	}

	konami.load()
