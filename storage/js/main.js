$(function(){
    
    $('#header .gnb .storage p').addClass('color-btn-01')
    $('#header .gnb .storage p').removeClass('white-always')

    $('#Mnavigation>li.storage .txt').addClass('color-btn-01')
    $('#Mnavigation>li.storage .txt').removeClass('color-txt-05')

    $('.before .button').click(function(){
        $(this).parents().children('.after').css('display', 'flex')
        $(this).parents().children('.before').hide()
        $(this).parents().children('.after').find('.text_box').val('')
    })

    $('.after .button').click(function(){
        $(this).parents().children('.after').hide()
        $(this).parents().children('.before').show()
    })

    $('.edit_box .button').click(function(){
        $('.edit_select').toggleClass('flex')
        $('.list a').each(function(){
            if ($(this).attr('href') === '#') {
                $(this).removeAttr('href');
            } else {
                $(this).attr('href', '#');
            }
        });
        $('.list .button_box').slideToggle(0)
        $('.fixed_button').slideToggle(0)
        $('body').toggleClass('fixed')
        $('.top_box').slideToggle(0)
        
    })

    $(window).resize(function(){
        if ($(window).width() > 999) {
            $('#Mnavigation').css('display', 'none');
        }else{
            $('#Mnavigation').css('display', 'flex');
        }
    });

    $('.bell_icon').click(function(){
        $(this).toggleClass('click')
        $('.toast').css('opacity', '1')
    })

})