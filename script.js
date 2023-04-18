// load standard grid size of 16x16 on page load
window.onload = updateGridSize(16)


// remove current grid then generate a new one with the desired size
function updateGridSize(gridSize) {
    removeGrid();
    const gridContainer = document.querySelector(".grid-container");
    // column generation
    for (let i = 0; i < gridSize; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        // tile generation and styling
        for (let j = 0; j < gridSize; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridColumn.appendChild(gridItem);
            gridItem.style.backgroundColor = "#d8d8d8";
            gridItem.style.border = "solid";
            gridItem.style.borderWidth = "1px";
            gridItem.style.borderColor = "#c4c4c4";
            gridItem.style.aspectRatio = "1 / 1";
        }
        gridContainer.appendChild(gridColumn);
        gridColumn.style.flex = "1 1 auto"
    }
    // function is used to keep the same tile paint after changing grid size
    useCurrentColor();
}

function removeGrid() {
    const gridItem = document.querySelectorAll(".grid-item");
    const gridColumn = document.querySelectorAll(".grid-column");
    for (let i = 0; i < gridColumn.length; i++) {
        for (let j = 0; j < gridItem.length; j++) {
            gridItem[j].remove();
        }
        gridColumn[i].remove();
    }
}

function useCurrentColor() {
    const rgb = document.querySelector(".rgb");
    updateGridColor(rgb.value);
    rgb.oninput = () => {
        updateGridColor(rgb.value);
    }
}

function useRainbowColor() {
    const gridItem = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', ()=> {
            gridItem[i].style.backgroundColor = setRainbowColor();
            gridItem[i].style.borderColor = "#6363633b";
        })
    }
}

function useEraser() {
    const gridItem = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', ()=> {
            gridItem[i].style.backgroundColor = "#d8d8d8";
            gridItem[i].style.borderColor = "#c4c4c4"
        })
    }
}

function cleanGrid() {
    const gridItem = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = "#d8d8d8";
        gridItem[i].style.borderColor = "#c4c4c4";
    }
}

function updateGridColor(color) {
    const gridItem = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', ()=> {
            gridItem[i].style.backgroundColor = color;
            gridItem[i].style.borderColor = "#6363633b";
        })
    }
}

function setRainbowColor() {
    return randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

// Grid size slider
const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");
slider.oninput = () => {
    sliderText.textContent = `${slider.value}x${slider.value}`;
    updateGridSize(slider.value);
}
