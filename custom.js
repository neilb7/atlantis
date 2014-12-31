var x = $('#tooltippers > li').eq(1);

$(x)
	.on('click', function() {
		$('#about').toggle();
	})
	// .on('mouseleave', function(){
	// 	$('#about').hide();
	// });