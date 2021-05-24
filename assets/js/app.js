$(function() {
  // -----------------------------------------Webから始まる------------------------------
    $('#q4-btn').on('click', function() {
      $('.header-main-p').text('programmingから広がる');
      $('.header-main-a').css('color', 'pink');
    });
    $('#q4-btn1').on('click', function() {
      $('.header-main-p2').text('未知なる世界へ');
    });
  // -------------------------------------------------section2------------------------------------
  $(window).on('scroll', function() {

    let header = $('#header').height();
    let q11 = $('#section2').offset().top;
    let scrollTop = $(window).scrollTop();
    
  
    if (q11 < (header + scrollTop)) {
      $('.header1').css('background-color', '#eaecf0c4');
    } 
    else {
      $('#header').css('background-color', 'transparent');
    }
  });

 


  // ---------------------------------------------portfolio lightbox----------------------------
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  // -----------------------------------------------section4 swiper----------------------------
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // トップへ戻る
  $('#q9-btn').on('click', function() {
    $('body, html').animate({scrollTop: 0}, 500);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});