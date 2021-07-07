// Solution 1: No need to hold down shift key
// const inputs = document.querySelectorAll('input');
// const indexArr = [];

// inputs.forEach((input, index) => {
//   input.addEventListener('click', (e) => {
//     if (input.checked) indexArr.push(index);
//     if (!input.checked) {
//       const uncheckedIndex = indexArr.indexOf(index);
//       indexArr.splice(uncheckedIndex, 1);
//     }
//     if (e.shiftKey) {
//       for (let i = Math.min(...indexArr); i < Math.max(...indexArr); i++) {
//         inputs[i].checked = true;
//         if (!indexArr.includes(i)) indexArr.push(i);
//       }
//     }
//   });
// });

// Solution 2
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
      if (inBetween) checkbox.checked = true;
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));