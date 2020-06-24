const navSlide = () =>
{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#nav-bar img + ul');
    const mobileSize = window.matchMedia('(max-width : 500px)');




    // Hambuger Menu
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



    
    $('.nav-style a').on('click', function(event) {
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

    // Nav-bar Opacity 
    const n = document.querySelector('.nav-style');
    const sectionOne = document.querySelector('.sectionOne');
    const sectionOneOptions = { rootMargin: "-700px 0px 0px 0px"};
    const observerSectionOne = 
        new IntersectionObserver((entries,observerSectionOne) =>{

            entries.forEach(entry => {
                if(!entry.isIntersecting)
                {
                    n.style.opacity = 0.9;
                }
                else
                {
                    n.style.opacity = 1;
                }
            });
        }, sectionOneOptions)
    observerSectionOne.observe(sectionOne);

    // Parallax Transition
    const parallax = document.querySelectorAll('.parallax');
    const parallaxObserver = new IntersectionObserver((entries, parallaxObserver) => {

        entries.forEach(entry =>{
            if(entry.isIntersecting)
            {
                entry.target.classList.add('parallax-view');
                parallaxObserver.unobserve(entry.target);

            }
        });
    });
    parallax.forEach(para => {
        parallaxObserver.observe(para);
    });

    // Photos Transition
    const photosOptions = { rootMargin: "-40px 0px 0px 0px" };
    const photos = document.querySelectorAll('.photos');
    const photoObserver = new IntersectionObserver((entries, photoObserver) => {
        entries.forEach(entry => {
            if(entry.isIntersecting)
            {
                entry.target.classList.add('photos-in-view');
                photoObserver.unobserve(entry.target);
            }
        });
    }, photosOptions);
    photos.forEach(photo => {
        photoObserver.observe(photo);
    });
}

navSlide();