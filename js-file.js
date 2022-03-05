const container = document.querySelector(".container");

// Computes random r, g, and b values and returns in a CSS style text.
function randomRGB() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Simple function to return the black rgb values in a CSS style text.
function black() {
    return `rgb(${0}, ${0}, ${0})`;
}


// This function will take a function that returns rgb values in a CSS style text as an argument.
// Then it will change the color of the div when the mouse hover over it according to the color parameter.
function hover(color) {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style['background-color'] = color();
        });
    });
}

// This function creates a sizexsize grid. The first parameter size will take an integer value to construct a grid using 'div' elements.
// The second parameter color will take a function that returns rgb values in a CSS style text to pass it to the hover(color) function.
function grid(size, color) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            let cell = document.createElement('div'); // cell is to be embedded within column 'divs'.
            cell.classList.add('cell');
            cell.style.width = `${600 / size}px`; // to make the width depending on the number of grid.
            cell.style.height = `${600 / size}px`; // to make the height depending on the number of grid.
            column.appendChild(cell);
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    hover(color);
}

// This function is to reset grid into white color and create new grid again by asking the user to give the dimensions.
function reset(color) {

    gridSize = parseInt(prompt("Set the number of squares per side up to 100."));
    if (gridSize <= 100) {
        const rows = document.querySelectorAll('.row');
        rows.forEach((row) => {
            row.remove();
        });
        grid(gridSize, color);
    } else {
        gridSize = parseInt(prompt("Set the number of squares per side up to 100."));
    }
}

grid(16, randomRGB);

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', () => {
    reset(randomRGB);
});

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => {
    reset(black);
});


