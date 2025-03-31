// Pre Loader
$(window).on('load', function () {
    $('.loader-container').fadeOut(1000);
});

// Toggle Navbar
$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('show');
    });

    // Close navbar when clicking on a menu item
    $('.navbar ul li a').on('click', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('show');
    });

    // Scroll to top button
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('show');

        if ($(window).scrollTop() > 0) {
            $('#scroll-top').show();
        } else {
            $('#scroll-top').hide();
        }
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});

// Initialize Tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// Initialize ScrollReveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home .content h2, .about .row .content', { origin: 'top' });
ScrollReveal().reveal('.home .content p, .about .row .image', { origin: 'bottom' });
ScrollReveal().reveal('.home .content .btn', { origin: 'bottom', delay: 400 });
ScrollReveal().reveal('.home .image, .about .row .content .btn', { origin: 'right' });
ScrollReveal().reveal('.home .content .social-icons', { origin: 'left' });
