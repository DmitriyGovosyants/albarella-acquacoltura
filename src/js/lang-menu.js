import { langData } from "./lang-data";
const langMenuBtns = document.querySelectorAll('.js-lang-menu-btn');
const allLang = ['it', 'en'];

langMenuBtns.forEach(btn => btn.addEventListener('click', onLangSwitch))

function onLangSwitch(e) {
    const currentLang = e.target.textContent;
    location.href = window.location.pathname + '#' + currentLang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#it';
        location.reload();
    }
    // document.querySelector('title').innerHTML = langArr['unit'][hash];
    for (let key in langData) {
        let elem = document.querySelector('.lng-' + key);

        if (elem) {
            elem.innerHTML = langData[key][hash];
        }
    }
}

changeLanguage();