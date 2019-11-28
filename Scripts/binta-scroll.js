////------------------------------------------------------------------GLOBAL VARS

var w = window.innerWidth;
var wt = $('#entrySection').offset().top;


//------------------------------------------------------------------FUNCTIONS


// function calcHeight() {

// $("#entrySection").innerHeight(entryHeight);
// $("#entryCompCon").innerHeight(entryHeight);

// // alert("YUP.");

// }

//------------------------------------------------------------------RESIZE

if (wt == 0 ){
 	$("#scrollButtonCon").addClass("bounce1");
 	$("#scrollDiamWrapper").addClass("bounce1");
	 }else{
	 	$("#scrollButtonCon").removeClass("bounce1");
	 	$("#scrollDiamWrapper").removeClass("bounce1");
	 }

$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = ($(window).scrollTop());
   if (stop == wt){
 	$("#scrollButtonCon").addClass("bounce1");
 	$("#scrollDiamWrapper").addClass("bounce1");
	 }else{
	 	$("#scrollButtonCon").removeClass("bounce1");
	 	$("#scrollDiamWrapper").removeClass("bounce1");
	 }

});



//------------------------------------------------------------------CURSOR

$("#entryHoverRead1").mousemove(function(e){

	var movingEl1 = $('.llama'); //element
	var movingEl2 = $('#entryTrio'); //element

	var x = e.offsetX-400; //sensitivity

	var el1Pos = movingEl1.position();
	var el1CoordX = el1Pos.left;

	var el2Pos = movingEl2.position();
	var el2CoordX = el2Pos.left;

	var el1XMove = x/200;
    var el2XMove = x/200;

    // var coor = "xCoordinate: (" + x + ")";
    // coordRead.innerHTML = coor;

    if (x <= el1CoordX  ){
   		 TweenMax.to((movingEl1), 2, {x:-el1XMove, ease: Power2.easeOut});
 	  }
 	  if (x >= el1CoordX){
 	  	TweenMax.to((movingEl1), 2, {x:-el1XMove, ease: Power2.easeOut});
 	  }

 	  if (x <= el2CoordX  ){
   		 TweenMax.to((movingEl2), 1, {x:el2XMove, ease: Power2.easeOut});
 	  }
 	  if (x >= el2CoordX){
 	  	TweenMax.to((movingEl2), 1, {x:el2XMove, ease: Power2.easeOut});
 	  }
});


$("#entryHoverRead2").mousemove(function(e){

	var movingEl1 = $('.catEye'); //element
	// var movingEl2 = $('#entryTrio'); //element

	var x = e.offsetX-400; //sensitivity
	var y = e.offsetY-400; //sensitivity

	var el1Pos = movingEl1.position();
	var el1CoordX = el1Pos.left;
	var el1CoordY = el1Pos.top;

	// var el2Pos = movingEl2.position();
	// var el2CoordX = el2Pos.left;

	var el1XMove = x/20;
	var el1YMove = y/20;
    // var el2XMove = x/200;



    if (x <= el1CoordX  ){
   		 TweenMax.to((movingEl1), 2, {x:el1XMove, ease: Power2.easeOut});
 	  }
 	  if (x >= el1CoordX){
 	  	TweenMax.to((movingEl1), 2, {x:el1XMove, ease: Power2.easeOut});
 	  }

 	  if (y <= el1CoordY  ){
   		 TweenMax.to((movingEl1), 2, {y:el1YMove, ease: Power2.easeOut});
 	  }
 	  if (y >= el1CoordY){
 	  	TweenMax.to((movingEl1), 2, {y:el1YMove, ease: Power2.easeOut});
 	  }



});


//------------------------------------------------------------------LAX

//--------------TLs

var scrollButtonAnim = new TimelineMax();

scrollButtonAnim
	.to(("#scrollText"), 0.1, {opacity:0, ease: Power0.easeNone})
	.to(("#scrollDiamWrapper"), 2, {y:-7, ease: Power0.easeNone}, "-=0.1")
	.to(("#scrollButtonCon"), 2, {height: 0, y:-50, ease: Power0.easeNone}, "-=2.0")
	.to(("#scrollButtonCon"), 6, {rotation:720, y:-400, opacity:0, ease: Power0.easeNone})
	;

var titleSlide = new TimelineMax();

