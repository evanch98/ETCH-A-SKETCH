const container = document.querySelector(".container");

function randomRGB() {
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function grid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            let cell = document.createElement('div');
            cell.classList.add('cell');
            column.appendChild(cell);
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    
    const cells = document.querySelectorAll('.cell');
    
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `background: ${randomRGB()}`);
        });
    });
}

grid(16)

function reset() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.setAttribute('style', `background: ${randomRGB()}`);
    });
    gridSize = parseInt(prompt("Set the number of squares per side up to 100."));
    if (gridSize <= 100) {
        const rows = document.querySelectorAll('.row');
        rows.forEach((row) => {
            row.remove();
        });
        grid(gridSize);
    } else {
        gridSize = parseInt(prompt("Set the number of squares per side up to 100."));
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', reset);


// const rows = document.querySelectorAll('.row');
//     rows.forEach((row) => {
//         row.remove();
//     });
//     for (let i = 0; i < grid; i++) {
//         let row = document.createElement("div");
//         row.classList.add('row');
//         for (let j = 0; j < grid; j++) {
//             let column = document.createElement('div');
//             column.classList.add('column');
//             let cell = document.createElement('div');
//             cell.classList.add('cell');
//             column.appendChild(cell);
//             row.appendChild(column);
//         }
//         container.appendChild(row);
//     }

