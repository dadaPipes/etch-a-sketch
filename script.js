const square = document.querySelector(".square");
const gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const row = createElementWithClass("div", "square__row");
    square.appendChild(row);

    for (let j = 0; j < gridSize; j++) {
        const column = createElementWithClass("div", "square__column");
        row.appendChild(column);
    }
}

function createElementWithClass(type, className) {
    const element = document.createElement(type);
    element.className = className;
    return element;
}
