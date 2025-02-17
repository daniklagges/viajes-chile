$(document).ready(function() {
    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Tooltip initialization
    $('[data-bs-toggle="tooltip"]').tooltip();
});
