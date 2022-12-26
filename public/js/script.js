window.addEventListener 
    ? window.addEventListener('load',script,false)
    : window.attachEvent && window.attachEvent('onload',script);
function script() {
    var rev = $('.reviews')
        clients = $('.clients'),
        year = $('#YYYY');

        AOS.init();

        
        $('img[data-src]').each(function() {
            let src = $(this).data('src'),
            rdm = new Date().getMilliseconds();
            $(this).attr('src', src+'?'+rdm);
            $(this).removeAttr('data-src');
            setTimeout(() => {
                AOS.init({duration:1500});
            }, 500);
    });
    $('.navbar-toggler').on('click', function() { $('body').toggleClass('menu-open');})
    reviews();

    if (clients.length > 0) {
        setTimeout(function() {
            clients.each(function() {
                $(this).owlCarousel({
                    loop:true,margin:10,nav:false,autoplay:true,
                    responsive:{0:{items:1},600:{items:3},1000:{items:5}}
                })
            })
        },1000);
    }

    if (year.length > 0) {
        var YYYY = new Date().getFullYear();
        year.html(YYYY);
    }


    function reviews() {
        setTimeout(function() {
            rev.each(function () {
                $(this).owlCarousel({
                    loop:true,autoplay:true,dots:true,nav:true,items:1,
                    navText: ['<img style="transform:rotate(180deg)" src="images/hax.webp">','<img src="images/hax.webp">']
                })
            });
        },1000);
    }
    
}