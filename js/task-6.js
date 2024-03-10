function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  amount = input.value;
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.append(box);
    }
  }
  input.value = '';
};

function destroyBoxes() {
  boxesContainer.innerHTML = '';
};

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);