function createGrid(sideLength) {
    const div = document.querySelector('.grid-container');
    let sides = "";
    if (sideLength==1){ //specific to 1;
        sides = "1fr";
    }
    else {
        sides = "1fr " + 'repeat(' + (sideLength-1) + ", 1fr)";
    }
    div.style.gridTemplateColumns = sides;
    div.style.gridTemplateRows = sides;
    for (let i = 1; i <=sideLength**2; i++){
        const divChild = document.createElement('div');
        divChild.classList.add('grid-item');
        divChild.setAttribute('id', 'grid-item-' + i);
        divChild.setAttribute('style', 'background-color: rgb(255,255,255');
        div.append(divChild);
    }
}

function clearGrid(){
    const hover = document.querySelectorAll('.grid-item');
    hover.forEach((node) => node.style.background = 'rgb(255,255,255');
}

const enableWhite = function(node){
    node.setAttribute('style', 'background-color: rgb(255,255,255');
}

const enableRainbow = function(node){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    node.setAttribute('style', 'background-color: ' + bgColor);
}

const enableGrayScale = function(node){
    /*
    let currentColor = node.style.backgroundColor;
    currentColor = currentColor.split(' ');
    let re = /[0-9]+/g
    let x = Math.floor(parseInt(currentColor[0].match(re)) * 0.9);
    let y = Math.floor(parseInt(currentColor[1].match(re)) * 0.9);
    let z = Math.floor(parseInt(currentColor[2].match(re)) * 0.9);
    console.log(x, y, z);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    node.setAttribute('style', 'background-color: ' + bgColor);
    */
    node.setAttribute('style', 'background-color: gray');
}

function removeHandler(currentClass){
    if (currentClass==='rainbow'){
        hover.forEach((node) => {
            node.removeEventListener('mouseenter', () => enableRainbow(node));
        });
    }
    else if(currentClass==='gray'){
        hover.forEach((node) => {
            node.removeEventListener('mouseenter', () => enableGrayScale(node));
        });
    }
    else if(currentClass==='white'){
        hover.forEach((node) => {
            node.removeEventListener('mouseenter', () => enableWhite(node));
        });
    }
}

function toggleClass(classToCheck){
    const hover = document.querySelectorAll('.grid-item');
    hover.forEach((node) => {
        node.classList.toggle(classToCheck);
    });
}



createGrid(16, '.grid-container');

const hover = document.querySelectorAll('.grid-item');
let currentClass;
hover.forEach((node) => {
    node.addEventListener('mouseover', () => enableWhite(node));
    node.classList.toggle('white');
    currentClass = 'white';
});

document.getElementById('btns').addEventListener('click', function(event) {
    if (event.target.id==='clear') {
        clearGrid();
        let gridSize = "";
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
        createGrid(gridSize, '.grid-container');
    }
    else if(event.target.id==='gray'){
        //when i press the gray button
        //if its already grayscale, i want to toggle off grayscale class, toggle on default (white)
        if (currentClass===event.target.id){
            toggleClass(event.target.id);
            toggleClass('white');
            //removeHandler(event.target.id);
            hover.forEach((node) => {
                node.addEventListener('mouseover', () => enableWhite(node));
                currentClass = 'white';
            });
        }
        //if its not grayscale, i want to toggle off current class and turn on grayscale;
        else {
            toggleClass(currentClass);
            toggleClass(event.target.id);
            //removeHandler(currentClass);
            hover.forEach((node) => {
                node.addEventListener('mouseover', () => enableGrayScale(node));
                currentClass = 'gray';
            });
        }
    }
    else if(event.target.id==='rainbow'){
        //when i press the rainbow button
        //already rainbow, turn it off and turn on white
        if (currentClass===event.target.id){
            toggleClass(event.target.id);
            toggleClass('white');
            //removeHandler(event.target.id);
            hover.forEach((node) => {
                node.addEventListener('mouseover', () => enableWhite(node));
                currentClass = 'white';
            });
        }
        //if its not rainbow, i want to toggle off current and turn on rainbow;
        else {
            toggleClass(currentClass);
            toggleClass(event.target.id);
            //removeHandler(currentClass);
            hover.forEach((node) => {
                node.addEventListener('mouseover', () => enableRainbow(node));
                currentClass = 'rainbow';
            });
        }   
    }
});