const body = document.querySelector('body');
const divContainer = document.createElement('div');
divContainer.classList.add('grid-container');
body.append(divContainer);

createGrid(16 * 16, '.grid-container');


function createGrid(totalNodes, parentNodeClass) {
    const div = document.querySelector(parentNodeClass);
    for (let i = 1; i <=totalNodes; i++){
        const divChild = document.createElement('div');
        divChild.classList.add('grid-item', 'transitioned');
        divChild.textContent = i;
        div.append(divChild);
    }
}

const hover = document.querySelectorAll('.grid-item');
console.log(hover);

hover.forEach((node) => {
    node.addEventListener('mouseenter', (element) => {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        node.style.background = bgColor;
        node.classList.remove('transitioned');
    });
    node.addEventListener('mouseleave', () => {
        node.style.background = 'white';
        node.classList.add('transitioned');
    });
});


/*<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
*/