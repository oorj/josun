$(function(){
    //header
    let bar = '.menu-bar'
    let btnRes = '.right .res button'
    $(bar).on('click', function(){
        $('.main-menu').slideToggle(500)
        $(this).toggleClass('on')
        $('header').toggleClass('on')
        $('.btn_lng button').toggleClass('on')
        $('.res button').toggleClass('on')
    })
    $(btnRes).on('click', function(){
        $('.right .res-list').toggle(0)
    })
    $('.btn_lng .kr').on('click', function(){
        $('.btn_lng .en').toggle(0)
    })
})
    //main-header
    $(function(){
        //header
        let bar = '.main-menu-bar'
        let btnRes = '.main-right .res button'
        $(bar).on('click', function(){
            $('.main-menu').slideToggle(500)
            $(this).toggleClass('on')
            $('.main-header').toggleClass('on')
            $('.main-btn_lng button').toggleClass('on')
            $('.main-right .res button').toggleClass('on')
        })
        $(btnRes).on('click', function(){
            $('.main-right .res-list').toggle(0)
        })
        $('.main-btn_lng .kr').on('click', function(){
            $('.main-btn_lng .en').toggle(0)
        })
    /* section0 */
    let menu = '.hotel .menu'
    let room = '.hotel .room'
    let span = '.hotel .room span'
    let p = '.hotel .room p'
    $(room).on('click', function(){
        $(menu).slideToggle(300)
        $('.hotel .room img').toggleClass('on')
        $(room).toggleClass('on')
        $(span).toggleClass('on')
        $(p).toggleClass('on')
    })
    
    //member
    let btnmem = document.querySelector('.menu .mem')
    let member = document.querySelector('.member')
    let btnclose= document.querySelector('.btn-close')
    $(btnmem).on('click', function(){
        $(member).fadeIn(300)
    })
    $(btnclose).on('click', function(){
        $(member).fadeOut(300)
    })

    //dining
    const dining = document.querySelector('.dining')
    const btnleft = document.querySelector('.btn-left')
    const btnright = document.querySelector('.btn-right')
    const closedini = document.querySelector('.dini-close')
    const btndini = document.querySelector('.dini')
    const left = document.querySelector('.left-list')
    const right = document.querySelector('.right-list')
    $(btnleft).on('click', function(){
        $(left).slideToggle(300)
    })
    $(btnright).on('click', function(){
        $(right).slideToggle(300)
    })
    $(btndini).on('click', function(){
        $(dining).fadeIn(300)
    })
    $(closedini).on('click', function(){
        $(dining).fadeOut(300)
    })

    /* room */
    let btnroom = '.room-close'
    let roombtn = '.menu .ro'
    let btnbusan = '.hotel .busan'
    $(roombtn).on('click', function(){
        $('.room-menu').fadeIn(300)
    })
    $(btnbusan).on('click',function(){
        $('.room-menu').fadeIn(300)
    })
    $(btnroom).on('click', function(){
        $('.room-menu').fadeOut(300)
    })
})

/* section3 */
$(function() {
    //delay() 메소드는 실행이 되야하는 지연시간
    $('.inner').delay(1000).animate({
        opacity: 1
    })
});

/* section5 */
    $('.bg1').on('mouseover', function(){
        $('.bg01').addClass('on')
    })
    $('.bg1').on('mouseleave', function(){
        $('.bg01').removeClass('on')
    })


    $('.bg2').on('mouseover', function(){
        $('.bg02').addClass('on')
    })
    $('.bg2').on('mouseleave', function(){
        $('.bg02').removeClass('on')
    })


    $('.bg3').on('mouseover', function(){
        $('.bg03').addClass('on')
    })
    $('.bg3').on('mouseleave', function(){
        $('.bg03').removeClass('on')
    })


    $('.bg4').on('mouseover', function(){
        $('.bg04').addClass('on')
    })
    $('.bg4').on('mouseleave', function(){
        $('.bg04').removeClass('on')
    })


    $('.bg5').on('mouseover', function(){
        $('.bg05').addClass('on')
    })
    $('.bg5').on('mouseleave', function(){
        $('.bg05').removeClass('on')
    })


    $('.bg6').on('mouseover', function(){
        $('.bg06').addClass('on')
    })
    $('.bg6').on('mouseleave', function(){
        $('.bg06').removeClass('on')
    })


    $('.bg7').on('mouseover', function(){
        $('.bg07').addClass('on')
    })
    $('.bg7').on('mouseleave', function(){
        $('.bg07').removeClass('on')
    })


    $('.bg8').on('mouseover', function(){
        $('.bg08').addClass('on')
    })
    $('.bg8').on('mouseleave', function(){
        $('.bg08').removeClass('on')
    })
    

var myFullpage = new fullpage('#fullpage', {
    scrollOverflow:true,
    verticalCentered:false,
    scrollBar:true,
});
$("#fullpage").fullpage({
    responsiveWidth: 640
})
