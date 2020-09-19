$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

var images=new Array('./imgs/Jamie.png','./imgs/Margo_quin_syncro.png');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.dive')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(60,function(){
        setTimeout(doSlideshow,10000);
    })
}
