$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

let flag = false;
$('.menu__box').click(function(){
	if(!flag){
		$('.menu__show').slideDown();
	}else{
		$('.menu__show').slideUp();
	}
	flag = !flag
})