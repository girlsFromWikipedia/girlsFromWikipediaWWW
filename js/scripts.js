/*!
* Start Bootstrap - Heroic Features v5.0.4 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function() {

	function setCookie(cname,cvalue,exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	let disclaimerPopupValue = getCookie("disclaimer-popup");
	if (disclaimerPopupValue == 'undefined' || !disclaimerPopupValue) {
		$('#disclaimerModal').modal('show');
	}

	$("body").on("click", ".close-disclaimer-modal", function(){
		setCookie("disclaimer-popup", "close", 365);
		$('#disclaimerModal').modal('hide');
	});
});

$(window).on('load', function(){
	$( ".imgage-gallery img" ).each(function( index ) {
		var infoContainerWidth = $(this).width();
		$(this).parent().find(".row").css({"width": infoContainerWidth + "px", "margin": "auto"});
	});

	setInterval(function() {
		$( ".imgage-gallery img" ).each(function( index ) {
			var infoContainerWidth = $(this).width();
			$(this).parent().find(".row").css({"width": infoContainerWidth + "px", "margin": "auto"});
		});
	}, 1000);
});

$( window ).resize(function() {
	$( ".imgage-gallery img" ).each(function( index ) {
		var infoContainerWidth = $(this).width();
		$(this).parent().find(".row").css({"width": infoContainerWidth + "px", "margin": "auto"});
	});
});
