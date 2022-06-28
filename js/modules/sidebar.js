// sticky sidebar

// document.addEventListener('scroll', function () {
//     stickify('.blog__wrapper', '.fmenu');
// });

document.addEventListener('scroll', function () {
    stickify('.projects__wrapper', '.fmenu');
});

function stickify(wrapperSelector, stickyElSelector) {
    let wrapper = document.querySelector(wrapperSelector);
    let stickyEl = document.querySelector(stickyElSelector);

    let wrapperRect = wrapper.getBoundingClientRect();
    let stickyRect = stickyEl.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (wrapperRect.bottom < windowHeight + 110) {
        // stickyEl.classList.add('bottom');
        stickyEl.classList.remove('fixed');
    } else if (wrapperRect.top < 110) {
        stickyEl.classList.add('fixed');
        stickyEl.classList.remove('bottom');
    }
    else if (stickyRect.top <= wrapperRect.top) {
        stickyEl.classList.remove('fixed');
        stickyEl.classList.remove('bottom');
    }
}

