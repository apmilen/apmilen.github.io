
$(document).ready(function (){

	/*
	<head>
	 */

	$("title").text("ecstatichabit");

	$("#website-title").text("Cafe Sandy");

	var leftNavLinks = [
		{ href: "http://mileni.us/me", text: "Me"},
		{ href: "http://mileni.us/toolbox", text: "Toolbox"}
	];

	for (var i = 0; i < leftNavLinks.length; i++) {
		$("#left-nav-links").append('<a href="'+leftNavLinks[i].href+'">'+leftNavLinks[i].text+'</a>');
	};
});