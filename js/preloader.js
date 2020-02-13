document.body.onload = function () {

    setTimeout(function() {
        let preloader = document.getElementById('preloader-page');
        if ( !preloader.classList.contains('unvisible') )
        {
            preloader.className = 'preloader unvisible';
        }
    }, 600);

}