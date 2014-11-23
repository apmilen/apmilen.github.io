
$(document).ready(function (){

	/*
	<head>
	 */

	$("title").text("ecstatichabit");

	$("#website-title").text("Cafe Sandy");
	$("#website-title").click(function(){window.location.assign("http://mileni.us")});

	var leftNavLinks = [
		{ href: "https://keybase.io/apm", text: "Me"},
		{ href: "http://mileni.us/toolbox", text: "Toolbox"}
	];

	for (var i = 0; i < leftNavLinks.length; i++) {
		$("#left-nav-links").append('<a href="'+leftNavLinks[i].href+'">'+leftNavLinks[i].text+'</a>');
	};

	if (pagename)
		$("#left-nav-links a:contains('"+pagename+"')").addClass("left-nav-selected");
});