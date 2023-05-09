let gridSize = 16;
const gridHeight = 480;
const body = document.querySelector('body');
const grid = document.createElement('div');
/* const resize = document.querySelector('#resize');
resize.addEventListener('click', () => { resizeGrid(); }) */
const slider = document.querySelector("#slider");
slider.addEventListener("click", () => {
  resizeGrid();
});
const sliderDisplay = document.getElementById("sliderValue");
sliderDisplay.textContent = slider.value;
const clear = document.querySelector('#clear');
clear.addEventListener('click', ()=>{
destroyGrid();
addGridSquares(gridSize);
sizeSquares();
})

slider.oninput = function () {
    sliderDisplay.textContent = this.value;
}


function createGrid(){
    grid.classList.add('grid');
    body.appendChild(grid);
}

function addGridSquares(numSquares){
    for(let i=0; i<(numSquares*numSquares); i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        grid.appendChild(gridSquare);
    }
}

function colorSquare(gridSquare) {
    gridSquare.style.backgroundColor =
      document.querySelector("#colorPicker").value;
    //gridSquare.classList.add('colored');
}

function addHoverEvent(){
    grid.addEventListener('mouseover', function (e){
        if (e.target.classList.contains('gridSquare')){
            colorSquare(e.target);
        }
    })
}

function resizeGrid(){
    gridSize = slider.value;
    sliderDisplay.textContent = slider.value;
    //gridSize = prompt('Enter new grid size less than 100 (will be square grid)');
    if (gridSize>100){resizeGrid(); return}
    destroyGrid();
    addGridSquares(gridSize);
    sizeSquares();
}

function destroyGrid(){
    while(grid.firstChild){grid.firstChild.remove();}
}

function sizeSquares(){
    let squareSize = document.getElementsByClassName('gridSquare');
    for(let i=0;i<squareSize.length;i++){
        squareSize[i].style.height = gridHeight/gridSize+"px";
        squareSize[i].style.width = gridHeight/gridSize+"px";
    }
}

createGrid();
addGridSquares(gridSize);
sizeSquares();
addHoverEvent();