// // Solution 1
// const JsHeading = document.querySelector('.hl');
// const spacing = document.getElementById('spacing');
// const blur = document.getElementById('blur');
// const baseColor = document.getElementById('base');
// const img = document.querySelector('img');
const inputs = document.querySelectorAll('.controls input');

function updateCSSVariables() {
    // // Solution 1
    // JsHeading.style.color = baseColor.value;
    // img.style.border = `solid ${spacing.value}px ${baseColor.value}`;
    // img.style.filter = `blur(${blur.value}px)`;

    // Solution 2
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// // Solution 1
// updateCSSVariables();

inputs.forEach(input => {
    input.addEventListener('change', updateCSSVariables);
    input.addEventListener('mousemove', updateCSSVariables);
});