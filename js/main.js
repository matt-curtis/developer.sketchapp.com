//Transitions Only After Page Load
$(document).ready(function() {
  $("body").removeClass("preload");
});

// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.

function isRetina() {
  var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
            (min--moz-device-pixel-ratio: 1.5),\
            (-o-min-device-pixel-ratio: 3/2),\
            (min-resolution: 1.5dppx)";

  if (window.devicePixelRatio > 1)
    return true;

  if (window.matchMedia && window.matchMedia(mediaQuery).matches)
    return true;

  return false;
};


function retina() {

  if (!isRetina())
    return;

  $("img.2x").map(function(i, image) {
    var path = $(image).attr("src");
    path = path.replace(".png", "@2x.png");
    path = path.replace(".jpg", "@2x.jpg");
    $(image).attr("src", path);
  });
};

$(document).ready(retina);

Shadowbox.init({
  overlayOpacity: .95,
  overlayColor: "#061524"
});

$(".main-nav .nav-toggle").click(function(){
  $(this).toggleClass("active");
  $(".main-nav ul").toggleClass("active");

  if ($('body').attr('style')) {
        $('body').removeAttr('style');
    } else {
        $('body').attr("style","overflow:hidden;");
    }

  $(".nav-overlay").toggleClass("active");
});

$(".nav-overlay").click(function(){
  $(".main-nav .nav-toggle").toggleClass("active");
  $(".main-nav ul").toggleClass("active");
  $('body').removeAttr('style');
  $(".nav-overlay").toggleClass("active");
});

//TODO make this work
// $(document).ready(function() {
//   if(window.innerWidth < 767) {
    $(".toc-nav .nav-toggle").click(function(){
      $(this).toggleClass("active");
      $(".toc-nav ol").toggle();
    });
//   }
// });

$(window).resize(function(){
  if(window.innerWidth > 767) {
    $(".main-nav ul").removeClass("active");
    $(".nav-toggle").removeClass("active");
    $("body").removeAttr("style");
    $(".nav-overlay").removeClass("active");
    $(".toc-nav ol").removeAttr("style");
  }

  //TODO make this work
  // if(window.innerWidth < 767) {
  //   $(".toc-nav .nav-toggle").click(function(){
  //     $(this).toggleClass("active");
  //     $(".toc-nav ol").toggle();
  //   });
  // }
});
