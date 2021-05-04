$(function () {


    var $window = $(window);
    var $header = $('.header');
    var $header_height = $header.outerHeight();

    $window.scroll(onScroll);

    function onScroll() {
        if ($window.scrollTop()) {
            // $header.next('').css('padding-top', $header_height);
            $header.addClass('is-scroll');
        } else {
            // $header.next('').removeAttr('style');
            $header.removeClass('is-scroll');
        }
    }


    /*$( window ).resize(function() {
        if ($(window).width() <='995'){
            $('.line-desk-hd .hamburger').addClass('mob-view').removeClass('desk-view');
        } else {
            $('.line-desk-hd .hamburger').removeClass('mob-view').addClass('desk-view');
        }
    });*/

    $(' .menu-item a').each(function () {
        if ($(this).siblings('.sub-menu').length) {
            $(this).closest('.menu-item').toggleClass('parent');
        }
    });
    /*
        $('.mob-view.hamburger').click(function() {
            $('.left_mob_menu').toggleClass('visible');
            $('body').toggleClass('no-scroll');
            $('.bg_black').toggleClass('show');
        });	 */

    $('.hamburger').click(function () {
        $('.desk-left-menu').toggleClass('visible');
        $('.left-sidebar').removeClass('visible');
        $('body').toggleClass('no-scroll');
        $('.bg_black').toggleClass('show');
    });


    $('.desk-left-menu .menu-item .title-menu__item').click(function (e) {

        if ($(this).siblings('.sub-menu-wrap').length) {
            e.preventDefault();
            $(this).closest('.menu-item').toggleClass('active');
            $(this).siblings('.sub-menu-wrap').toggleClass('open');
            return false;
        }

        $(this).parents('.menu-item').toggleClass('active');
        $(this).parents('.menu-item').find('.sub-menu-wrap').toggleClass('open');

    });

    $('.left-sidebar .filter__item .title-filter').click(function (e) {
        $(this).parents('.filter__item').toggleClass('active');
        $(this).parents('.filter__item').find('.filter-list').toggleClass('open');

    });


    $('.desk-left-menu .menu-item a').each(function () {
        if ($(this).siblings('.sub-menu-wrap').length) {
            $(this).closest('.menu-item').toggleClass('parent');
        }
    });


    $(document).on('click', '.bg_black', function (e) {
        $('.desk-left-menu').removeClass('visible');
        $('.left-sidebar ').removeClass('visible');
        $('body').removeClass("no-scroll");
        $(this).removeClass('show');
        $('input:checked').prop('checked', false);
    });

    $(document).on('click', '.left_mob_menu .close', function (e) {
        $('.left_mob_menu').removeClass('visible');
        $('body').removeClass("no-scroll");
        $('.bg_black').removeClass('show');
        $('input:checked').prop('checked', false);
    });

    $(document).on('click', '.left_mob_menu .btn', function (e) {
        $('.left_mob_menu').removeClass('visible');
        $('body').removeClass("no-scroll");
        $('.bg_black').removeClass('show');
        $('input:checked').prop('checked', false);
    });

    $('.left_mob_menu .menu-item a').click(function (e) {
        if ($(this).siblings('.sub-menu').length) {
            e.preventDefault();
            $(this).closest('.menu-item').toggleClass('active');
            $(this).siblings('.sub-menu').toggleClass('open');
            return false;
        }
    });

    $('.show-filtr-catalog').click(function () {
        $('.left-sidebar').addClass('visible');
        $('body').toggleClass('no-scroll');
        $('.bg_black').toggleClass('show');
    });

    $(document).on('click', '.left-sidebar .close', function (e) {
        $('.left-sidebar').removeClass('visible');
        $('body').removeClass("no-scroll");
        $('.bg_black').removeClass('show');
        $('input:checked').prop('checked', false);
    });

    $('select').niceSelect();

    //scrool to block
    $('.click-next-content').click(function () {
        $('html, body').animate({scrollTop: $('#other-content-page').offset().top + 5}, 1500);
    });

    //slider
    $(".js-team-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            ,
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".slider-wrap .prev").on("click", function () {
        $('.js-team-slider').slick("slickPrev");
    });

    $(".slider-wrap .next").on("click", function () {
        $('.js-team-slider').slick("slickNext");
    });

    //scrool to block
    $('.search-wrap').click(function () {
        $(this).addClass('open');
        $('.search-input').removeAttr('readonly');
    });
    $(document).mouseup(function (e) {
        var div = $(".search-wrap");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('open');
        }
    });

    $(".js-tabs, .tabs-product").lightTabs();

    $(".price-license__tabs").lightTabs();


    /*$('.num-plus .value ').countTo({
        delay: 2000,
    });
*/


    $(function () {
        var num = $(".num-plus .num .value");
        num.each(function (indx, el) {
            var max = $(el).data("to");
            var duration = 2500;
            var visibility = checkViewport(el);
            $(el).on("animeNum", function () {
                $({n: 0}).animate({n: max}, {
                    easing: "linear",
                    duration: duration,
                    step: function (now, fx) {
                        $(el).html(now | 0)
                    }
                })
            }).data("visibility", visibility);
            visibility && $(el).trigger("animeNum")
        });

        function checkViewport(el) {
            var H = document.documentElement.clientHeight,
                h = el.scrollHeight,
                pos = el.getBoundingClientRect();
            return pos.top + h > 0 && pos.bottom - h < H
        }

        $(window).scroll(function () {
            num.each(function (indx, el) {
                var visibility = checkViewport(el);
                el = $(el);
                var old = el.data("visibility");
                old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
            })
        })
    });


    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 150,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();


    $('.js-single-banner').each(function (index, element) {
        // element == this

        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this), {
            // init: false,
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
        });

    });

    $('.js-reviews').each(function (index, element) {
        // element == this

        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this), {
            // init: false,
            loop: true,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            }
        });

    });


    $('.js-top-product').each(function (index, element) {
        // element == this

        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this), {
            // init: false,
            // loop: true,
            autoHeight: true,
            calculateHeight: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: false,
            slidesPerGroup: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            // Responsive breakpoints

            breakpoints: {
                320: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                },
                700: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                1300: {
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                    slidesPerGroup: 1,
                },
            }
        });

    });
    $('.cart-related').each(function (index, element) {
        // element == this
        console.log(this.querySelector('.product-list'));
        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this.querySelector('.product-list')), {
            // init: false,
            // loop: true,
            autoHeight: false,
            calculateHeight: false,
            slidesPerView:  1,
            spaceBetween: 0,
            centeredSlides: false,
            slidesPerGroup: 1,
            noSwiping: true,
            allowTouchMove: false,
            allowSlidePrev: false,
            allowSlideNext: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            // Responsive breakpoints

            breakpoints: {
                320: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    noSwiping: false,
                    allowTouchMove: true,
                    allowSlidePrev: true,
                    allowSlideNext: true,
                },
                640: {
                    spaceBetween: 20,
                    noSwiping: true,
                    allowTouchMove: false,
                    allowSlidePrev: false,
                    allowSlideNext: false,
                },
                1300: {
                    spaceBetween: 0
                },
            }
        });

    });
    $('.js-portfolio').each(function (index, element) {
        // element == this

        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this), {
            // init: false,
            //loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            // Responsive breakpoints

            breakpoints: {
                320: {
                    spaceBetween: 10
                },
                480: {
                    spaceBetween: 10
                },
                640: {
                    spaceBetween: 10
                },
                1300: {
                    spaceBetween: 20
                },
            }

        });

    });
    $('.text-apart--slider').each(function (index, element) {
        // element == this

        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this), {
            // init: false,
            //loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            // Responsive breakpoints

            breakpoints: {
                320: {
                    spaceBetween: 10
                },
                480: {
                    spaceBetween: 10
                },
                640: {
                    spaceBetween: 10
                },
                1300: {
                    spaceBetween: 20
                },
            }

        });

    });
    $('.js-portfolio-cart').each(function (index, element) {
        // element == this

        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this), {
            // init: false,
            //loop: true,
            slidesPerView: 'auto',
            spaceBetween: 45,
            slidesPerGroup: 1,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            // Responsive breakpoints
            // /*
              breakpoints: {
                  320: {
                  slidesPerView: 2,
                  spaceBetween: 10
                  },
                  480: {
                      slidesPerView: 1,
                      spaceBetween: 10
                  },
                  640: {
                  slidesPerView: 1,
                  spaceBetween: 10
                  },
                  1300: {
                      slidesPerView: 'auto',
                      spaceBetween: 20
                  },
              }
        });

    });

    $('.js-reviews-video').each(function (index, element) {
        // element == this

        const arrowPrev = $(this).find('.btn-slider-nav-prev')
        const arrowNext = $(this).find('.btn-slider-nav-next')

        const bannerSlider = new Swiper($(this), {
            // init: false,
            //loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            //slidesPerGroup: 1,
            centeredSlides: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: arrowNext,
                prevEl: arrowPrev,
            },
            // Responsive breakpoints
            // /*
              breakpoints: {
                  320: {
                  slidesPerView: 1,
                  spaceBetween: 0
                  },
                  // 480: {
                  //     slidesPerView: 1,
                  //     spaceBetween: 10
                  // },
                  640: {
                      slidesPerView: 2,
                      spaceBetween: 10
                  },
                  // 1300: {
                  //     slidesPerView: 'auto',
                  //     spaceBetween: 20
                  // },
              }
              // */
        });

    });


    $(".seo-text .container").niceScroll({
        cursorcolor: "#3C8AC9",
        cursorwidth: "5px",
        background: "#E0E0E0",
        cursorborder: "0px solid #f36d2d",
        cursorborderradius: 0,
        //boxzoom:false,
        //touchbehavior:true,
        //autohidemode:false,
        cursorfixedheight: 40,
        //smoothscroll: true,
        //mousescrollstep: 5,
        scrollspeed: 50
    });
    $(".text-apart.text-apart--scrolled").niceScroll({
        cursorcolor: "#3C8AC9",
        cursorwidth: "5px",
        background: "#E0E0E0",
        cursorborder: "0px solid #f36d2d",
        cursorborderradius: 0,
        //boxzoom:false,
        //touchbehavior:true,
        //autohidemode:false,
        cursorfixedheight: 40,
        //smoothscroll: true,
        //mousescrollstep: 5,
        scrollspeed: 50
    });
    // $(document).ready(()=> {
    //     setTimeout(() => {
    //         $(".items-same-tags__right").niceScroll({
    //             cursorcolor: "#3C8AC9",
    //             cursorwidth: "5px",
    //             background: "#E0E0E0",
    //             cursorborder: "0px solid #f36d2d",
    //             cursorborderradius: 0,
    //             //boxzoom:false,
    //             //touchbehavior:true,
    //             //autohidemode:false,
    //             cursorfixedheight: 0,
    //             //smoothscroll: true,
    //             //mousescrollstep: 5,
    //             scrollspeed: 50
    //         });
    //     }, 500)
    //
    // });
    // $('.classic-block').change(() => {
    //     $(".items-same-tags__right").niceScroll({
    //         cursorcolor: "#3C8AC9",
    //         cursorwidth: "5px",
    //         background: "#E0E0E0",
    //         cursorborder: "0px solid #f36d2d",
    //         cursorborderradius: 0,
    //         //boxzoom:false,
    //         //touchbehavior:true,
    //         //autohidemode:false,
    //         cursorfixedheight: 0,
    //         //smoothscroll: true,
    //         //mousescrollstep: 5,
    //         scrollspeed: 50
    //     });
    // })


    $(".tabs-content .ov-content-tabs").niceScroll({
        cursorcolor: "#3C8AC9",
        cursorwidth: "5px",
        background: "#E0E0E0",
        cursorborder: "0px solid #f36d2d",
        cursorborderradius: 0,
        //boxzoom:false,
        //touchbehavior:true,
        //autohidemode:false,
        cursorfixedheight: 100,
        //smoothscroll: true,
        //mousescrollstep: 5,
        scrollspeed: 50
    });
    // $(".faq-text").niceScroll({
    //     cursorcolor: "#3C8AC9",
    //     cursorwidth: "5px",
    //     background: "#E0E0E0",
    //     cursorborder: "0px solid #f36d2d",
    //     cursorborderradius: 0,
    //     //boxzoom:false,
    //     //touchbehavior:true,
    //     //autohidemode:false,
    //     cursorfixedheight: 100,
    //     //smoothscroll: true,
    //     //mousescrollstep: 5,
    //     scrollspeed: 50
    // });


    $(window).bind("resize", function () {
        if ($(this).width() < 570) {
            $(".seo-text .container").getNiceScroll().hide();
        } else {

        }
    }).resize();
    $(window).bind("resize", function () {
        if ($(this).width() < 570) {
            $(".items-same-tags__right").getNiceScroll().hide();
        } else {

        }
    }).resize();

    $(window).bind("resize", function () {
        if ($(this).width() < 570) {
            $(".faq-text").getNiceScroll().hide();
        } else {

        }
    }).resize();
    //fav compare
    $('.fav-compare a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('check');
    });


    $(".tabs-vertic .nav-tabs a").hover(function (e) {
        const dataId = $(this).attr("data-id");
        const parent = $(this).parents('li');
        const submenu = $('.content-tabs');
        parent.toggleClass('active');
        submenu.toggleClass('active');

        parent.parents('.nav-tabs').toggleClass('active');

        parent.siblings().removeClass('active');
        submenu.siblings().removeClass('show');

        if (parent.hasClass('active')) {
            $(`#${dataId}`).addClass('show');
        } else {
            $(`#${dataId}`).removeClass('show');
        }

    });

    $("header.header .menu").hover(function (e) {
        $(this).parents('.header').toggleClass('hover');
    });

    $('.desk-left-menu .top-nav-line .search a').click(function (e) {
        e.preventDefault();
        $('.search-wrap').toggleClass('show');
    });

    $('.right-info .language-wrap a').click(function (e) {
        $('.right-info .language-wrap a').removeClass('active');
        $(this).addClass('active');
    });

    $('.top-nav-line .language-wrap a').click(function (e) {
        $('.top-nav-line .language-wrap a').removeClass('active');
        $(this).addClass('active');
    });


    $('.desk-left-menu .search-wrap .close-search').click(function (e) {
        e.preventDefault();
        $('.search-wrap').removeClass('show');
    });

    $(".sort-view-wrap .catalog-type-btn.vertical").click(function () {
        $(this).addClass('active');
        $(this).next().removeClass('active');
        $('.product-list').addClass('vertical').removeClass('horisontal');
        $(".seo-text .container").getNiceScroll().resize();
    });

    $(".sort-view-wrap .catalog-type-btn.horisontal").click(function () {
        $(this).addClass('active');
        $(this).siblings('.catalog-type-btn').removeClass('active');
        $('.product-list').addClass('horisontal').removeClass('vertical');
        $(".seo-text .container").getNiceScroll().resize();
    });

    $(".sort-wrap .sort-type .view").click(function () {
        $(this).addClass('open');
        $(this).siblings('.hide-block').addClass('open');
    });

    $(" .sort-type .hide-block a").click(function (e) {
        e.preventDefault();
        var nameSort = $(this).attr("data-sort");
        $(this).parents('.hide-block').removeClass('open');
        $(this).parents('.sort-type').find('.view').removeClass('open').text(nameSort);
    });

    $('[data-quantity="plus"]').click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal)) {
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    $('[data-quantity="minus"]').click(function (e) {
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            $('input[name=' + fieldName + ']').val(1);
        }
    });

    $('.play-btn').on('click', function (e) {
        e.preventDefault();
        var parentVideo = $(this).parents('.video-wrapper');
        parentVideo.find(".videoIframe")[0].src += "?autoplay=1";
        parentVideo.find('.videoIframe').show();
        parentVideo.find('.video-cover').hide();
        parentVideo.find('.play-btn').hide();
    })

    $('.top-product-info   .bottom-nav .btn').on('click', function (e) {
        e.preventDefault();
        $('.top-product-info  .bottom-nav .btn').addClass('show-one');
        $('.top-nav__item.busket.add-tovar').addClass('hover');
        setTimeout(function () {
            $('.top-product-info   .bottom-nav .btn').removeClass('show-one').addClass('show-two');
            $('.top-nav__item.busket.add-tovar').removeClass('hover');
        }, 3000);
    });

    $(' .breadcrumb .breadcrumb-item').each(function () {
        if ($(this).hasClass('active')) {
            $(this).prev().addClass('backLink');
        }
    });

    $('.input-phone').each(function () {

        var lang = $(this).attr('data-lang');

        if (lang == 'ua') {
            $(this).addClass('mask-phone-ua');
        }
        ;
        if (lang == 'ru') {
            $(this).addClass('mask-phone-ru');
        }
        ;
        if (lang == 'en') {
            $(this).addClass('mask-phone-en');
        }
        ;
    });

    $(".mask-phone-ua").mask('+38(999)999-99-99');
    $(".mask-phone-ru").mask('+7(999)999-99-99');

    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $('.mask-phone-ua').click(function () {
        $(this).setCursorPosition(4);
    });
    $('.mask-phone-ru').click(function () {
        $(this).setCursorPosition(3);
    });


    $(".js-portfolio .swiper-wrapper").each(function () {
        var numSlid = $(this).find('.swiper-slide').length;
        console.log(numSlid);
        $('.js-portfolio').find('.swiper-pagination-total').text(numSlid);
    })
    $('.js-portfolio .btn-slid').click(function () {
        $(".js-portfolio .swiper-wrapper").each(function () {
            var numSlid = $(this).find('.swiper-slide').length;
            console.log(numSlid);
            $('.js-portfolio').find('.swiper-pagination-total').text(numSlid);
        })
    });


    $(function () {
        let shareEndDat = document.querySelector('.share-counter-cart');
        if (!shareEndDat) {

        } else {
            let shareDateObj2 = {
                year: shareEndDat.dataset.dateYear,
                month: shareEndDat.dataset.dateMonth - 1,
                day: shareEndDat.dataset.dateDay,
                hours: shareEndDat.dataset.dateHour,
            }
            var note = $('#note'),
                ts = new Date(shareDateObj2.year, shareDateObj2.month, shareDateObj2.day),
                newYear = true;
            let currentDay = new Date();
            let currentDayObj = {
                year: currentDay.getFullYear(),
                month: currentDay.getMonth(),
                day: currentDay.getDay(),
                hours: currentDay.getHours(),
                minutes: currentDay.getMinutes(),
                seconds: currentDay.getSeconds(),
                ms: currentDay.getMilliseconds(),
            };
        }


        let shareEndDate = document.querySelector('.share-counter-cart');
        let tb = 0;

        function ifShareOnPage() {
            if (!shareEndDate) {

            } else {
                let shareDateObj = {
                    year: shareEndDate.dataset.dateYear,
                    month: shareEndDate.dataset.dateMonth - 1,
                    day: shareEndDate.dataset.dateDay,
                    hours: shareEndDate.dataset.dateHour,
                }
                shareDateObj2 = shareDateObj;
                let currentDayMs = (new Date()).getTime();
                let crtDMs = 365 * currentDayObj.year *
                    console.log(currentDayMs + ' currentMs');
                console.log(shareDateObj);
                let shareDate = new Date(shareDateObj.year, shareDateObj.month - 1, shareDateObj.day, shareDateObj.hours);
                console.log(shareDate + ' test date');
                console.log(new Date());
                let diff = shareDate - currentDayMs;
                console.log(diff + ' differnce');
                let oneS = 1000;
                let secLeft = Math.floor((diff / oneS));
                let hoursLeft = Math.floor((secLeft / 3600));
                let minLeft = Math.floor((secLeft - (hoursLeft * 3600)) / 60);
                let secLeft2 = Math.floor((secLeft - ((hoursLeft * 3600) + (minLeft * 60))));

                let daysLeft = 0;
                if (hoursLeft > 23) {
                    daysLeft = Math.floor(hoursLeft / 24);
                    hoursLeft = hoursLeft - (daysLeft * 24);
                } else {

                }
                tb = daysLeft * hoursLeft * minLeft * secLeft * 1000;

                console.log('days left: ' + daysLeft);
                console.log('hours left: ' + hoursLeft);
                console.log('min left: ' + minLeft);
                console.log('sec left: ' + secLeft2);
                return tb
            }
            return tb
        }

        // ifShareOnPage();
        // console.log(currentDay.getDay());
        // console.log(currentDayObj);

        if ((new Date()) > ts) {
            // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
            // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
            // ts = (new Date()).getTime() + 4 * 24 * 60 * 60 * 1000;
            // ts = tb;
            // console.log(ts + ' ts');
            newYear = false;
        }

        $('#countdown').countdown({
            timestamp: ts,
            callback: function (days, hours, minutes, seconds) {

                var message = "";

                message += "<span class=\"time\"><span class=\"title\">Дні:</span> " + days + "</span> ";
                message += "<span class=\"time\"><span class=\"title\">Години:</span> " + hours + "</span>";
                message += "<span class=\"time\"><span class=\"title\">Хвилини:</span>" + minutes + " </span>";
                message += "<span class=\"time\"><span class=\"title\">Секунди:</span> " + seconds + " </span>";
                if (!shareEndDat) {
                } else {
                    note.html(message);
                }
            }
        });

    });


    $(window).scroll(function () {

        var check = 1;
        var target = $('.num-plus'); // You counter class
        if (!target.length) {

        } else {
            var targetPos = target.offset().top;
            var winHeight = $(window).height();
            var scrollToElem = targetPos - winHeight;


            var winScrollTop = $(this).scrollTop();
            if (winScrollTop > scrollToElem && check) {
                $('.num-plus-list__item .value').countTo();
                check = 0;
            }
        }

    });

});


