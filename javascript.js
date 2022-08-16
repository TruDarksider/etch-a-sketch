const body = document.querySelector('body');
const grid = document.createElement('div');
const gridSquare = document.createElement('div');

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

createGrid();
addGridSquares(16);
addHoverEvent();