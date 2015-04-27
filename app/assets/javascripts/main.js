$(function(){
	$('.gos2').click(function(){
		alert('s2')
		$('.left').css({
			'left':'-2000px',
			'-webkit-transform': 'skew(20deg)'
	});
		$('.right').css({
			'right':'-2000px',
			'-webkit-transform': 'skew(20deg)'
		});
		$(this).css({
			'opacity':'0',
			'z-index':'0'
		})
	
	})
	$('.gos3').click(function(){
		alert('s3')
		$('.left-2').css({
			'left':'-2000px',
			'-webkit-transform': 'skew(20deg)'
	});
		$('.right-2').css({
			'right':'-2000px',
			'-webkit-transform': 'skew(20deg)'
		});
	})
})