// jQuery(function ($) {
//     var max_col_height = 0; // максимальная высота, первоначально 0
//     $('.top-product-list .produt-item').each(function () { // цикл "для каждой из колонок"
//         if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
//             max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
//         }
//     });
//     $('.top-product-list .produt-item').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
// });
//hello

let addToFav = [...document.querySelectorAll('.fav-compare .to-favorite')];
let addToCompar = [...document.querySelectorAll(' .fav-compare .to-comparison')];
let removeProduct = [...document.querySelectorAll(' .delete-product')];

function ifCanRemoveProd() {
    if (!removeProduct.length) {

    } else {
        removeProduct.forEach((btn) => {
            btn.addEventListener('click', () => {
                let productCont = btn.closest('.produt-item');
                productCont.remove();
            })
        })
    }
}

ifCanRemoveProd();

function ifProdOnPage() {
    if (!addToFav.length) {

    } else {
        addToFav.forEach((favBtn) => {
            favBtn.addEventListener('click', () => {
                let popupAdded = favBtn.closest('li').querySelector('.added-to-fav');
                if (favBtn.classList.contains('check')) {
                    popupAdded.classList.remove('active');
                } else {
                    popupAdded.classList.add('active');

                }


            })
        })

        addToCompar.forEach((compBtn) => {
            compBtn.addEventListener('click', () => {
                let popupAdded = compBtn.closest('li').querySelector('.added-to-fav');
                if (compBtn.classList.contains('check')) {
                    popupAdded.classList.remove('active');
                } else {
                    popupAdded.classList.add('active');

                }


            })
        })
    }
}

