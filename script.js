const grid = document.querySelector(".grid");
setElementSize(grid, 30, 30)

let gridItemSize = 16;
createGrid(gridItemSize);

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = createAndAppendElement("div", "grid__row", grid);
    
        for (let j = 0; j < size; j++) {
            const column = createAndAppendElement("div", "grid__column", row);
            column.addEventListener("mouseover", () => column.style.backgroundColor = "green");
        }
    }
    setElementFraction("grid__column", "width", 1, size);
    setElementFraction("grid__row", "height", 1, size);
}

function setElementSize(element, width, height) {
    element.style.width = width + "em";
    element.style.height = height + "em";
}

function createAndAppendElement(type, className, parent) {
    const element = document.createElement(type);
    element.className = className;
    parent.appendChild(element);
    return element;
}

function setElementFraction(className, property, numerator, denominator) {
    const percentage = (numerator / denominator) * 100;
    const elements = document.getElementsByClassName(className);
    
    for (let element of elements) {
        element.style[property] = percentage + "%";
    }
}

function setGridSize() {
    let gridSize = validateGridNumber(prompt("Type a number between 10 and 100"));

    // Clear the grid before creating a new one
    grid.innerHTML = '';

    // Create a new grid with the user-specified size
    createGrid(gridSize);
}

function validateGridNumber(userInput) {
    let gridNumber = Number(userInput);

    while (isNaN(gridNumber) || gridNumber < 10 || gridNumber > 100) {
        
        if (isNaN(gridNumber)) {
            userInput = prompt("That is not a valid number");
        } else if (gridNumber < 10) {
            userInput = prompt("Number must be 10 or higher");
        } else {
            userInput = prompt("Number must be 100 or lower");
        }
        gridNumber = Number(userInput);
    }
    
    return gridNumber;
}