// Closes the sidebar menu
$("#menu-close").click(function(e) {
    //e.preventDefault();
    //$("#sidebar-wrapper").toggleClass("active");
});


// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


$("#theMenu").click(function() {
    $("#sideBar, #theClose").animate({width:'toggle'}, -350);
    $("#theMenu").animate({width:'toggle'}, 350);
});


$("#theClose, #homeLink, #aboutLink, #serviceLink, #galleryLink, #contactLink").click(function() {
    $("#theMenu").animate({width:'toggle'}, -350);
    $("#sideBar, #theClose").animate({width:'toggle'}, 350);
});

$("#facebook").click(function() {
    window.open(
        "https://www.facebook.com/Contarh-146942322374267/?fref=ts",
        '_blank'
    );
});  


//Classes para transição das imagens
setInterval(function(){
    var $header = $("#top");

    if ($header.hasClass("bg4") == true)
    {
        $header.removeClass("bg4");
        $header.fadeOut("fast");
        $header.fadeIn("fast");
       $header.addClass("bg1");
    }
    else if ($header.hasClass("bg1") == true)
    {
        $header.removeClass("bg1");
        $header.fadeOut("fast");
        $header.fadeIn("fast");
        $header.addClass("bg4");
    }
}, 4000);

$("#inBtn, #sbBtn, #scBtn, #cgBtn, #prBtn, #orBtn, #glBtn, #pfBtn, #ctBtn").click(function() {
    //alert('vai');
}); 



// Scrolls to the selected menu item on the page
$(function() {
    /*$('a[href*=#]:not([href=#])').click(function() {*/
        //linkis
    $(".linkis a").click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


