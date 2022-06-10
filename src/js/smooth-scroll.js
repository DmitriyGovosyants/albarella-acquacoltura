const anchors = document.querySelectorAll('a[href*="#"]');

const handleAnchorTo = e => {
    e.preventDefault();
    
    const anchorName = e.target.dataset.id;
    const anchor = document.querySelector(`#${anchorName}`);
      
    window.scroll({
        left: 0,
        top: anchor.offsetTop - 80,
        behavior: 'smooth'
    });
}

for (let anchor of anchors) {
  anchor.addEventListener('click', handleAnchorTo);
}