ifProdOnPage();

let allFaqs = [...document.querySelectorAll('.single-faq')];
allFaqs.forEach((faq) => {
    faq.querySelector('.faq-title').addEventListener('click', () => {
        faq.classList.toggle('open');



    })
});

let additiveTags = [...document.querySelectorAll('.additive-tag')];
let additiveTagHidding = document.querySelector('.btn.control-visibility-tags');

function ifBlogTags() {
    if (!additiveTags.length) {

    } else {
        additiveTags.forEach((tag, i) => {
            if (i > 5) {
                tag.style.display = 'none';
            }


            tag.addEventListener('click', () => {
                tag.classList.toggle('selected');

            })
        });
        additiveTagHidding.addEventListener('click', () => {
            additiveTagHidding.classList.toggle('hide');
            let lang = document.querySelector('html').lang;
            console.log(lang);
            if (additiveTagHidding.classList.contains('hide')) {
                additiveTags.forEach((tag2, k) => {

                    if (k > 5) {
                        tag2.style.display = 'flex';
                    }
                });
                if (lang !== "en") {
                    if (lang !== "ru") {
                        additiveTagHidding.innerHTML = 'Приховати';
                    } else {
                        additiveTagHidding.innerHTML = 'Скрыть';
                    }

                } else {
                    additiveTagHidding.innerHTML = 'Hide';
                }
            } else {

                additiveTags.forEach((tag2, k) => {

                    if (k > 5) {
                        tag2.style.display = 'none';
                    }
                });
                if (lang !== "en") {
                    if (lang !== "ru") {
                        additiveTagHidding.innerHTML = 'Більше тегів';
                    } else {
                        additiveTagHidding.innerHTML = 'Больше тегов';
                    }

                } else {
                    additiveTagHidding.innerHTML = 'More tags';
                }
            }

        });
    }
};
ifBlogTags();

