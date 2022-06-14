import throttle from "lodash.throttle";
const topBtn = document.querySelector('.top-btn');

document.addEventListener('scroll', throttle(scrollTop, 500));
topBtn.addEventListener('click', topFunction);

function scrollTop() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    };
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}