/*
* INFO/CS 1300
* Fall 2016
* Wanming Hu
*
* assignment07
*
*/

// Using the existing onclick event handler in html
	
//change theme
function setSpringTheme(){
	//pragma
	"use strict";
	//change the theme to spring
	$("body").css("background-color", "#D8ECC3");
	$("nav").css("background-color","#1C4905");
}

function setFallTheme(){
	//pragma
	"use strict";
	//change the theme to spring
	$("body").css("background-color", "	#FFDAB9");
	$("nav").css("background-color","#FF6347");
}

// Using jQuery.click(function)

$(document).ready(function () {
	//pragma
	"use strict";

	//hide the entire "footer" element
	$("footer a").click(function () {
		$("footer").hide();
	});

	//move the car across the page in 1 sec.
	$("#car").click(function () {
		$("#car").animate({marginLeft: "75%"}, 1000);
	});

	//toggle the ghost image
	$("p a").click(function () {
		$("#ghost").toggle(3000);
	});

});







