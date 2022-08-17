let gridSize = 16;
const body = document.querySelector('body');
const grid = document.createElement('div');
const gridSquare = document.createElement('div');
const resize = document.querySelector('#resize');
resize.addEventListener('click', ()=>{resizeGrid();})
const clear = document.querySelector('#clear');
clear.addEventListener('click', ()=>{
destroyGrid();
addGridSquares(gridSize);
})


function createGrid(){
    grid.classList.add('grid');
    body.appendChild(grid);
}

function addGridSquares(numSquares){
    for(let i=0; i<(numSquares*numSquares); i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        //gridSquare.textContent = "";
        grid.appendChild(gridSquare);
    }
}

function colorSquare(gridSquare){
    gridSquare.classList.add('colored');
}

function addHoverEvent(){
    grid.addEventListener('mouseover', function (e){
        if (e.target.classList.contains('gridSquare')){
            colorSquare(e.target);
        }
    })
}

function resizeGrid(){
    gridSize = prompt('Enter new grid size less than 100 (will be square grid)');
    if (gridSize>100){resizeGrid(); return}
    destroyGrid();
    addGridSquares(gridSize);
}

function destroyGrid(){
    while(grid.firstChild){grid.firstChild.remove();}
}

createGrid();
addGridSquares(gridSize);
addHoverEvent();