let showHideBtn = [...document.querySelectorAll('.show-hide-pass')];
function ifShowHideOnPage() {
    if(!showHideBtn.length) {

    } else {
        showHideBtn.forEach((btnH) => {
            btnH.addEventListener('click', () => {
                btnH.classList.toggle('show');
                if (btnH.classList.contains('show')) {
                    btnH.closest('label').querySelector('input').type = 'text';
                } else {
                    btnH.closest('label').querySelector('input').type = 'password';

                }
            })
        })

    }
}
ifShowHideOnPage();
let menuCabinetBtn = document.querySelector('.cabinet-menu');

function ifCabinetPage() {
    if(!menuCabinetBtn) {

    } else {
        menuCabinetBtn.addEventListener('click', () => {
            menuCabinetBtn.classList.toggle('open');
        })

    }
}
ifCabinetPage();

let ordersList = [...document.querySelectorAll('.single-order')];
let ordersHead = document.querySelector('.orders-table__head');


function ifOrdersHave() {
    if(!ordersList.length) {

    } else {
        ordersList.forEach((ord) => {
            // ord.appendChild(ordersHead.cloneNode(true));
            let includesHead = ordersHead.children;
            let ordInc = ord.children;

            for (let i = 0; i < includesHead.length; i++) {
                ordInc[i].appendChild(includesHead[i].cloneNode(true))
            }


        })
    }
};
ifOrdersHave();

