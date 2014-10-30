$(document).ready(function () {
  // Resize member card title
  $('.member-card .card-title').fitText(.9);
  // Mouse over card listener
  mouseOverCard();
});

function mouseOverCard() {
  $('.member-card').hover(
    function(e) {
      $(this).addClass('mouse_hover');
    },
    function(e) {
      $(this).removeClass('mouse_hover');
    }
  );
}