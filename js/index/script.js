$(document).ready(function () {
  // Get last update date
  getLastUpdateDate();
  // Mouse over card listener
  mouserOverCard()
  // Click listener for nav links
  navLinks();
});

function getLastUpdateDate() {
  // Target repo
  var repo = 'elmerland/webdev';
  var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
  // Call GitHub API for list of commits
  $.getJSON("https://api.github.com/repos/" + repo + "/commits", function(data) {
    // Get date field and transform to date object
    var date = new Date(data[0].commit.author.date);
    // Format to date string
    date_str = monthNames[date.getMonth()] + " " +
      date.getDate() + ", " + date.getFullYear();
    // Update DOM element
    $('.last-updated-date').html(date_str);
  });
}

function mouserOverCard() {
  $('.card').hover(
    function(e) {
      $(this).addClass('mouse_hover');
    },
    function(e) {
      $(this).removeClass('mouse_hover');
    }
  );
}

function navLinks() {
  $('.page-nav a').click(function (e) {
    e.preventDefault();
    swal("Hello there!\nThis page is still under construction. It will be ready soon :D");
  })
}
