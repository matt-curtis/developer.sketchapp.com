// Main navigation logic
$(".main-nav .nav-toggle").click(function(){
  $(this).toggleClass("active");
  $(".main-nav ul").toggleClass("active");

  if ($('body').attr('style')) {
      $('body').removeAttr('style');
    } else {
      $('body').attr("style","overflow:hidden;"); //Avoids scrolling of the underlying content TODO fix on Safari Mobile
    }

  $(".overlay").toggleClass("active");
});

// TOC navigation logic
$(".toc-nav .nav-toggle").click(function(){
  if (window.innerWidth > 767) { return }
  $(this).toggleClass("active");
  $(".toc-nav ol").toggle();
});

// Overlay logic (dismiss everything when you click it)
$(".overlay").click(function(){
  $(".main-nav .nav-toggle").toggleClass("active");
  $(".main-nav ul").toggleClass("active");
  $('body').removeAttr('style');
  $(".overlay").toggleClass("active");
});

// Window resize changes needed
$(window).resize(function(){
  if(window.innerWidth > 767) {
    $(".main-nav ul").removeClass("active");
    $(".nav-toggle").removeClass("active");
    $("body").removeAttr("style");
    $(".overlay").removeClass("active");
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

// Search logic
$(document).ready(function(){
  var documentCollection,
      lunrIndex = lunr(function () {
        this.field('title', {boost: 10})
        this.field('body')
        this.field('url')
        this.ref('id')
      }),
      url = '/js/lunr.json'

  $.ajax({
    url: url,
    crossDomain: true,
    success: function(data,status,xhr){
      documentCollection = data
      $.each(data,function(index, value){
        lunrIndex.add(value)
      })
      search_enable()
    },
    error: function(xhr, type){
      console.log("Error type: " + type)
      console.log(xhr)
    }
  })

  function search_enable() {
    $('.search_form').show()
    $('.search_form #search_field').on('keyup', function(){
      var searchTerm = $(this).val()
      if (searchTerm.length > 3) {
        search(searchTerm)
      }
    })
  }
  function search(text){
    var results = lunrIndex.search(text),
        htmlOutput = "<ul>"
    $.each(results, function(index, result){
      var searchResult = documentCollection[result.ref - 1] // Because Lunr results are 0-based, and Jekyll collections are 1-based
      htmlOutput += "<li><a href='" + searchResult.url + "'>" + searchResult.title + "</a></li>"
    })
    htmlOutput += "</ul>"
    $('.search_results').html(htmlOutput)
  }
})