titleSlide
	.to(("#entryTitle"), 2, {xPercent:-54, opacity:0, opacity:0, ease: Power0.easeNone})
	.to(("#buyButton"), 2, {x:-200, opacity:0, opacity:0, ease: Power0.easeNone}, "-=1.9")
	.to(("#listenButton"), 2, {x:-200, opacity:0, opacity:0, ease: Power0.easeNone}, "-=1.6")
	;

var llamaSlide = new TimelineMax();

llamaSlide
	.to((".llama"), 5, {y:60, ease: Power0.easeNone})
	;

var bushAnim = new TimelineMax();

	bushAnim
		.staggerTo((".magicBush"), 5, {cycle:{rotation:[25, -25]}, yoyo:true, repeat:8, ease: Power0.easeNone});
		;



$(document).ready(function(){

	var controller = new ScrollMagic.Controller();


	//---------------------------------------entry

	//-------pagePin

	 if (w >= 769  ){
	 	var entryPausePin = new ScrollMagic.Scene({
			triggerElement:'#entrySection',
			duration: '40%',
			triggerHook:0
		})
		.setPin('#entrySection')
		// .addIndicators()
		.addTo(controller);
	 }


	// var entryPausePin = new ScrollMagic.Scene({
	// 	triggerElement:'#entrySection',
	// 	duration: '5%',
	// 	triggerHook:0
	// })
	// .setPin('#giantWrapper')
	// // .addIndicators()
	// .addTo(controller);

	//-------ScrollButton
	var scrollButtonRotate = new ScrollMagic.Scene({
		triggerElement:'#entrySection',
		duration: '35%',
		triggerHook:0
	})
	.setTween(scrollButtonAnim)
	// .addIndicators()
	.addTo(controller);

	//-------ScrollButton
	var scrollButtonRotate = new ScrollMagic.Scene({
		triggerElement:'#entrySection',
		duration: '80%',
		triggerHook:0
	})
	.setTween(titleSlide)
	// .addIndicators()
	.addTo(controller);

	//-------llamas
	var goldLlama = new ScrollMagic.Scene({
		triggerElement:'#entrySection',
		duration: '100%',
		triggerHook:0
	})
	.setTween(llamaSlide)
	// .addIndicators()
	.addTo(controller);

	//-------pencilHolder
	var pencilHolder = new ScrollMagic.Scene({
		triggerElement:'#funSection',
		duration: '200%',
		triggerHook:1
	})
	.setTween(TweenMax.to(("#pencilHolder"), 5, {y:200, ease: Power0.easeNone}))
	// .addIndicators()
	.addTo(controller);

	//-------pencils
	var lastScrollTop = 0;
	$(window).scroll(function(){
		var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	        TweenMax.staggerTo((".pencil"), 10, {y:15, ease: CustomEase.create("custom", "M0,0 C0.012,0.49 0.11,0.69 0.268,0.838 0.46,1.018 0.818,1 1,1")}, 0.06);
	   } else {
	     TweenMax.staggerTo((".pencil"), 10, {y:-15, ease: CustomEase.create("custom", "M0,0 C0.012,0.49 0.11,0.69 0.268,0.838 0.46,1.018 0.818,1 1,1")}, 0.06);
	   }
	   lastScrollTop = st;
	});

	//-------bigMagic
	var bigMagic = new ScrollMagic.Scene({
		triggerElement:'#funSection',
		duration: '200%',
		triggerHook:1
	})
	.setTween(TweenMax.to(("#giantMagic"), 5, {y:-100, ease: Power0.easeNone}))
	// .addIndicators()
	.addTo(controller);

	//-------TextMoveTop
	var bigMagic = new ScrollMagic.Scene({
		triggerElement:'#funSection',
		duration: '120%',
		triggerHook:1
	})
	.setTween(TweenMax.to(("#lookDontTextTop"), 5, {x:-1500, ease: Power0.easeNone}))
	// .addIndicators()
	.addTo(controller);

	//-------TextMoveBottom
	var bigMagic = new ScrollMagic.Scene({
		triggerElement:'#bushCon',
		duration: '120%',
		triggerHook:1
	})
	.setTween(TweenMax.to(("#lookDontTextBottom"), 5, {x:-1500, ease: Power0.easeNone}))
	// .addIndicators()
	.addTo(controller);


	//-------bushes
	var bigMagic = new ScrollMagic.Scene({
		triggerElement:'#bushCon',
		duration: '212%',
		triggerHook:1
	})
	.setTween(bushAnim)
	// .addIndicators()
	.addTo(controller);








});


