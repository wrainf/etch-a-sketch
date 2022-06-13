//dimension of canvas
let dimension = 16;
let color = 'aqua';
let canvas = document.createElement('div');

let rainbowMode = false;
let earserMode = false;

const body = document.querySelector('body');
const content = document.querySelector('#content')
const setNewDimension = document.querySelector('#new-dimension');
const toggleRainbow = document.querySelector('#rainbow');
const toggleDefault = document.querySelector('#single-color');
const resetButton = document.querySelector('#reset');
const colorSelector = document.querySelector('#color-selection');
const eraser = document.querySelector('#eraser');
const bucket = document.querySelector('#bucket');

let grid = createGrid(dimension);
canvas.appendChild(grid);
content.appendChild(canvas)
body.appendChild(content);


eraser.addEventListener('click',()=>{
    color = 'white';
    earserMode = true;
    rainbowMode = false;
})

bucket.addEventListener('click', ()=>{
    let boxes = document.querySelectorAll('#box');
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].style.backgroundColor = color;
        
    }
})


setNewDimension.addEventListener('click',()=>{
    canvas.removeChild(canvas.firstElementChild);
    let promptMSG = "Enter New Dimension, Max: 64"
    dimension = prompt(promptMSG);
    while(dimension < 1 || dimension > 64 || dimension == null){
        dimension = prompt(promptMSG);
    }
    let grid = createGrid(dimension);

    canvas.appendChild(grid);
})

colorSelector.addEventListener("change", (event)=>{
    color = event.target.value;
})

resetButton.addEventListener('click', () => {reset()});

function reset(){
    canvas.removeChild(canvas.firstElementChild);
    canvas.appendChild(createGrid(dimension));
}

toggleRainbow.addEventListener('click',()=>{
    rainbowMode = true;
})

toggleDefault.addEventListener('click', ()=>{
    rainbowMode = false;
    eraserMode = false;
    color = colorSelector.value;
})

function selectColor(){
    if(rainbowMode == true){
        let color = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + color.slice(0, 6);
    }else{
        return color
    }
}

function createGrid(dimension){
    let grid = document.createElement('div');
    grid.style.cssText = 'border: 2px solid #4e5255; width: 600px; height: 600px;display:flex; flex-direction: column; background: white';
    for (let x = 1; x <= dimension; x++) {
        let row = document.createElement('div');
        row.style.cssText = 'display:flex';
        let boxDimension = 600/dimension;

        for (let y = 1; y <= dimension; y++) {
            let box = document.createElement('div');
            box.style.width = boxDimension+'px';
            box.style.height = boxDimension+'px';
            box.setAttribute("onmouseover","colorBox(this,selectColor())");
            box.setAttribute("id", "box")
            row.appendChild(box);
            
        }

        grid.appendChild(row);
        
    }
    return grid;
}


function colorBox(box, color){
    box.style.backgroundColor = color;
}