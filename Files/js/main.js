var sections = ["home", "aboutMe", "experience", "contact"]
var sectionPositions = [0, 0, 0];



// Records offsets from the top for each section
function loadSectionPositions() {
	for (var i = 0; i < sections.length; i++) {
		var pos = $("#" + sections[i]).offset().top - 100;

		sectionPositions[i] = pos;
	}
}
$(document).ready(function() {
	$(".goToSection").click(function(e){
		  e.preventDefault();

		  var to = $(this).attr("href");

      $("#nav").removeClass("nav-expanded");
      $(".hamburger").removeClass("change");

    	$("html, body").stop().animate({
	        scrollTop: $(to).offset().top - 50
	    }, 500);

    });
});

