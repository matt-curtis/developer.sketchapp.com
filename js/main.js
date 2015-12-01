// Main navigation logic
$('.main-nav .nav-toggle').click(function(){
  $('body').addClass('stop-scrolling');
  $('.overlay').toggleClass('active');
  $(this).toggleClass('active');
  $('.main-nav ul').toggleClass('active');
});

// TOC navigation logic
$('.toc-nav .nav-toggle').click(function(){
  if (window.innerWidth > 767) { return }
  $(this).toggleClass('active');
  $('.toc-nav ol').toggle();
});

// Overlay logic (dismiss everything when you click it)
$('.overlay').click(function(){
  $('body').removeClass('stop-scrolling');
  $('.overlay').removeClass('active all');
  $('.main-nav .nav-toggle').removeClass('active');
  $('.main-nav ul').removeClass('active');
  $('.search-form').hide();
});

// Window resize changes needed
$(window).resize(function(){
  if(window.innerWidth > 767) {
    $('body').removeClass('stop-scrolling');
    $('.overlay[class="active"]').removeClass('active');
    $('.main-nav ul').removeClass('active');
    $('.toc-nav ol').removeAttr('style');
    $('.nav-toggle').removeClass('active');
  }
});
