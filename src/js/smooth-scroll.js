const anchors = document.querySelectorAll('a[href*="#"]');

const handleAnchorTo = e => {
    e.preventDefault();
    
    const linkName = e.target.dataset.id;
    const elem = document.querySelector(`#${linkName}`);
      
    window.scroll({
        left: 0,
        top: elem.offsetTop - 80,
        behavior: 'smooth'
    });
}

for (let anchor of anchors) {
  anchor.addEventListener('click', handleAnchorTo);
}