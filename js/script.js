!(function (e) {
    "use strict";

    function a() {
        if (e(".main-header").length) {
            var a = e(window).scrollTop(),
                t = e(".main-header"),
                n = e(".scroll-top");
            a >= 110 ? (t.addClass("fixed-header"), n.addClass("open")) : (t.removeClass("fixed-header"), n.removeClass("open"));
        }
    }

    if (
        (e(".preloader-close").length &&
        e(".preloader-close").on("click", function () {
            e(".loader-wrap").delay(200).fadeOut(500);
        }),
            a(),
        e(".main-header li.dropdown ul").length && e(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'),
            e(".mobile-menu").length)
    ) {
        e(".mobile-menu .menu-box").mCustomScrollbar();
        var t = e(".main-header .menu-area .main-menu").html();
        e(".mobile-menu .menu-box .menu-outer").append(t),
            e(".sticky-header .main-menu").append(t),
            e(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
                e(this).toggleClass("open"), e(this).prev("ul").slideToggle(500);
            }),
            e(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
                e(this).prev(".megamenu").slideToggle(900);
            }),
            e(".mobile-nav-toggler").on("click", function () {
                e("body").addClass("mobile-menu-visible");
            }),
            e(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on("click", function () {
                e("body").removeClass("mobile-menu-visible");
            });
    }
    (e(".scroll-to-target").length &&
    e(".scroll-to-target").on("click", function () {
        var a = e(this).attr("data-target");
        e("html, body").animate({scrollTop: e(a).offset().top}, 1e3);
    }),
        e(".wow").length) && new WOW({mobile: !1}).init();

    function n() {
        if (e(".sortable-masonry").length) {
            var a = e(window),
                t = e(".sortable-masonry .items-container"),
                n = e(".filter-btns");
            t.isotope({
                filter: "*",
                masonry: {columnWidth: ".masonry-item.small-column"},
                animationOptions: {duration: 500, easing: "linear"}
            }),
                n.find("li").on("click", function () {
                    var a = e(this).attr("data-filter");
                    try {
                        t.isotope({filter: a, animationOptions: {duration: 500, easing: "linear", queue: !1}});
                    } catch (e) {
                    }
                    return !1;
                }),
                a.on("resize", function () {
                    var e = n.find("li.active").attr("data-filter");
                    t.isotope({filter: e, animationOptions: {duration: 500, easing: "linear", queue: !1}});
                });
            var s = e(".filter-btns li");
            s.on("click", function () {
                var a = e(this);
                a.hasClass("active") || (s.removeClass("active"), a.addClass("active"));
            });
        }
    }

    function s() {
        e(".page_direction").length &&
        e(".direction_switch button").on("click", function () {
            e("body").toggleClass(function () {
                return e(this).is(".rtl, .ltr") ? "rtl ltr" : "rtl";
            });
        });
    }

    jQuery.extend(jQuery.validator.messages, {
        required: "لازم است این قسمت را تکمیل کنید.",
        remote: "Please fix this field.",
        email: "لطفاً یک آدرس ایمیل صحیح وارد کنید.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Please enter at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });
    e("#contact-form").length && e("#contact-form").validate({
        rules: {
            full_name: {required: !0},
            email: {required: !0, email: !0},
            phone: {required: !0},
            subject: {required: !0},
            message: {required: !0}
        }
    }),
    e(".count-box").length &&
    e(".count-box").appear(
        function () {
            var a = e(this),
                t = a.find(".count-text").attr("data-stop"),
                n = parseInt(a.find(".count-text").attr("data-speed"), 10);
            a.hasClass("counted") ||
            (a.addClass("counted"),
                e({countNum: a.find(".count-text").text()}).animate(
                    {countNum: t},
                    {
                        duration: n,
                        easing: "linear",
                        step: function () {
                            a.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            a.find(".count-text").text(this.countNum);
                        },
                    }
                ));
        },
        {accY: 0}
    ),
    e(".lightbox-image").length && e(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: {media: {}}
    }),
    e(".tabs-box").length &&
    e(".tabs-box .tab-buttons .tab-btn").on("click", function (a) {
        a.preventDefault();
        var t = e(e(this).attr("data-tab"));
        if (e(t).is(":visible")) return !1;
        t.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"),
            e(this).addClass("active-btn"),
            t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),
            t.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"),
            e(t).fadeIn(300),
            e(t).addClass("active-tab");
    }),
    e(".pricing-tabs").length &&
    e(".pricing-tabs .tab-btns .tab-btn").on("click", function (a) {
        a.preventDefault();
        var t = e(e(this).attr("data-tab"));
        if (e(t).hasClass("actve-tab")) return !1;
        e(".pricing-tabs .tab-btns .tab-btn").removeClass("active-btn"), e(this).addClass("active-btn"), e(".pricing-tabs .pr-content .pr-tab").removeClass("active-tab"), e(t).addClass("active-tab");
    }),
    e(".accordion-box").length &&
    e(".accordion-box").on("click", ".acc-btn", function () {
        var a = e(this).parents(".accordion-box"),
            t = e(this).parents(".accordion");
        if ((!0 !== e(this).hasClass("active") && e(a).find(".accordion .acc-btn").removeClass("active"), e(this).next(".acc-content").is(":visible"))) return !1;
        e(this).addClass("active"), e(a).children(".accordion").removeClass("active-block"), e(a).find(".accordion").children(".acc-content").slideUp(300), t.addClass("active-block"), e(this).next(".acc-content").slideDown(300);
    }),
    e(".banner-carousel").length &&
    e(".banner-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        active: !0,
        smartSpeed: 1e3,
        autoplay: 6e3,
        navText: ['<span class="fal fa-long-arrow-left"></span>', '<span class="fal fa-long-arrow-right"></span>'],
        responsive: {0: {items: 1}, 600: {items: 1}, 800: {items: 1}, 1024: {items: 1}},
    }),
    e(".single-item-carousel").length &&
    e(".single-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 1e3,
        navText: ['<span class="far fa-long-arrow-left"></span>', '<span class="far fa-long-arrow-right"></span>'],
        responsive: {0: {items: 1}, 480: {items: 1}, 600: {items: 1}, 800: {items: 1}, 1200: {items: 1}},
    }),
    e(".two-column-carousel").length &&
    e(".two-column-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 1e3,
        navText: ['<span class="far fa-long-arrow-left"></span>', '<span class="far fa-long-arrow-right"></span>'],
        responsive: {0: {items: 1}, 480: {items: 1}, 600: {items: 1}, 800: {items: 2}, 1024: {items: 2}},
    }),
    e(".three-item-carousel").length &&
    e(".three-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 1e3,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {0: {items: 1}, 480: {items: 1}, 600: {items: 2}, 800: {items: 2}, 1024: {items: 3}},
    }),
    e(".four-item-carousel").length &&
    e(".four-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 1e3,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {0: {items: 1}, 480: {items: 2}, 600: {items: 2}, 800: {items: 3}, 1024: {items: 4}},
    }),
    e(".five-item-carousel").length &&
    e(".five-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 1e3,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {0: {items: 1}, 480: {items: 2}, 600: {items: 3}, 800: {items: 4}, 1024: {items: 5}},
    }),
    e(".scroll-nav").length && e(".scroll-nav").onePageNav(),
        n(),
    e(".count-bar").length &&
    e(".count-bar").appear(
        function () {
            var a = e(this),
                t = a.data("percent");
            e(a).css("width", t).addClass("counted");
        },
        {accY: -50}
    ),
        jQuery(document).on("ready", function () {
            jQuery, s();
        }),
        e(window).on("scroll", function () {
            a();
        }),
        e(window).on("load", function () {
            e(".loader-wrap").length && e(".loader-wrap").delay(1e3).fadeOut(500), n();
        });
    e('#date4').MdPersianDateTimePicker({
        targetTextSelector: '#consultation_date',
        fromDate: true,
        enableTimePicker: true,
        groupId: 'rangeSelector1',
        dateFormat: 'yyyy-MM-dd HH:mm',
        textFormat: 'yyyy-MM-dd HH:mm',
    });
})(window.jQuery);
