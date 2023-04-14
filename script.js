let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let j = 0; j < gridSize; j++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridRow.appendChild(gridItem);
    }
    gridContainer.appendChild(gridRow);
}