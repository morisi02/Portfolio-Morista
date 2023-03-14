
/***NAVBAR STICKY */
$('.navbar').sticky();

$('.navbar').on('sticky-start', function(){
    $('.morista').hide('fast');
})

$('.navbar').on('sticky-end', function(){
    $('.morista').show('fast');
    $('#sticky-wrapper').css("height", "150px");
})


/****** NAV TELEFONO */

  $('.navLinee').click(function(){
    event.preventDefault();
    $('.showMenu').toggleClass('navZindex')
    $('.homee').toggleClass('showNav');
    $('.hrNav').toggleClass('showNav');
    overlayNav.show();
    $(this).toggleClass('navTelefonoAperto');
    $('#linea2').toggleClass('visibilityNav');
    $('#linea1').toggleClass('rotate1');
    $('#linea3').toggleClass('rotate2');
  })

  $('.navTelefonoAperto').click(function(){
    $(this).css("z-index", "0");
    
  })
  
var overlayNav= $("<div id='overlayNav'></div>");
$('body').append(overlayNav);


overlayNav.click(function(){
  overlayNav.hide();
  $('.homee').removeClass('showNav');
  $('.hrNav').removeClass('showNav');
  $('.navLinee').removeClass('navTelefonoAperto');
  $('.showMenu').removeClass('navZindex');
  $('#linea2').removeClass('visibilityNav');
  $('#linea1').removeClass('rotate1');
  $('#linea3').removeClass('rotate2');

})

/***** HR DOPO NAV */
let hr= document.getElementById("hr-scrolled");
let y= window.screen.height;

window.addEventListener('scroll', ()=>{
  let altezza= window.scrollY;
  
  if(screen.width>1000){
    hr.style.width= altezza / 100 * 3.6 + '%';
  }else if(screen.width>500){
    hr.style.width= altezza / 100 * 2.2 + '%';
  }else{
   hr.style.width= altezza / 100 * 2.1 + '%';
  }

});



////////*****************************
 //        FOTO OVERLAY*/

 $('.carousel-slick .certificato').click(function(){
  event.preventDefault();
  overlay.show('slow');
  overlay.css("visibility", "visible")
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
  overlay.css("visibility", "visible")
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


  