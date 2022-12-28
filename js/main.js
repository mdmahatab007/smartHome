(function($){
    'use strict';
// code start

/*=-=-=-=-=-=-=-=-
    mobileMenu
=-=-=-=-=-=-=-=-= */
$('.mobileIcon i').on('click',function(){
    $('.mobileMenu').slideToggle();
});
$('.mobileMenu i').on('click',function(){
    $('.mobileMenu').slideToggle();
})
$(window).scroll(function(){
    $('.mobileMenu').fadeOut();
});
$(window).resize(function(){
	var screenSize = $(window).width();

	if (screenSize > 1200 ) {
		$('.mobileMenu').fadeOut();
	}
});


/*=-=-=-=-=-=-=-=-
    logInPage
=-=-=-=-=-=-=-=-= */

$('#userName').on('click',function(){
  $('#usrLabel').animate({
    top:'-8%'
  });
});

$('#userPass').on('click',function(){
  $('#passLabel').animate({
    top:'-8%'
  });
});

$('.logInPageItems > i').on('click',function(){
  $('#logInPage').fadeOut();
});






}) (jQuery);


/*=-=-=-=-=-=-=-=-
    preLoader
=-=-=-=-=-=-=-=-= */
  var time = 5;
  setInterval( function() {
  var loader = document.getElementById('preLoader');
  var content = document.getElementById('smartHomeContent');
   time -= 1;
  if(time<0){
    loader.style.display = 'none';
    content.style.opacity = 1;
     return;
   }
}, 1000); 

/*=-=-=-=-=-=-=-=-
    logInPage
=-=-=-=-=-=-=-=-= */
  var logPage = 30;
  setInterval( function() {
    logPage--;
    var logInPage = document.getElementById('logInPage');
    if( logPage <= 0 && logPage >= -3 ){
      logInPage.style.display = 'block';
      return
    }
  }, 1000);

/*=-=-=-=-=-=-=-=-
    wow js
=-=-=-=-=-=-=-=-= */
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();



