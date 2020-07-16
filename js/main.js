$(function(){
 $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
       autoplay : false,			// 자동 스크롤 사용 여부
        autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      responsive: [                   
                       {  breakpoint: 1200,    
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                              }
                         }, {  breakpoint: 1024,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                         },{  breakpoint:1000,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                           }
                ]
      
      
      });
    
    $('.tabSet').each(function(){
        var anchors = $(this).find('.tabs a');
        var panelDivs = $(this).find('.panel');
        var lastAnchor;
        var lastPanel;
        
        anchors.show();//
        lastAnchor = anchors.filter('.on');
        lastPanel = $(lastAnchor.attr('tab_href'));
        
        var lastImg = $(this).find('.tabs .on img'); //lastAnchor.find('img');
        var lastImgsrc = lastImg.attr('src');
        
        
        panelDivs.hide();
        lastPanel.show();
        
        anchors.click(function(){
          var currentAnchor = $(this);
          var currentPanel = $(currentAnchor.attr('tab_href'));
          var currentImg = $(this).find('img');
          var currentImgsrc =  currentImg.attr('src');
          var currentImgsrcOn = currentImgsrc.replace('off','on');
          var lastImgsrcOff = lastImgsrc.replace('on','off')  ;
            
           
           currentAnchor.addClass('on');
           lastAnchor.removeClass('on');
           lastAnchor =  currentAnchor;
           
           currentImg.attr('src',currentImgsrcOn);
           lastImg.attr('src',lastImgsrcOff);
           //현재를 과거로 기억시킴
           lastImg = currentImg;
           lastImgsrc = lastImg.attr('src');
 
           
            
           currentPanel.show();
           lastPanel.hide();   
           lastPanel = currentPanel;
        })
        
    })
    
    
     
    
    
    $('.bxslider').bxSlider({
            captions:true,
            //slideWidth:600,  //수정
            auto:true,
            autoControls:false,
            stopAutoOnclick:true,

          });

                 
  
//이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
   $("#prevBtn").on("click",function(){
    mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
    return false; //<a>에 링크를 차단합니다.
   });
//다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
   $("#nextBtn").on("click",function(){
    mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
    return false;
   }); 
    
    
    
    
    //네비
        $('.mainmenu li').each(function(){
            var sub = $(this).find('.submenu');
            
            $(this).hover(function(){
                sub.stop().slideDown();
            },function(){
                sub.stop().slideUp();
            })//hover
            //hover는 펑션이 두번 가능함
        })//nav li each
        
        /*$(window).scroll(function(){
            if($(document).scrollTop() >= 300) {
                $('header').css({background:'rgba(0,0,0,0.5)'});
            }else{
                $('header').css({background:'rgba(0,0,0,0)'});
            }
        })*/
      
    
    
     $(".open1").click(function(){
		$(".LeftWrap").animate({left:0},500,"swing")
		});
			
	$(".close1").click(function(){
		$(".LeftWrap").animate({left:'-100%'},500,"swing")
		});
		
	$('.mo_wmain > li').each(function() {
      var submenu = $(this).find('.mo_wsub');
      $(this).click(function(){
          $('.mo_wsub').slideUp();//선택한 하나만 열리고 나머지는 닫힐 수 있도록 
         $(submenu).stop().slideToggle();
       })
	})  
     
    
     $('.mo_main > li').each(function() {
      var submenu = $(this).find('.mo_sub');
      $(this).click(function(){
       $('.mo_sub').slideUp();
         $(submenu).stop().slideToggle();
       })
	})
    
    
    
  $(window).resize(function(){location.reload();        
   if ($(window).width() > 740) {
       
        /*$(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });*/
    }else{
        
     /*$(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });  */  
    }
 
})
      
    
    
    
                 
            })//jquery end
