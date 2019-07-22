$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: false,
        scrollHorizontally: true
    });

    new fullpage('#home', '#works', '#contact', '#footer', {
        sectionsColor: ['#FCDC44', '#F0C8B9', '#994222', 'FBBA1E'],
        verticalCentered: true,
        keyboardScrolling: true,
        anchors: ['home','works','contact','footer'],
        menu: '#navbar',

    });


    //methods
    $.fn.fullpage.setAllowScrolling(false);
});

