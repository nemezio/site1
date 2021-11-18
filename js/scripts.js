/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContetLoaded', event => {
    //Função de redução da Navbar
    var navbarShrink = function(){
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if(!navbarCollapsible){
            return;
        }
        if(window.scrollY === 0){
            navbarCollapsible.classList.remove('navbar-shrink')
        }else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };
    //encolher a barra de navegação
    navbarShrink();

    //reduza a barra de navegação quando a página é rolada
    document.addEventListener('scroll', navbarShrink);

    //Ative Bootstrap scrollspy no elemento de navegação principal
    const mainNav = document.body.querySelector('#mainNav');
    if(mainNav){
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };
    //Recolher a barra de navegação responsiva quando o toggler estiver visível
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem){
        responsiveNavItem.addEventListener('click', () => {
            if(window.getComputedStyle(navbarToggler).display !== 'none'){
                navbarToggler.click();
            }
        });
    });
});