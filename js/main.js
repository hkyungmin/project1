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
    
    
     var mySlider=$("#slide_banner").bxSlider({
      mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
      speed:500,              // 이동 속도를 설정합니다.
      pager:false,            // 현재 위치 페이징 표시 여부 설정.
      moveSlides:1,         // 슬라이드 이동시 갯수 설정.
      slideWidth:250,        // 슬라이드 마다 너비 설정.
      minSlides:2,           // 최소 노출 개수를 설정합니다.
      maxSlides:3,          // 최대 노출 개수를 설정합니다.
      slideMargin:110,      // 슬라이드간의 간격을 설정합니다.
      auto:true,             // 자동으로 흐를지 설정합니다.
      autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
      controls:false,       // 이전 다음 버튼 노출 여부 설정합니다.
         responsive: true,
         
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
            auto:false,
            autoControls:false,
            stopAutoOnclick:true,
 
          });
  
    
    
  

    
    

      
    
    
    
                 
            })//jquery end
