let gridSize = 16;
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let j = 0; j < gridSize; j++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridRow.appendChild(gridItem);

        gridItem.style.backgroundColor = "#c4c4c4"
        gridItem.style.border = "solid"
        gridItem.style.borderWidth = "1px"
        gridItem.style.borderColor = "#d8d8d8"
        gridItem.style.aspectRatio = "1 / 1"
    }
    gridContainer.appendChild(gridRow);
    gridRow.style.flex = "1 1 auto"
}

