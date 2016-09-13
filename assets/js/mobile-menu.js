window.addEventListener('load',function() {
    var btnMenu = document.querySelector('.buttonMenuMobile');
    var menu = document.querySelector('.mobileMenu-top');

    btnMenu.addEventListener('click', function() {
        this.classList.toggle('is-active');
        menu.classList.toggle('show');
    })


})
