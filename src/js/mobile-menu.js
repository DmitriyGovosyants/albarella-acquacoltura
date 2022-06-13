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
    document.addEventListener('click', handleOutsideMobMenuClose);
}

const handleMobMenuClose = () => {
    refs.mobileMenu.classList.remove('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = "";
    document.removeEventListener('click', handleOutsideMobMenuClose);
}

const handleOutsideMobMenuClose = (e) => {
    const targetMobMenu = e.target.closest('.menu');
    const targetMobMenuOpenBtn = e.target.classList.contains('js-menu-mob-outside-close');

    if (!targetMobMenu && !targetMobMenuOpenBtn) {
        handleMobMenuClose();
    }
}

const handleMobMenuIfDesktopClose = e => {
    if (!e.matches) return;
    handleMobMenuClose();
}

const handleMobMenuAnchorTo = e => {
    if (e.target.nodeName !== "A") return;
    handleMobMenuClose();
}

refs.openMenuBtn.addEventListener('click', handleMobMenuOpen);
refs.closeMenuBtn.addEventListener('click', handleMobMenuClose);
window.matchMedia('(min-width: 1140px)').addEventListener('change', handleMobMenuIfDesktopClose);

refs.mobileMenuNav.addEventListener('click', handleMobMenuAnchorTo);