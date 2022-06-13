//dimension of canvas
let dimension = 16;

const body = document.querySelector('body');


function createGrid(dimension){
    let grid = document.createElement('div');
    grid.style.cssText = 'display:flex; flex-direction: column';
    for (let x = 1; x <= dimension; x++) {
        let row = document.createElement('div');
        row.style.cssText = 'display:flex';

        for (let y = 1; y <= dimension; y++) {
            let box = document.createElement('div');
            box.style.cssText = 'border: 2px solid black; width:20px; height:20px';
            row.appendChild(box);
            
        }

        grid.appendChild(row);
        
    }
    return grid;
}

let grid = createGrid(dimension);

body.appendChild(grid);