let calcDelCart = [...document.querySelectorAll('.calc-delivery')];

function ifCartCalcDel() {
    if(!calcDelCart.length) {

    } else {
        calcDelCart.forEach((dc) => {
            dc.querySelector('span').addEventListener('click', () => {
                dc.querySelector('span').classList.toggle('open');
            })
        })
    }
};
ifCartCalcDel();

let openAuthorizBlock = [...document.querySelectorAll('.btn-open-block')];

function ofOpenAuthorize() {
    if (!openAuthorizBlock.length) {

    } else {
        openAuthorizBlock.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.checkout-details__authorization-checkout').querySelector('.authorization').classList.add('visible')
                btn.classList.add('hide');
            })
        })
    }
};
ofOpenAuthorize();

let openOtherAddress = [...document.querySelectorAll('.top-line.open-address-edit')];

function ifOpenOtherAddress() {
    if (!openOtherAddress.length) {

    } else {
        openOtherAddress.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open')
            })
        })
    }
};
ifOpenOtherAddress();

let videoPlayBtnHeader = document.querySelector('.video-play-btn');

function ifVideoPlayBtn() {
    if(!videoPlayBtnHeader) {

    } else {
        videoPlayBtnHeader.addEventListener('click', () => {
            videoPlayBtnHeader.classList.add('hide');
            let videoClosest = videoPlayBtnHeader.closest('.video-bg').querySelector('video');
            videoClosest.play();
        })
    }
}

