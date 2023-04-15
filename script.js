window.onload = updateGridSize(16)

function updateGridSize(gridSize) {
    removeGrid();
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < gridSize; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridRow.appendChild(gridItem);
            gridItem.style.backgroundColor = "#d8d8d8";
            gridItem.style.border = "solid";
            gridItem.style.borderWidth = "1px";
            gridItem.style.borderColor = "#c4c4c4";
            gridItem.style.aspectRatio = "1 / 1";
        }
        gridContainer.appendChild(gridRow);
        gridRow.style.flex = "1 1 auto"
    }
    useCurrentColor();
}

function removeGrid() {
    const gridItem = document.querySelectorAll(".grid-item");
    const gridRow = document.querySelectorAll(".grid-row");
    for (let i = 0; i < gridRow.length; i++) {
        for (let j = 0; j < gridItem.length; j++) {
            gridItem[j].remove();
        }
        gridRow[i].remove();
    }
}

function useRainbow() {
    const gridItem = document.querySelectorAll(".grid-item");
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', ()=> {
            gridItem[i].style.backgroundColor = setRandomColor();
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

function setRandomColor() {
    return randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function useCurrentColor() {
    const rgb = document.querySelector(".rgb");
    updateGridColor(rgb.value);
    rgb.oninput = () => {
        updateGridColor(rgb.value);
    }
}

const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");
slider.oninput = () => {
    sliderText.textContent = `${slider.value}x${slider.value}`;
    updateGridSize(slider.value);
}
