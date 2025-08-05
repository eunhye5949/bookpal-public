$(function(){

    $('.temp_list_type .tab_list>li').click(function(e){
        $('.temp_list_type .list>div').hide();
        var tabIndex = $(this).index() + 1;
        $('.temp_list_type .list_' + tabIndex).show();
        $('.temp_list_type .tab_list>li a').removeClass('active');
        $(this).find('a').addClass('active');
	})
    $('.temp_list_type .tab_list>li').eq(0).find('a').trigger('click')

    $('.ranking .list').each(function () {
        $(this).find('.swiper-slide').each(function(index) {
            var newRanking = index + 1;
            $(this).find('.ranking_number').text(newRanking);
        });
    });

    $('#infoBtn').click(function(){
        $('#toolTip').show()
    })

    var tempSwiper = new Swiper('.template .swiper', {
        slidesPerView : 'auto',
        spaceBetween: 4,
        watchOverflow : true,
        observer: true,
        observeParents: true,
        navigation : {
            nextEl : '.template .swiper-button-next',
            prevEl : '.template .swiper-button-prev',
        },
        freeMode: {
            enabled: true
        }, 
        breakpoints: {
            769: {
                freeMode: {
                    enabled: false
                }, 
            },
        }
    });
    var bannerSwiper = new Swiper('.small_banner .swiper', {
        slidesPerView : 'auto',
        spaceBetween: 4,
        watchOverflow : true,
        observer: true,
        observeParents: true,
        navigation : {
            nextEl : '.small_banner .swiper-button-next',
            prevEl : '.small_banner .swiper-button-prev',
        },
        breakpoints: {
            769: {
                slidesPerView : 'auto',
            },
            1000: {
                slidesPerView : '2',
            },
        }
        
    });

    var genreSwiper = new Swiper('.genre_banner .swiper', {
        effect : 'fade',
        fadeEffect: {
            crossFade: true
        },
        slidesPerView : '1',
        watchOverflow : true,
        loop : true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: ".genre_banner .swiper-button-next",
            prevEl: ".genre_banner .swiper-button-prev",
        },
        pagination: {
            el: '.genre_banner .swiper-pagination',
            clickable: false,
        },
        autoplay: {  
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1200,

    });

    var rankingSwiper = new Swiper('.grid_row3 .swiper', {
        slidesPerView:'auto',
        spaceBetween: 4,
        watchOverflow : true,
        observer: true,
        observeParents: true,
        grid: {
            fill: 'column',
            rows: 3,
        },
        navigation : {
            nextEl : '.grid_row3 .swiper-button-next',
            prevEl : '.grid_row3 .swiper-button-prev',
        }

    });
    
    /* input */
    function checkInput() {
        $('.text_input input').each(function() {
            if ($(this).val()) {
                $(this).siblings('.right_btns').find('.btnClear').show();
            } else {
                $(this).siblings('.right_btns').find('.btnClear').hide();
            }
        });
    }

    checkInput();

    $('.text_input input').on('keyup change', function() {
        checkInput();
    });
    
    $('.text_input').on('click', '.btnClear', function() {
        $(this).closest('.text_input').find('input').val('');
        checkInput();
    });

    $('.toggle_list>li .button').click(function(){
        var currentTxtBox = $(this).next('.txt_box');
        $('.toggle_list>li .txt_box').not(currentTxtBox).slideUp(0);
        $(this).next('.txt_box').slideToggle(0)
        $('.toggle_list>li .button').not(this).removeClass('click');
        $(this).toggleClass('click')
    })

    /* 3depth헤더 type_header */
    $(window).scroll(function(){
        var nowScroll = $(window).scrollTop()

        if(nowScroll > 10){
            $('body').addClass('Scroll')
        }else{
            $('body').removeClass('Scroll')
        }

    })



})