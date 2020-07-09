                   

$(function(){
    
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
        
        $(window).scroll(function(){
            if($(document).scrollTop() >= 300) {
                $('header').css({background:'rgba(0,0,0,0.5)'});
            }else{
                $('header').css({background:'rgba(0,0,0,0)'});
            }
        })
          
                 
                })


