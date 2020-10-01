$(function () {
  $(".post").slice(0, 5).show(); // select the first 5
  $("#load").click(function (e) {
    // click event for load more
    e.preventDefault();
    $(".post:hidden").slice(0, 5).show(); // select next 5 hidden posts and show them
    if ($(".post:hidden").length == 0) {
      // check if any hidden ppost still exist

      $("#load").hide(); // hide the button

      // alert("No more divs"); // alert if there are none left
    }
  });
});
