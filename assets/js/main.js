(function () {
    "use strict"; 

    window.onload = function () { 
        window.setTimeout(fadeout, 500); 
    }
    
    function fadeout() { 
        if (document.querySelector('.preloader')) {
            document.querySelector('.preloader').style.opacity = '0'; 
            document.querySelector('.preloader').style.display = 'none'; 
        }
    }
    
    window.onscroll = function () {
        var header_navbar = document.getElementById("header_navbar"); 
        var logo = document.querySelector("img#logo"); 
        var sticky = header_navbar.offsetTop; 
        var isSimpleNav = header_navbar.classList.contains("simple_nav");
        
        if (!isSimpleNav) {
            if (window.pageYOffset > sticky) {
                logo.setAttribute("src", "assets/images/logo-2.svg") 
           } else { 
                header_navbar.classList.remove("sticky"); 
                logo.setAttribute("src", "assets/images/logo.svg") 
           }
        }
        //  else {
        //     navbarToggler.classList.remove("active"); 
        // }
        

        var backToTo = document.querySelector(".back-to-top"); 
        
        if (backToTo) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { 
                backToTo.style.display = "block"; 
            } else { 
                backToTo.style.display = "none"; 
            }
        }  
    }; 
    
    var pageLink = document.querySelectorAll('.nav-link'); 
    
    pageLink.forEach(elem => { 
        elem.addEventListener('click', e => { 
            e.preventDefault(); 
            document.querySelector(elem.getAttribute('href')).scrollIntoView({ 
                behavior: 'smooth', offsetTop: 1 - 60, 
            }); 
        }); 
      }
    ); 
    
    // function onScroll(event) { 
    //     var sections = document.querySelectorAll('.page-scroll'); 
    //     var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; 
        
    //     for (var i = 0; i < sections.length; i++) { 
    //         var currLink = sections[i]; 
    //         var val = currLink.getAttribute('href'); 
    //         var refElement = document.querySelector(val); 
    //         var scrollTopMinus = scrollPos + 73; 
            
    //         if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) { 
    //             document.querySelector('.page-scroll').classList.remove('active'); 
    //             currLink.classList.add('active'); 
    //         } else { 
    //             currLink.classList.remove('active'); 
    //         } 
    //     } 
    // }; 
    
    //window.document.addEventListener('scroll', onScroll); 

    let navbarToggler = document.querySelector(".navbar-toggler"); 
    var navbarCollapse = document.querySelector(".navbar-collapse"); 

    document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => { 
        navbarToggler.classList.remove("active"); 
        navbarCollapse.classList.remove('show') 
    }));

    var wow = new WOW({ mobile: false }); 
    wow.init(); 
    
    setTimeout(function () { 
        new Glide('.glide', { type: 'slider', perView: 1, animationDuration: 1000 }).mount() 
    }, 500);
})();