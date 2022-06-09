const refs = {
    mobileMenu: document.querySelector('.js-mob-menu'),
    openMenuBtn: document.querySelector('.js-mob-menu-btn-open'),
    closeMenuBtn: document.querySelector('.js-mob-menu-btn-close'),
}

const handleMobileMenuOpen = () => {
    refs.mobileMenu.classList.add('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', true);
    document.body.style.overflow = "hidden";
}

const handleMobileMenuClose = () => {
    refs.mobileMenu.classList.remove('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = "";
}

const handleMobileMenuIfTabletClose = e => {
    if (!e.matches) return;
    handleMobileMenuClose()
}

refs.openMenuBtn.addEventListener('click', handleMobileMenuOpen);
refs.closeMenuBtn.addEventListener('click', handleMobileMenuClose);
window.matchMedia('(min-width: 768px)').addEventListener('change', handleMobileMenuIfTabletClose);