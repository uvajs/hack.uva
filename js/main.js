setTimeout(function() {
	$header = $('header');
	$navLinks = $header.find('nav a');

	var anchors = {};

	$('.anchor').each(function(i, item) {
		var $item = $(item),
			name = $(item).attr('name');
		
		anchors[name] = $item.position().top;
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

		$navLinks.removeClass("selected").filter('[data-for='+ selected +']').addClass("selected");
	});

}, 500);
