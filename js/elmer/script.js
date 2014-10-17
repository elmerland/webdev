$(document).ready(function () {
  // Add responsive font resizing to page title and subtitle
  // Use lettering to split words into span elements
  $('header h1, footer h1').fitText(1.1);
  $('header h2').fitText(2.5).lettering('words');
});