$(function() {
	var $wrapper = $('#wrapper');
	// 給風格
	var theme = 'bootstrap3';
	// var themes = ['bootstrap3'];
	// 去資料夾裡套用css檔
	$('head').append('<link rel="stylesheet" href="../dist/css/selectize.' + theme + '.css">');


	// show current input values
	$('select.selectized,input.selectized', $wrapper).each(function() {
		// 增加Selected字，加上value class
		var $container = $('<div>').addClass('value').html('Selected: ');
		// 
		var $value = $('<span>').appendTo($container);
		var $input = $(this);
		var update = function(e) { $value.text(JSON.stringify($input.val())); }
		$(this).on('change', update);
		update();

		$container.insertAfter($input);
	});

});



