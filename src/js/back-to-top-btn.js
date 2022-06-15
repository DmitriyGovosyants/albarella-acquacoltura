import throttle from "lodash.throttle";
import SmoothScroll from "smooth-scroll";
import {refs} from './refs';

const scroll = new SmoothScroll();

document.addEventListener('scroll', throttle(scrollTop, 500));
refs.backToTopBtn.addEventListener('click', handleBackToTop);

function scrollTop() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        refs.backToTopBtn.style.display = "flex";
    } else {
        refs.backToTopBtn.style.display = "none";
    };
}

function handleBackToTop() {
    scroll.animateScroll(document.body, { speed: 500, easing: 'Linear' });
}