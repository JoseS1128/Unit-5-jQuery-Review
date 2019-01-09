// Use jQuery for each of these:

// 1. turn the square purple
$("#square").hover(function() {
  $("#square").css("background","purple");
});
// 2. make the triangle hide when clicked
$("#triangle").click(function() {
  $("#triangle").slideUp();
});
// 3. double the size of the circle when the mouse hovers over it
$("#circle").mouseover(function() {
 $("#circle").css("border-radius","200px");
 $("#circle").css("height","400px");
 $("#circle").css("width","400px");
});
// 4. replace the purple square with an image when clicked
$("#square").click(function() {
  $("#square").css("background-image","url(https://ih1.redbubble.net/image.296081353.4131/flat,550x550,075,f.jpg)");
});
// 5. make the triangle slideUp instead of just hiding it when clicked
$("#circle").mouseout(function() {
 $("#circle").css("border-radius","100px");
 $("#circle").css("height","200px");
 $("#circle").css("width","200px");
});
// 6. make the circle return to normal size when the mouse is no longer hovering over it