ifVideoPlayBtn();


let ulListTextApart = [...document.querySelectorAll('.text-apart ul')];

function removeUlLiContent ()
{
    if (!ulListTextApart.length) {

    } else {
        ulListTextApart.forEach((ul) => {
            if (ul.closest('li')) {
                ul.closest('li').classList.add('noBefore')
            } else {

            }
        })
    }
};

removeUlLiContent();

let allMenuLicensesPrice = [...document.querySelectorAll('.price-license__block--mob .price-license__head')];
function openLicensesPriceMenu() {
    if (!allMenuLicensesPrice.length) {

    } else {
        allMenuLicensesPrice.forEach((li) => {
          li.addEventListener('click', () => {
              li.closest('.price-license__block--mob').classList.toggle('open');
          })
        })
    }
};
openLicensesPriceMenu();

let allTraderMenu = [...document.querySelectorAll('.full-block__line .full-block__head')];
function openTraderMenu() {
    if (!allTraderMenu.length) {

    } else {
        allTraderMenu.forEach((li) => {
            li.addEventListener('click', () => {
                li.closest('.full-block__line').classList.toggle('open');
            })
        })
    }
};
openTraderMenu();

let allTextApartTables = [...document.querySelectorAll('.text-apart table')];

function takeTablesClass() {
    if(!allTextApartTables.length) {

    } else {
        allTextApartTables.forEach((tb) => {
            tb.classList.add('has-background');
        });
    }
};

takeTablesClass();


let customBlockTarif = [...document.querySelectorAll('.price-license__block-custom')];

let footerNewsSelectTabs = [...document.querySelectorAll('.footer__select > span')];

function selectNewsCheck() {
    if (!footerNewsSelectTabs.length) {

    } else {
        footerNewsSelectTabs.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.footer__select').classList.toggle('open');
            })
        })
    }
};

selectNewsCheck();


// function changeBlockTarifHeight() {
//     if (!customBlockTarif.length) {
//
//     } else {
//         setTimeout(() => {
//             customBlockTarif = [...document.querySelectorAll('.price-license__block-custom')];
//             customBlockTarif.forEach((br) => {
//                 let leftSide = [...br.querySelectorAll('.price-license__left .price-license__line')];
//                 let rightSide = [...br.querySelectorAll('.price-license__right .price-license__line')];
//                 leftSide.forEach((lf, l) => {
//                     console.log(lf.offsetHeight);
//                     rightSide[l].style.height = `${lf.offsetHeight}px`;
//                 } )
//             })
//         }, 3000);
//
//     }
// }
//
//
// changeBlockTarifHeight();


