let heading = document.querySelector('.heading'),
    interactive = document.querySelectorAll('.promo__interactive-span');

console.log(interactive);

interactive.forEach(element => {
    element.addEventListener("mouseenter", function( ) {
        heading.style.color = '#959595';
    }); 

    element.addEventListener("mouseleave", function( ) {
        heading.style.color = '#000';
    }); 
});



