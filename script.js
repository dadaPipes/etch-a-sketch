const grid = document.querySelector(".grid");
setElementSize(grid, 30, 30)

let gridDimensions = 16;
createGrid(gridDimensions);

function createGrid(gridDimensions) {
    for (let i = 0; i < gridDimensions; i++) {
        const row = createAndAppendElement("div", "grid__row", grid);

        for (let j = 0; j < gridDimensions; j++) {
            const column = createAndAppendElement("div", "grid__column", row);
            column.addEventListener("mouseover", () => column.style.backgroundColor = "green");
        }
    }
    setElementSizeAsFraction("grid__column", "width", 1, gridDimensions);
    setElementSizeAsFraction("grid__row", "height", 1, gridDimensions);
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

/**
 * Dynamically sets the specified CSS property of all elements with the given class name
 * to a fraction of the total available space. 
 * This allows the grid to be responsive and adjust to different user-specified grid dimensions.
 *
 * @param {string} className - The class name of the elements to adjust.
 * @param {string} property - The CSS property to set (e.g., "width" or "height").
 * @param {number} numerator - The numerator of the fraction.
 * @param {number} denominator - The denominator of the fraction.
 */
function setElementSizeAsFraction(className, property, numerator, denominator) {
    const percentage = (numerator / denominator) * 100;
    const elements = document.getElementsByClassName(className);
    
    for (let element of elements) {
        element.style[property] = percentage + "%";
    }
}

/*
function setGridDimensions() {
    let gridDimensions = validateGridNumber(prompt("Type a number between 10 and 100"));

    // Clear the grid before creating a new one
    grid.innerHTML = '';

    createGrid(gridDimensions);
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

*/
function setGridDimensions() {
    let gridDimensions;

    let userInput = prompt("Type a number between 10 and 100");
    if (userInput === null) return;
    gridDimensions = validateGridNumber(userInput);
    
    if (gridDimensions === null) return; // Exit the function

    
    grid.innerHTML = ''; // Clear the grid before creating a new one

    createGrid(gridDimensions);
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

        if (userInput === null) {
            return null; // User clicked 'cancel'
        }

        gridNumber = Number(userInput);
    }

    return gridNumber;
}