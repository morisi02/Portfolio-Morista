
/***NAVBAR STICKY */
$('.navbar').sticky();

$('.navbar').on('sticky-start', function(){
    $('.morista').hide('slow');
})

$('.navbar').on('sticky-end', function(){
    $('.morista').show('slow');
})




/****** NAV TELEFONO */

  $('.navLinee').click(function(){
    event.preventDefault();
    $('.homee').toggleClass('showNav');
    $('.hrNav').toggleClass('showNav');
    overlayNav.show();
    $('.showMenu').css("z-index","1000");
    
  })

  


var overlayNav= $("<div id='overlayNav'></div>");
$('body').append(overlayNav);

overlayNav.click(function(){
  overlayNav.hide();
  $('.homee').removeClass('showNav');
  $('.hrNav').removeClass('showNav');
  $('.showMenu').css("z-index","0");
})






////////*****************************
 //        FOTO OVERLAY*/

 $('.carousel-slick .certificato').click(function(){
  event.preventDefault();
  overlay.show('slow');
  var href= $(this).attr('src');
  
  img.show('slow').attr('src', href);
  //descrizione
  var testo= $(this).children().attr('alt');
  descrizione.text(testo).show();
 })
 
 var overlay= $("<div id='overlay'></div>");
 $('body').append(overlay);
 
 var img= $('<img />')
 $(overlay).append(img);

 overlay.click(function(){
  overlay.hide();
})


$('#works .immagineWork img').click(function(){
  event.preventDefault();
  overlay.show('slow');
  var href= $(this).attr('src');
  
  img.show('slow').attr('src', href);
  //descrizione
  var testo= $(this).children().attr('alt');
  descrizione.text(testo).show();
})

////*******CAROSELLO********************* */

$('.carousel-slick').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  /***BOTTINI WORK */
  $('#programmazione').css("background-color" , "#ff0000c1");

  $('#programmazione').click(function(){
    $('#workProject').show();
    $('#musicProject').hide('fast');
    $('#programmazione').css("background-color" , " #ff0000c1");
    $('#musicaShow').css("background-color" , "#c66a5cce");
    
  })

  $('#musicaShow').click(function(){
    $('#workProject').hide('fast');
    $('#musicProject').show('fast');
    $('#musicaShow').css("background-color" , " #ff0000c1");
    $('#programmazione').css("background-color" , "#c66a5cce");
  })


  