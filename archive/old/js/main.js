setTimeout(function() {
	$header = $('header');
	$navLinks = $header.find('nav a');

	var anchors = {};

	$('.anchor').each(function(i, item) {
		var $item = $(item),
			name = $(item).attr('name');
		
		anchors[name] = $item.offset().top;
	});

$("#email-notif").submit(function(e){
	e.preventDefault();
	var val = $('#email-notif :input')[0].value;
	var found = val.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
	console.log(found);
	if(val === found[0]) {
		console.log("yay");
	}
	else {
		console.log("no");
	}
});
	$(window).on("scroll", function() {
		var scrollTop = $(window).scrollTop(),
			selected = "home";

		for (key in anchors) {
			if (scrollTop < anchors[key] - 1) {
				break;
			}
			else {
				selected = key;
			}
		}
		// console.log(selected);
		$navLinks.removeClass("selected").filter('[data-for='+ selected +']').addClass("selected");
	});

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	   	  var selected = $(this.hash.slice(1)).selector;
	   	  //console.log(selected);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	      	// console.log(target);
	      	$navLinks.removeClass("selected").filter('[data-for='+ selected +']').addClass("selected");

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});



}, 500);


// var orgscroll = $(document).scrollTop(), switchcheck=false;

// 			function autoScroll(){
// 				// if(scrollable){
// 					if(switchcheck) return;
// 					switchcheck = true;

// 					var scroll = $(this).scrollTop();
// 					// scrollable=false;
					
// 					if (scroll > orgscroll) {
// 						if (scroll <  $('#sponsors').offset().top) {
// 			        $('html, body').animate({ scrollTop: $('#sponsors').offset().top }, 'slow');
// 						}else if ( scroll >  $('#sponsors').offset().top && scroll < $('#faq').offset().top) {
// 						  $('html, body').animate({ scrollTop: $('#faq').offset().top }, 'slow');
// 						}else if ( scroll > $('#faq').offset().top && scroll < $('#home').offset().top) {
// 						  $('html, body').animate({ scrollTop: $('#home').offset().top }, 'slow');
// 						}else if ( scroll > $('#home').offset().txop) {
// 						  $('html, body').animate({ scrollTop: $('#sponsors').offset().top }, 'slow');
// 						}	
// 					}
// 					orgscroll = scroll;
// 				// }
// 				setTimeout(function(){ switchcheck = false; }, 1000)
// 			}

// 			$(window).on('scroll', autoScroll);	


