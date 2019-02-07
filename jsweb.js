var $root = $('html, body');
$('a').on('click', function(event){
    var hash = this.hash;
    if (hash && this.href.slice(0, -hash.length-1) == location.href.slice(0, -location.hash.length-1)) {
        $root.animate({
            scrollTop: $(hash).offset().top
        }, 'slow', function() {
            location.hash = hash;
        });
        return false;
    }
});

window.sr = new ScrollReveal()
sr.reveal('img', { origin: 'top', distance: '20px', duration: 2000, });