$(document).ready(function () {
    var flag = 0;

    $(".nav a").click(function () {
        $(this).addClass("active");
        $(".nav a").not(this).removeClass("active");
    });

    $(".hamburger").click(function () {
        if (flag == 0) {
            $(".hamburger-img").attr("src", "images/iks.svg");
            flag = 1;
        } else if (flag == 1) {
            $(".hamburger-img").attr("src", "images/hamburger_menu.svg");
            flag = 0;
        }

        $(".menu").toggleClass("on");

        $(".nav li").click(function () {
            $(".menu").removeClass("on");
            $(".hamburger-img").attr("src", "images/hamburger_menu.svg");
            flag = 0;
        });

        $(".menu-icon svg").click(function () {
            $(".menu").removeClass("on");
            $(".hamburger-img").attr("src", "images/hamburger_menu.svg");
            flag = 0;
        });

        $(".header h1 a").click(function () {
            $(".menu").removeClass("on");
            $(".hamburger-img").attr("src", "images/hamburger_menu.svg");
            flag = 0;
        });

        $(window).resize(function () {

            if ($(window).outerWidth() >= 1024) {
                $(".menu").removeClass("on");
                $(".hamburger-img").attr("src", "images/hamburger_menu.svg");
                flag = 0;
            }
        });


    });
    $(".circle-square svg").click(function () {
        $(this).addClass("rotate").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass("rotate");
        });
    });

});
