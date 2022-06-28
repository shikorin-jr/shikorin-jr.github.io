

window.addEventListener("DOMContentLoaded", function () {
  
  // Hamburger

  const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const hmenu = document.querySelector('.hmenu');
    const navLinks = document.querySelectorAll('.hmenu li');

    hamburger.addEventListener('click', () => {
      hmenu.classList.toggle('nav-active');
      document.body.classList.toggle('hidden');
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 3s ease forwards ${index / 7}s`;
        }
      });
      hamburger.classList.toggle('toggle')
    });
  };

  const app = () => {
    navSlide();
  };

  app();

  // sticky sidebar
  // const container = document.querySelector('.blog__wrapper');
  // const stickySidebar = document.querySelector('.fmenu');

  

  // function stickify(wrapper, stickyEl) {
  //   let wrapperRect = wrapper.getBoundingClientRect();
  //   let stickyRect = stickyEl.getBoundingClientRect();
  //   let windowHeight = window.innerHeight;

  //   if (wrapperRect.bottom < windowHeight + 110) {
  //     stickyEl.classList.add('bottom');
  //     stickyEl.classList.remove('fixed');
  //   } else if (wrapperRect.top < 110) {
  //     stickyEl.classList.add('fixed');
  //     stickyEl.classList.remove('bottom');
  //   }
  //   else if (stickyRect.top <= wrapperRect.top) {
  //     stickyEl.classList.remove('fixed');
  //     stickyEl.classList.remove('bottom');
  //   }
  // }
});
