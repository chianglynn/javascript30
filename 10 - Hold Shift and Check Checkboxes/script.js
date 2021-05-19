const inputs = document.querySelectorAll('input');
const indexArr = [];

inputs.forEach((input, index) => {
    input.addEventListener('click', () => {
        if (input.checked) indexArr.push(index);
        if (!input.checked) {
            const uncheckedIndex = indexArr.indexOf(index);
            indexArr.splice(uncheckedIndex, 1);
        }
        for (let i = Math.min(...indexArr); i < Math.max(...indexArr); i++) {
            inputs[i].checked = true;
            if (!indexArr.includes(i)) indexArr.push(i);
        }
    });
});