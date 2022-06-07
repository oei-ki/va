$(function(){
  $(window).scroll(function(){
    let sctop = $(this).scrollTop();
    console.log(sctop);
    if( sctop > 100 ){
      $("body #header").removeClass("header-padding")
      $("body #header").addClass("header-sticky")
      $(".logo img").attr('src','./img/logo-vac-nav-bk.png')
      $("body #header .nav-wrap .hamber span").css('background','black')
    }else if( sctop < 100 ){
      $("body #header").addClass("header-padding")
      $("body #header").removeClass("header-sticky")
      $(".logo img").attr('src','./img/logo-vac-nav.png')
      $("body #header .nav-wrap .hamber span").css('background','white')
    }
  });
});
