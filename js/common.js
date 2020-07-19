                   

$(function(){
    
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

              
              
      
       });
  
	})  
    
    
     
    
     $('.mo_main > li').each(function() {
      var submenu = $(this).find('.mo_sub');
      $(this).click(function(){
       $('.mo_sub').slideUp();
         $(submenu).stop().slideToggle();
       })
	})
    
       
    
  $(window).resize(function(){    window.location.reload();        
   if ($(window).width() > 740) {
      
  
    }else{
         

    }
 
})
                 
                })


