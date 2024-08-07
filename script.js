document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid-container");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");
  const colorPicker = document.getElementById("colorPicker");
  let gridSize = 10;

  function createGrid(size) {
    // Очищаем контейнер сетки перед созданием новой сетки
    gridContainer.innerHTML = "";

    // Настраиваем стиль grid-template-columns и grid-template-rows в зависимости от размера
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 20px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 20px)`;

    // Создаем нужное количество элементов в сетке
    for (let i = 0; i < size * size; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // Добавляем обработчик события клика для закрашивания клетки
      gridItem.addEventListener("click", () => {
        gridItem.style.backgroundColor = colorPicker.value;
      });

      // Добавляем клетку в контейнер сетки
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
});
