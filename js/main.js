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

		$navLinks.removeClass("selected").filter('[data-for='+ selected +']').addClass("selected");
	});



}, 500);

