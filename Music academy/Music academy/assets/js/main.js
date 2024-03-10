// first slider
$(document).ready(function(){
    
$('.picture').slick({
dots:true,
prevArrow:'<i class="fa-solid fa-chevron-left left_arrow"></i>',
nextArrow:'<i class="fa-solid fa-chevron-right right_arrow"></i>',
});

});
// second slider
$(document).ready(function(){
    $('.xeber-total').slick({
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<i class="fa-solid fa-caret-left left_arrow2"></i>',
        nextArrow:'<i class="fa-solid fa-caret-right right_arrow2"></i>',

    });
  });
// scroll button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        document.getElementById("scroll").style.display = "block";
    } else {
        document.getElementById("scroll").style.display = "none" ;
    }
}
