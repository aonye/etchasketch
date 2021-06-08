//. for class, # for id
const container = document.querySelector('#container');
const colorButtons = document.querySelectorAll('.color');
let color = 'white'; //colors are all lowercase

colorButtons.forEach(button => button.addEventListener('click', changeColor));


createGrid(16);

function createGrid(sideLength) {
    let sides;
    if (sideLength==1){ //specific to 1;
        sides = "1fr";
    }
    else {
        sides = "1fr " + 'repeat(' + (sideLength-1) + ", 1fr)";
    }

    container.style.gridTemplateColumns = sides; 
    container.style.gridTemplateRows = sides;

    //loop to create div nodes. Each has a unique ID, class of grid-item. Background set to white.
    for (let i = 1; i <=sideLength**2; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.setAttribute('id', 'grid-item-' + i);
        div.setAttribute('style', 'background-color: rgb(255,255,255');
        container.append(div);
    }

    let nodes = document.querySelectorAll('.grid-item');
    nodes.forEach((element) => element.addEventListener('mouseenter', setColorEffect));
}

function clearGrid(){
    const nodes = document.querySelectorAll('.grid-item');
    nodes.forEach((node) => node.style.background = 'rgb(255,255,255');
}

function setColorEffect(){ //consolidate all color options instead of individual functions
    if (color==='white'){
        this.setAttribute('style', 'background-color: rgb(255,255,255');
        toggleClass(color);
    }
    else if(color==='black'){
        this.setAttribute('style', 'background-color: rgb(0,0,0)');
        toggleClass(color);
    }
    else if(color==='rainbow'){
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        this.setAttribute('style', 'background-color: ' + bgColor);
        toggleClass(color);
    }
    else if (color==='grayscale'){
        let currentColor = this.style.backgroundColor;
        currentColor = currentColor.split(' ');
        let re = /[0-9]+/g
        let x = Math.floor(parseInt(currentColor[0].match(re)) * 0.9);
        let y = Math.floor(parseInt(currentColor[1].match(re)) * 0.9);
        let z = Math.floor(parseInt(currentColor[2].match(re)) * 0.9);
        //console.log(x, y, z); //color check
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        this.setAttribute('style', 'background-color: ' + bgColor);
    }
    else {
        console.log('fatal error');
        this.setAttribute('style', 'background-color: pink');
        toggleClass(color);
    }
}

function changeColor(event){
    console.log(event.target.id);
    if (color===event.target.id){
        color = 'white';
    }
    else if (event.target.id==='rainbow'){
        color = 'rainbow';
    }
    else if (event.target.id==='grayscale'){
        color = 'grayscale';
    }
    else if (event.target.id==='black'){
        color = 'black';
    }
    else {
        color = 'white';
    }
}

function toggleClass(classCheck){
    container.classList.toggle(classCheck);
}

colorButtons.forEach(button => button.addEventListener('click', changeColor));

document.getElementById('clear').addEventListener('click',(event) => {
    if (event.target.id==='clear') {
        clearGrid();
        let gridSize;
        while(true){
        gridSize = prompt("Please enter a new total grid side size: (max 10)");
        if (parseInt(gridSize)!=gridSize){//error check for non integers, can't use strict equality
            alert("ERROR, invalid. Please try again");
            continue;
        }
        gridSize = parseInt(gridSize);
        if (gridSize <=100 && gridSize > 0){ //size limitations
            break;
        }
        else {
            alert("ERROR, nonzero numbers below 100 only. Please try again");
            continue;
        }
        }
        clearGrid();
        createGrid(gridSize);
    }
});

