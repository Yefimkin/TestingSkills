const gridContainer = document.getElementById("grid-container");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const colorPicker = document.getElementById("colorPicker");
let gridSize = 10;

function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 20px)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 20px)`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("click", () => {
      gridItem.style.backgroundColor = colorPicker.value;
    });
    gridContainer.appendChild(gridItem);
  }
}

increaseButton.addEventListener("click", () => {
  gridSize++;
  createGrid(gridSize);
});

decreaseButton.addEventListener("click", () => {
  if (gridSize > 1) {
    gridSize--;
    createGrid(gridSize);
  }
});

createGrid(gridSize);
