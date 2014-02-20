$(function() {
	$header = $('header');

	console.log();

	var pos = {};

	$('.anchor').each(function(i, item) {
		var $item = $(item),
			name = $(item).attr('name');
		
		pos[name] = $item.position().top;
	});

	console.log(pos);


	$(window).on("scroll", function() {
		var scrollTop = $(window).scrollTop();

	});
});