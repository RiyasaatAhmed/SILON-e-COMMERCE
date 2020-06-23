const navSlide = () =>
{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#nav-bar img + ul');
    const n = document.querySelector('.n');
    const mobileSize = window.matchMedia('(max-width : 500px)');

    if(mobileSize.matches){

        nav.addEventListener('click', () =>{

            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
    
        });
    }
    else
    {
        nav.classList.remove('nav-active');
    }
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });


    window.addEventListener('scroll', () =>{
        if(window.scrollY > 150){
            n.style.opacity = 0.9;
        }
        else{
            n.style.opacity = 1;
        }

    });
    
    $('.n a').on('click', function(event) {
        if(this.hash !== ''){

            event.preventDefault();
            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 200
                },
                2000

            );
        }
    });
}

navSlide();