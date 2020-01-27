$(document).ready(function () {

    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    $('.js--scroll-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 1000);
    })

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

        $('.js--wp-1').waypoint(function(){
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js--wp-2').waypoint(function(){
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });

        $('.js--wp-3').waypoint(function(){
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js--wp-4').waypoint(function(){
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '50%'
        });

        $('.js--nav-icon').click(function(){
            var nav = $('.js--main-nav');

            nav.slideToggle(200);
        });

var modal=document.getElementById("portfolioModal1");
var portPhoto = $(".portPhoto");
var closeBtn = document.getElementsByClassName('closeBtn')[0];
portPhoto.click(openModal)
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
function openModal(event){
    console.log("just checking.. tee he he");
    var portfolioText;
    var btnId = $(this).attr('id');
    $.getJSON('assets/js/portfolio-text.json', function(portfolioText){
        var titleText = portfolioText[btnId].title;
        document.getElementById("project-header-name").innerHTML = titleText;
        var bodyText = portfolioText[btnId].body;
        document.getElementById("project-body").innerHTML = bodyText;
        var appLink= portfolioText[btnId].link;
        var hrefLinkId = document.getElementById("href-link");
        hrefLinkId.innerHTML =  portfolioText[btnId].cta;
        hrefLinkId.setAttribute('href', appLink);
        modal.style.display = "block";
    });
};

function closeModal(){
    modal.style.display = "none";
};

function clickOutside(e){
    if(e.target == modal){
    modal.style.display = "none";
    };
};


});