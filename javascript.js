function createGrid(){
    const body = document.querySelector('body');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    body.appendChild(grid);
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');
    gridSquare.textContent = "";
    for(let i=0; i<16; i++){
        grid.appendChild(gridSquare);
    }
}