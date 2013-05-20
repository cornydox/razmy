
$(function(){
	var $container = $('#canvas');
	$container.imagesLoaded(function(){
	  $container.masonry({
	    itemSelector : '.box',	    
	    // isFitWidth: true,
	    isAnimated: true,
	    columnWidth: function( containerWidth ) {
	    	return containerWidth / 5;
		},
		animationOptions: {
			duration: 450,
			easing: 'linear',
			queue: false
		}
	  });
	});
});

$(window).load(function(){
	
	// $('#canvas').masonry('reload');
});