//------------------------------------------------------------------INTRO


var intro01 = new TimelineMax();
var myEase1 = Power2.easeOut;
var myEase2 = Power4.easeOut;
var customEase1 = CustomEase.create("custom", "M0,0 C0.012,0.49 0.11,0.69 0.268,0.838 0.46,1.018 0.818,1 1,1")
var dur = 1.25;

intro01.pause();


intro01
	.to(("#loadingContainer"), 2, {opacity:0, display:"none", ease: myEase2}, "+=3.0")
	.from(("#entryBG"), 0.33, {opacity:0, ease: myEase2}, "-=3.0")
	// .from((".llama"), 3.0, {opacity:0, ease: myEase2}, "-=2")
	.from(("#entryTrio"), 2.0, {scale:0.98, y:5, opacity:0.5, ease: myEase2}, "-=1.9")
	.from(("#goldLlama"), 3.0, {x:-50, ease: myEase2}, "-=3.0")
	.from(("#brownLlama"), 3.0, {x:50, ease: myEase2}, "-=3.0")
	;


//------------------------------------------------------------------DOC-READY

window.onload = function () {

// $("#loadingContainer").delay(1000).fadeOut(1000);
intro01.play();

}



// (function ($) {
//     $.fn.bintaScroll = function (opt) {
//         if (!opt)
//             return $.fn.bintaScroll.registry[this];
//
//         $.fn.bintaScroll.registry[this] = $.fn.bintaScroll;
//         $.fn.bintaScroll.settings = $.extend($.fn.bintaScroll.defaults, opt);
//         $.fn.bintaScroll.settings.container = this.target;
//         $($.fn.bintaScroll.settings.sectionEl).each((i, e) => { $(e).attr("data-start-width", $(e).width()); });
//
//         $(this.target).scroll(function(){
//             $.fn.bintaScroll.scaleOff();
//         });
//
//         if ($.fn.bintaScroll.settings.horizontal) {
//             this.each((i, e) => {
//                 if (e.addEventListener) {
//                     // IE9, Chrome, Safari, Opera
//                     e.addEventListener("mousewheel", $.fn.bintaScroll.scrollHorizontally, false);
//                     // Firefox
//                     e.addEventListener("DOMMouseScroll", $.fn.bintaScroll.scrollHorizontally, false);
//                     e.addEventListener("touchmove", $.fn.bintaScroll.scrollHorizontally, false);
//                 } else {
//                     // IE 6/7/8
//                     e.attachEvent("onmousewheel", $.fn.bintaScroll.scrollHorizontally);
//                 }
//             });
//         }
//         return this;
//     };
//     $.fn.bintaScroll.defaults = {
//         container: "body"
//         , horizontal: false
//         , sectionEl: ".binta-section"
//         , scaleOffEl: ".binta-section.scale-off"
//     };
//     $.fn.bintaScroll.registry = {};
//     $.fn.bintaScroll.settings = {
//         container: "body"
//         , horizontal: false
//         , sectionEl: ".binta-section"
//         , scaleOffEl: ".binta-section.scale-off"
//     };
//     $.fn.bintaScroll.scrollHorizontally = function (e) {
//         e = window.event || e;
//         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//         if(delta < 0)
//             $(e.currentTarget)[0].scrollBy({top:0,left:50,behavior:'smooth'});
//         else
//             $(e.currentTarget)[0].scrollBy({top:0,left:-50,behavior:'smooth'});
//
//         e.preventDefault();
//     };
//     $.fn.bintaScroll.scaleOff = function () {
//         $($.fn.bintaScroll.settings.scaleOffEl).each((i, e) => {
//             var $e = $(e);
//             if (!$e.data('anchor'))
//                 return;
//             var anchor = $($e.data('anchor')).position().left;
//             var startWidth = $e.data("start-width");
//             if (anchor < 0) {
//                 var scale = Math.max(0, 1 - (Math.abs(anchor) / startWidth));
//                 $($e.data('anchor')).width(Math.abs(anchor) / 2);
//                 $e.css("transform", "scaleX(" + scale + ")")
//                     .css("margin-right", -1 * Math.min(Math.abs(anchor), startWidth) / 2 + "px");
//             }
//             else {
//                 $e.css("transform", "scaleX(1)")
//                     .css("margin-right", 0);
//                 $($e.data('anchor')).width(0);
//             }
//         });
//     }
// }(jQuery));
