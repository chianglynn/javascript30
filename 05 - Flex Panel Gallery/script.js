const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
    panels.forEach(panel => panel.classList.remove('open', 'open-active'));
}

function toggleOpen(e) {
    // Click panels
    if (e.target.classList.contains('panel')) e.target.classList.toggle('open');
    // Click texts
    if (e.target.classList.contains('text') && e.target.parentNode.classList.contains('panel')) e.target.parentNode.classList.toggle('open');
}

function toggleActive(e) {
    // Click panels
    if (e.target.classList.contains('panel')) e.target.classList.toggle('open-active');
    // Click texts
    if (e.target.classList.contains('text') && e.target.parentNode.classList.contains('panel')) e.target.parentNode.classList.toggle('open-active');
}

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        removeActiveClasses();
        toggleOpen(e);
        setTimeout(function () { toggleActive(e) }, 600);
    });
});