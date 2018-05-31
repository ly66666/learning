$(function(){
	$("a").on("mouseover mouseout",".icon-bi ",function(event){
		if(event.type=="mouseover"){
			$(".icon-bi").animate({fontSize:"18px"},"5000");
		}else{
			// $(this).animate({fontSize:"15px"},"5000");
		}
	});
});