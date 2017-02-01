$(document).ready(function() {
  // Instructions in README.MD

$(".question").on("click", function() {
 	$(this).next().slideToggle("slow");
 	$(this).children().toggleClass(".collapse");
});

})