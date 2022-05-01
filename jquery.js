$(document).ready(function(){
	$(".day").removeClass("selected");
	$(".day").on("click", function(){
		$(".day").removeClass("selected");
		$(this).addClass("selected");
		$(function() {day_output(0)});
	});
	autoSelectDay();
	$(function() {day_output(1)});
});

function autoSelectDay() {
	var {dayShort} = setups(1);
	for (var i in $(".day")) {
		var day = $(".day")[i];
		if (dayShort == day.textContent) {
			$(day).addClass("selected");
		}
		else if (dayShort == "ВС"){
			$($(".day")[0]).addClass("selected");
		};
		return day.textContent;
	}
}
function selectedDay() {
	var {dayShort} = setups(0);
	for (var i in $(".day")) {
		var day = $(".day")[i];
		if (dayShort == day.textContent) {
			return day.textContent;
		};
		
	}
}