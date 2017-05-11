$(document).ready(function() {
	var sub = $('#sub');
	var activeRow;
	var activeMenu;

	var timer;

	var mouseInSub = false;

	sub.on('mouseenter', function(e) {
		mouseInSub = true;
	}).on('mouseleave', function(e) {
		mouseInSub = false;
	})

	$('#test')
		.on('mouseenter', function(e) {
			sub.removeClass('none');
		})
		.on('mouseleave', function(e) {
			console.log('leave');
			sub.addClass('none');

			if (activeRow) {
				activeRow.removeClass('active');
				activeRow = null;
			}

			if (activeMenu) {
				activeMenu.addClass('none');
				activeMenu = null;
			}
		})
		.on('mouseenter', 'li', function(e) {
			if (!activeRow) {
				activeRow = $(e.target);
				activeRow.addClass('active');
				activeMenu = $('#' + activeRow.data('id'));
				activeMenu.removeClass('none');
				return;
			}
			//debounce 去抖动
			if (timer) {
				clearTimeout(timer);
			}

			timer = setTimeout(function() {

				if (mouseInSub) {
					return;
				}

				activeRow.removeClass('active');
				activeMenu.addClass('none');

				activeRow = $(e.target);
				activeRow.addClass('active');
				activeMenu = $('#' + activeRow.data('id'));
				activeMenu.removeClass('none');
				timer = null;//debounce 去抖动
			}, 300)

			
		})
})