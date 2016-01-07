
$(document).ready(function (){
	/*
	* Replace all SVG images with inline SVG
	*/
	jQuery('.social img,.close-modal img').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    jQuery.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');
	});
	/*jQuery('#branch-info').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var content = button.data('whatever') // Extract info from data-* attributes
		var modal = $("#"+content)
		$('.branch-info-content').html(modal.html())
		$('.modal-backdrop').appendTo('.branches-list');
	})*/

	$('.branch-link').click(function () {
		var content = $(this).data('element')
		var modal = $("#"+content)
		$('.branch-info-content').html(modal.html())
        $('#branch-info').modal();
      
        $('.modal-backdrop').appendTo('.branches-list');
        //removing body classes to able click events
        $('body').removeClass();
    });

});