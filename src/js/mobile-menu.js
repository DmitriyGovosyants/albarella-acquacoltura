const refs = {
    mobileMenu: document.querySelector('.js-menu-mob'),
    openMenuBtn: document.querySelector('.js-menu-mob-btn-open'),
    closeMenuBtn: document.querySelector('.js-menu-mob-btn-close'),
    mobileMenuNav: document.querySelector('.js-menu-mob-nav'),
}

const handleMobMenuOpen = () => {
    refs.mobileMenu.classList.add('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', true);
    document.body.style.overflow = "hidden";
}

const handleMobMenuClose = () => {
    refs.mobileMenu.classList.remove('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = "";
}

const handleMobMenuIfTabletClose = e => {
    if (!e.matches) return;
    handleMobMenuClose();
}

const handleMobMenuAnchorTo = e => {
    if (e.target.nodeName !== "A") return;
    handleMobMenuClose();
}

refs.openMenuBtn.addEventListener('click', handleMobMenuOpen);
refs.closeMenuBtn.addEventListener('click', handleMobMenuClose);
window.matchMedia('(min-width: 1140px)').addEventListener('change', handleMobMenuIfTabletClose);

refs.mobileMenuNav.addEventListener('click', handleMobMenuAnchorTo);