$(document).ready(function(){

	$('.main-window__controls--link').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.main-window__controls--item'),
			contentItem = $('.main-window__stikers--item'),
			itemPosition = item.index();
		contentItem.eq(itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');

		
	});
});