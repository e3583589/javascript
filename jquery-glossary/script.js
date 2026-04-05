$(document).ready(function () {

  // Hide botanic names + images
  $('.botanic').hide();
  $('.imgdiv').hide();

  // Mouseover / mouseout for headings
  $('h1, h2').mouseover(function () {
    $(this).css('color', 'purple');
  });

  $('h1, h2').mouseout(function () {
    $(this).css('color', '');
  });

   // Click event for flowers
  $('.flower').click(function () {
    $('.botanic').hide();
    $(this).children('.botanic').show();
  });

  // Hover for images
  $('.pic').hover(
    function (evt) {
      let imgName = $(this).attr('title');
      let imgID = '#' + imgName;

      let x = evt.pageX + 150;
      let y = evt.pageY;

      $(imgID).css({
        left: x,
        top: y
      }).show();
    },
    function () {
      let imgName = $(this).attr('title');
      let imgID = '#' + imgName;

      $(imgID).hide();
    }
  );

  // Keypress navigation
  $(document).keypress(function (evt) {
    let key = String.fromCharCode(evt.which).toLowerCase();
    window.location = "#" + key;
  });

});