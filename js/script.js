// ハンバーガーメニュー
$(function() {
  $('.l-header__hamburger').on('click', function(){
    hamburger();
  }); 
  function hamburger() {  
    $('.l-header__hamburger').toggleClass('active');    
    if ($('.l-header__hamburger').hasClass('active')) {  //l-header__hamburgerクラスにactiveクラスが存在する場合
      $('.l-header__spNav').addClass('active');  //l-header__spNavにもactiveクラスを追加する
    } else {  // l-header__hamburgerクラスにactiveクラスが存在しない場合
      $('.l-header__spNav').removeClass('active');//l-header__spNavからactiveクラスを削除する
    }

    if ($('.l-header__hamburger').hasClass('active')) {
      $('.l-header__spNav-mask').addClass('open');
    } else {
      $('.l-header__spNav-mask').removeClass('open');
    }
    $('.p-spNav__link').on('click', function() {
      $('.l-header__hamburger').removeClass('active');
      $('.l-header__spNav').removeClass('active');
      $('.l-header__spNav-mask').removeClass('open');
    });
    $('#l-header__spNav-mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('.l-header__hamburger').removeClass('active');
      $('.l-header__spNav').removeClass('active');
      $('.l-header__spNav-mask').removeClass('open');
    });
  }

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");  //出発地点取得
    var target= $(href == "#" || href == "" ? 'html' : href);  //到着地点取得
    var position = target.offset().top;  //到着地点をtopからの数値で取得
    $("html,body").animate({scrollTop:position}, 600, "swing");
  });

  //ヘッダー
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".l-header__inner").addClass("is-active");
    } else {
      $(".l-header__inner").removeClass("is-active");
    }
  });
});
