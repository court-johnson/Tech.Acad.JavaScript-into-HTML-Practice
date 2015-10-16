/* JavaScript source code
   practicing JavaScript into HTML
*/

$(document).ready(function() {
	
  $("h1").mouseenter(function() {
    $(this).css({
		"margin-left":"+=50px",
		"background-color":"blue"
	});
  });
  
});