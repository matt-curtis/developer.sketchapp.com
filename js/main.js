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
$(document).ready(function() {
  $(".toc-nav .nav-toggle").click(function(){
    if (window.innerWidth > 767) { return }
    $(this).toggleClass("active");
    $(".toc-nav ol").toggle();
  });
});

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
