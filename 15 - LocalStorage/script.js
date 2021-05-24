const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkButton = document.querySelector('.check-button');
const uncheckButton = document.querySelector('.uncheck-button');
const clearButton = document.querySelector('.clear-button');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
            <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function selectAll(checkStatus) {
    items.forEach(item => item.done = checkStatus);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function clearAll() {
    itemsList.innerHTML = '';
    items = [];
    localStorage.removeItem('items');
}

populateList(items, itemsList);
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkButton.addEventListener('click', () => selectAll(true));
uncheckButton.addEventListener('click', () => selectAll(false));
clearButton.addEventListener('click', clearAll);