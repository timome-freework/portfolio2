$(function() {
  // ハンバーガートグルはココから
  $('#q7-btn').on('click', function() {
    // console.log("こんにちは");
    $(this).toggleClass('on');
    $('.header-right').toggleClass('hide');
  });
  // ハンバーガートグルはココで終わり
  // スライドはココから⇩⇩
  // 12
  $('#q7-btn').on('click', function() {
    
  });
  // スライドはココまで⇑⇑
  // -----------------------------------------Webから始まる------------------------------
    $('#like').on('click', function() {
      $('#hoge').fadeOut(500,function(){
        $('.header-main-p').text('programmingから広がる');
        $('.header-main-p').css('color', 'pink');
        $('.header-main-p2').text('未知なる世界へ');
        $('.header-main-p2').css('color', 'pink');
        $('#hoge').show(500);
      });
      

      // $('.header-main-p2').css('color', 'pink');
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