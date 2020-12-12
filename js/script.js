$(".btn-categoria").click(function() {
   if($(this).html()==="CATEGORIA<span>+</span>"){
     $(this).html("CATEGORIA<span>-</span>");
   }
   else 
     $(this).html("CATEGORIA<span>+</span>");
 });;
const dropdown = document.getElementsByClassName("dropdown-btn");

for (let i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "flex") {
         dropdownContent.style.display = "none";
      } else {
         dropdownContent.style.display = "flex";
      }
   });
};
function burgerMenu(selector) {
   let menu = $(selector);
   // @ts-ignore
   let button = menu.find('.burger-menu-button', '.burger-menu-lines');
   let links = menu.find('.burger-menu-link');
   let overlay = menu.find('.burger-menu-overlay');

   button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
   });


   overlay.on('click', () => toggleMenu());

   function toggleMenu() {
      menu.toggleClass('burger-menu-active');

      if (menu.hasClass('burger-menu-active')) {
         $('body').css('overlow', 'hidden');
      } else {
         $('body').css('overlow', 'visible');
      }
   }
}

burgerMenu('.burger-menu');;
$(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      adaptiveHeight: true,
   })
   $('.slider-banner').slick({
      arrows: false,
      dots: false,
      autoplay: true,
      slidesToShow: 1,
      adaptiveHeight: true,
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 960,
            settings: {
               dots: true,
            }
         },
      ]
   })
   $('.slider-overflow').slick({
      centerMode: true,
      centerPadding: '85px',
      slidesToShow: 1,
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 480,
            settings: {
               arrows: true,
               centerMode: true,
               centerPadding: '85px',
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: true,
               centerMode: true,
               centerPadding: '45px',
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 960,
            settings: {
               arrows: true,
               centerMode: false,
               slidesToShow: 6,
            }
         },
         {
            breakpoint: 1600,
            settings: {
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 10,
            }
         }
      ]
   })
   $('.slider-instagram').slick({
      centerPadding: '85px',
      slidesToShow: 1,
      centerMode: true,
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 480,
            settings: {
               centerMode: true,
               centerPadding: '85px',
               slidesToShow: 3
            }
         },
         {
            breakpoint: 540,
            settings: {
               centerPadding: '85px',
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               centerMode: false,
               centerPadding: '85px',
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 960,
            settings: {
               centerPadding: '85px',
               slidesToShow: 5,
               centerMode: false,
            }
         }
      ]
   })
   $('.slider-galery').slick({
      centerPadding: '85px',
      slidesToShow: 1,
      centerMode: true,
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 480,
            settings: {
               centerMode: true,
               centerPadding: '85px',
               slidesToShow: 1
            }
         },
         {
            breakpoint: 540,
            settings: {
               centerMode: true,
               centerPadding: '85px',
               slidesToShow: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               centerMode: false,
               centerPadding: '85px',
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 960,
            settings: {
               centerPadding: '85px',
               slidesToShow: 4,
               centerMode: false,
            }
         }
      ]
   })

});
