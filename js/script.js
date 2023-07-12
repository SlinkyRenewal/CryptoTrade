var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  window.onscroll = function() { showScrollButton() };

  function showScrollButton() {
    var scrollButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  function send(){
    let name = document.querySelector('#InputName').value;
    let email = document.querySelector('#InputEmail').value;
    let telegram = document.querySelector('#InputTelegram').value;
    $.ajax({
        type: "POST",
        url: "submit.php",
        data: {
            'name': name,
            'email': email,
            'telegram':telegram
        }
    })
    .done(function(){
      $(this).find('input').val('');
      $('#feedbackForm').trigger('reset');
    });
  }
