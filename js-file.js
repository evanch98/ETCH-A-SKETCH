const container = document.querySelector(".container");

function randomRGB() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function black() {
    return `rgb(${0}, ${0}, ${0})`;
}

function hover(color) {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style['background-color'] = color();
        });
    });
}

function grid(size, color) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${600 / size}px`;
            cell.style.height = `${600 / size}px`;
            column.appendChild(cell);
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    hover(color);
}

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


