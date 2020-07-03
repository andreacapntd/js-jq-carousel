// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :slightly_smiling_face:
// Lo slider prevederà due frecce (icone) che permettono di mostrare le immagini, arrivati all’ultima o prima immagine dobbiamo ripartire dal lato opposto. :wink:
// In oltre per scorrere le immagini utilizziamo anche le frecce sinistra e destra della tastiera.


$(document).ready(function (){
  var imgNext = $(".next");
  var imgPrev = $(".prev");

  imgNext.click(function () {
    next();
  });

  imgPrev.click(function () {
    prev();
  });

  $(document).keydown(function() {
    var key = event.which;
    if (key == 39) {
      next();
    } else if (key == 37) {
      prev();
    }
});

});
//-------------------Functions-----------------------

function next(){
  var imgActive = $(".slider-wrapper img.active");
  imgActive.removeClass("active");
  var iActive = $(".slider-wrapper i.active");
  iActive.removeClass("active");
  if (imgActive.hasClass("last")) {
    $(".slider-wrapper img.first").addClass("active");
    $(".slider-wrapper i.first").addClass("active");
  } else {
    imgActive.next().addClass("active");
    iActive.next().addClass("active");
  }
}

function prev(){
  var imgActive = $(".slider-wrapper img.active");
  imgActive.removeClass("active");
  var iActive = $(".slider-wrapper i.active");
  iActive.removeClass("active");
  if (imgActive.hasClass("first")) {
    $(".slider-wrapper img.last").addClass("active");
    $(".slider-wrapper i.last").addClass("active");
  } else {
    imgActive.prev().addClass("active");
    iActive.prev().addClass("active");
  }
}
