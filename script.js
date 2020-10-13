$( document ).ready(function() {

  var words = ["img/baglåge1.png", "img/baglåge2.png", "img/baglåge3.png", "img/baglåge4.jpg", "img/baglåge5.png", "img/baglåge6.png", "img/baglåge7.jpg", "img/baglåge8.png", "img/baglåge9.jpg", "img/baglåge10.png", "img/baglåge11.jpeg", "img/baglåge12.png", "img/baglåge13.jpeg", "img/baglåge14.png", "img/baglåge15.jpg", "img/baglåge16.jpg", "img/baglåge17.png", "img/baglåge18.png", "img/baglåge19.jpg", "img/baglåge20.jpg", "img/baglåge20.png", "img/baglåge22.jpg", "img/baglåge23.png", "img/baglåge24.png"];

  var message = "";
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var scrolled = false;
  var timeDelay = 200;

  // function to reveal message
  var cardReveal = function() {
    $("#message").text(message).show();
  }  

  //day=24; // uncomment to skip to 24

  // Only work in December
  if(month === 10) {
    // Loop through each calendar window
    $("li").each( function( index ) {
      var adventwindow = index + 1;
      var item = $(this);

      // Open past windows
      if( day !== adventwindow && adventwindow < day ) {
        window.setTimeout(function(){
          item.children(".door").addClass("open");
        }, timeDelay);
      }

      // timeout offset for past window opening animation
      timeDelay += 100;

      // Add words so far to message variable
      if( adventwindow <= day ) {
        var word = words[index];
        $(this).append('<div class="revealed">' + `<img class="baglaage${index}" src="">` + '</div>');
        message = message + " " + word;
        document.querySelector('.baglaage'+index).setAttribute('src', word);
      }

      // Add jiggle animation to current day window
      if(adventwindow === day) {
        $(this).addClass("current");
        $(this).addClass("jiggle");
      }

      // On clicking a window, toggle it open/closed and
      // handle other things such as removing jiggle and 25th
      $(this).on("click", function() {
        if(adventwindow <= day) { 
          $(this).children(".door").toggleClass("open");
        }

        $(this).removeClass("jiggle");

        // If 24th, can show the message
        if(day >= 24 && adventwindow === 24) {
          messageReveal();

          // Animate scroll to message if not already done
          if(!scrolled) {
            $('html, body').animate({
              scrollTop: $("#message").offset().top
            }, 2000);
            scrolled = true;
          }
        }
      });

    });

    // If beyond 24, show message
    if(day >= 25){
      messageReveal();
    }

  }

});
