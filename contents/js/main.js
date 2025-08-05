$(function(){

    ///// 콘텐츠홈 /////

    var $textElement = $(".introduction_box .text_box");
    var $moreBtn = $("#moreBtn");

    $moreBtn.click(function(){
        $textElement.toggleClass('show')
    });

    var $win = $(window)
    $win.scroll(function(){
        var nowScroll = $win.scrollTop()
        var scrollHeight = $(".detail_box .content").offset().top;

        if(nowScroll > 0){
            $('.contents_header').addClass('color-bg-01')
        }else{
            $('.contents_header').removeClass('color-bg-01')
        }
        if(nowScroll > scrollHeight){
            $(".tab_list").addClass('scrollTop')
        }else{
            $(".tab_list").removeClass('scrollTop')
        }
    })


    ///// 뷰어 /////
    $('.view_body .contents_box .area').click(function(){
        $('.view_header, .view_footer').toggleClass('hide')
    })

    $('.setting_btn, .menu_btn').click(function(){
        var $clickedBtn = $(this);
        var $otherBtn = $clickedBtn.hasClass('setting_btn') ? $('.menu_btn') : $('.setting_btn');
        var modalArea = $clickedBtn.hasClass('setting_btn') ? '#setting' : '#menu';
        var otherModalArea = $clickedBtn.hasClass('setting_btn') ? '#menu' : '#setting';
    
        if ($clickedBtn.hasClass('active')) {
            $clickedBtn.removeClass('active');
            $(modalArea + ' .modal_box').slideUp();
            $(modalArea + ' .modal_bg').slideUp(0);
            $('.view_footer').removeClass('hide')
        } else {
            $otherBtn.removeClass('active');
            $clickedBtn.addClass('active');
            $(otherModalArea + ' .modal_box').slideUp();
            $(otherModalArea + ' .modal_bg').slideUp(0);
            $(modalArea + ' .modal_box').slideDown();
            $(modalArea + ' .modal_bg').slideDown(0);
            $('.view_footer').addClass('hide')
        }
    });

    $('.modal_area .modal_bg').click(function(){
        $('.modal_area .modal_box').slideUp()
        $(this).hide()
        $('.setting_btn, .menu_btn').removeClass('active')
        $('.view_footer').removeClass('hide')
    })

    var $win = $(window);
    var scrolltop = $(document).scrollTop();

    $win.scroll(function(){
        var nowScroll = $win.scrollTop();
        if(nowScroll === 0 || $('.setting_btn, .menu_btn').hasClass('active')) {
            $('.view_header, .view_footer').removeClass('hide');
        } else {
            $('.view_header, .view_footer').addClass('hide');
        }
    });

    // 설정값 
    $('.type_btn button:first-child').addClass('active');
    $('.type_btn button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    

    $('#fontBtn1').click(function(){
        $('.view_body .area').removeClass('NotoSansKR YESMyoungjo').addClass('NanumBarunGothic');
    })
    $('#fontBtn2').click(function(){
        $('.view_body .area').removeClass('NanumBarunGothic YESMyoungjo').addClass('NotoSansKR');
    })
    $('#fontBtn3').click(function(){
        $('.view_body .area').removeClass('NanumBarunGothic NotoSansKR').addClass('YESMyoungjo');
    })

    // 각 버튼에 대한 클릭 이벤트를 정의합니다.
    $('#pageBtn').click(function() {
        $('.viewer-content').addClass('pagemode');
        $('.progress_type1').css('display', 'flex');
        $('.progress_type2').hide();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('#reverseBtn').click(function() {
        $('.viewer-content').addClass('pagemode');
        $('.progress_type2').css('display', 'flex');
        $('.progress_type1').hide();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('#scrollBtn').click(function() {
        $('.viewer-content').removeClass('pagemode');
        $('.progress_type1').css('display', 'flex');
        $('.progress_type2').hide();
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('#themeBtn1').click(function(){
        $('.view_body .area').removeClass('viewer-gray viewer-black-02 viewer-yellow viewer-green').addClass('viewer-white');
        $('.area .contents').removeClass('viewer-gray').addClass('viewer-black-01')
    })
    $('#themeBtn2').click(function(){
        $('.view_body .area').removeClass('viewer-white viewer-black-02 viewer-yellow viewer-green').addClass('viewer-gray');
        $('.contents_box .contents').removeClass('viewer-gray').addClass('viewer-black-01')
    })
    $('#themeBtn3').click(function(){
        $('.view_body .area').removeClass('viewer-gray viewer-white viewer-yellow viewer-green').addClass('viewer-black-02');
        $('.contents_box .contents').removeClass('viewer-black-01').addClass('viewer-gray')
    })
    $('#themeBtn4').click(function(){
        $('.view_body .area').removeClass('viewer-gray viewer-black-02 viewer-white viewer-green').addClass('viewer-yellow');
        $('.contents_box .contents').removeClass('viewer-gray').addClass('viewer-black-01')
    })
    $('#themeBtn5').click(function(){
        $('.view_body .area').removeClass('viewer-gray viewer-black-02 viewer-yellow viewer-white').addClass('viewer-green');
        $('.contents_box .contents').removeClass('viewer-black-01').addClass('viewer-gray')
    })

    $('.type_btn button.active').click();
    
})

