const nav = document.getElementById('main');

// Solution 1
// const topOfNav = nav.offsetTop;
// function fixNav() {
//     if (window.scrollY >= topOfNav) {
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         document.body.classList.add('fixed-nav');
//     } else {
//         document.body.style.paddingTop = 0;
//         document.body.classList.remove('fixed-nav');
//     }
// }
// window.addEventListener('scroll', fixNav);

// Solution 2
const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;
const fixNav = entries => {
    const [entry] = entries;
    if (!entry.isIntersecting) document.body.classList.add('fixed-nav');
    else document.body.classList.remove('fixed-nav');
};
const headerObserver = new IntersectionObserver(fixNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);