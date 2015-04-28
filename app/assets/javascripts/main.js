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
			'z-index':'0',
			'pointer-events':'none'
		})
		$('.slide img').css('opacity','0'),
		$('.slide').css({
			'pointer-events':'none',	
		})
	
	})
	$('.gos3').click(function(){
		alert('s3')
		$('.top-2').css({
			'top':'-2000px',
			'-webkit-transform': 'skew(20deg)'
	});
		$('.bottom-2').css({
			'bottom':'-2000px',
			'-webkit-transform': 'skew(20deg)'
		});
	})
})