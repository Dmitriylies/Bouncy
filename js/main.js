//меню-------------------------/
$(document).ready(function() {
  $('.fullscreen__link').click(function(e){
    //e.preventDefault();

    $('.fullscreen__link').removeClass('fullscreen__link--active')
    $(this).addClass('fullscreen__link--active')
  });
});
//меню-------------------------/

//плашка меню------------------/
(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('header__active');
    } else {
      header.classList.remove('header__active');
    }
  };
}());
//плашка меню------------------/

//Бургер-----------------------/
$(document).ready(function() {
   $('.header__burger').click(function(event) {
   $('.header__burger,.fullscreen__menu,.fullscreen__info,.fullscreen__arrow').toggleClass('active');
    $('body').toggleClass('lock');
});
});  
$(document).ready(function() {
  $('.fullscreen__link').click(function(event) {
  $('.header__burger,.fullscreen__menu,.fullscreen__info,.fullscreen__arrow').toggleClass('active');
  $('body').toggleClass('lock');
});
}); 
//Бургер-----------------------/

//Табы-details-----------------/
$(document).ready(function() {
  $('.details__link').click(function(e){
    e.preventDefault();

    $('.details__link').removeClass('services__icon--active')
    $('.details__tab').removeClass('details__tab--active')
    $(this).addClass('services__icon--active')
    $($(this).attr('href')).addClass('details__tab--active')
  });
});
//Табы-details-----------------/

//Табы-------------------------/
$(document).ready(function() {
  $('.services__icon').click(function(e){
    e.preventDefault();

    $('.services__icon').removeClass('services__icon--active')
    $('.services__tab').removeClass('services__tab--active')
    $(this).addClass('services__icon--active')
    $($(this).attr('href')).addClass('services__tab--active')
  });
});
//Табы-------------------------/

// slider----------------------/ 
$(document).ready(function() {
    $('.slider' ).slick({
      arrows: false,
      dots: true,
    });
    $('.slider-2' ).slick({
      arrows: false,
      dots: true,
    });
    $('.slider-3' ).slick({
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
    });
});       
 // slider------------------------------/ 


 var swiper = new Swiper('.slider-3', {
  direction: 'vertical',
  pagination: {
    // el: '.swiper-pagination',
    clickable: true,
  },
});

 //Катрочки с ценами--------------------/
$( document ).ready(function(){
    $( ".price__card-body" ).hover(function(){ // задаем функцию при наведении курсора на элемент и при его отведении	
      $( this ).toggleClass( "active" ) // добавляем, или убираем класс у текущего элемента div
    });
  });
 //Катрочки с ценами--------------------/

//меню----------------------------------/
$(document).ready(function() {
  $('.portfolio__link').click(function(e){
    e.preventDefault();

    $('.portfolio__link').removeClass('portfolio__link--active')
    $(this).addClass('portfolio__link--active')
  });
});
//меню----------------------------------/

//Карта---------------------------------/
  function initMap() {
	let opt = {
		center: {lat: 51.513416, lng: -0.129761},
		zoom: 4,
    }
    let map = new google.maps.Map(document.getElementById('map'), opt);
  }
//Карта---------------------------------/
  
//Скролл--------------------------------/
(function () {
	const smoothScroll = function (targetEl, duration) {
		 const headerElHeight =  document.querySelector('.header').clientHeight;
		 let target = document.querySelector(targetEl);
		 let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		 let startPosition = window.pageYOffset;
		 let startTime = null;
			 const ease = function(t,b,c,d) {
			  t /= d / 2;
			  if (t < 1) return c / 2 * t * t + b;
			  t--;
			  return -c / 2 * (t * (t - 2) - 1) + b;
		 };
			 const animation = function(currentTime){
			  if (startTime === null) startTime = currentTime;
			  const timeElapsed = currentTime - startTime;
			  const run = ease(timeElapsed, startPosition, targetPosition, duration);
			  window.scrollTo(0,run);
			  if (timeElapsed < duration) requestAnimationFrame(animation);
		 };
		 requestAnimationFrame(animation);
	};
	const scrollTo = function () {
		 const links = document.querySelectorAll('.js-scroll');
		 links.forEach(each => {
			  each.addEventListener('click', function () {
					const currentTarget = this.getAttribute('href');
					smoothScroll(currentTarget, 1000);
			  });
		 });
	};
	scrollTo();
}());
//Скролл--------------------------------/

// $(document).ready(function() {
//   let position = 0;
//   const slidesToShow = 1;
//   const slidesToScroll = 1;
//   const container = $('.slider-3-container');
//   const track = $('.slider-3-track');
//   const btnPrev = $('.btn-prev');
//   const btnNext = $('.btn-next');
//   const item = $('.slider-3__item');
//   const itemsCount = item.length;
//   const itemHeight = container.height() / slidesToShow;
//   const movePosition = slidesToScroll * itemHeight;


//   item.each(function (index, item){
//     $(item).css({
//       minHeight: itemHeight,
//     });
//   });

//   btnPrev.click(function(){
//     const itemsLeft = Math.abs(position) / itemHeight;

//     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemHeight;

//     setPosition();
//     checkBtns();
//   });
//   btnNext.click(function(){
//     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemHeight) / itemHeight;
    
//     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemHeight;
    

//     setPosition();
//     checkBtns();
//   });

//   const setPosition = () => {
//     track.css({
//       transform: `translateY(${position}px)`
//     });
//   };

//   const checkBtns = () => {
//     btnPrev.prop('disabled', position === 0);
//     btnNext.prop('disabled',
//                     position <= -(itemsCount - slidesToShow) * itemHeight
//       );
//   };

//   checkBtns();
// });




















