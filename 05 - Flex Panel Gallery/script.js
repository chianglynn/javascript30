const panels = document.querySelectorAll('.panel');

function removeOpenClass() {
    panels.forEach(panel => {
        panel.classList.remove('open');
    });
}

function toggleOpen(e) {
    e.target.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
}

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        removeOpenClass();
        toggleOpen(e);
    });
    panel.addEventListener('transitionend', toggleActive);
});