function createGrid(){
    const body = document.querySelector('body');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    body.appendChild(grid);
}

function addGridSquares(numSquares){
    const grid = document.querySelector('.grid');
    for(let i=0; i<numSquares; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.textContent = " ";
        grid.appendChild(gridSquare);}
}

createGrid();
addGridSquares(16);