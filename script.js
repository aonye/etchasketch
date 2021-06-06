const body = document.querySelector('body');
const divContainer = document.createElement('div');
divContainer.classList.add('grid-container');
body.append(divContainer);

createGrid(16 * 16, '.grid-container');


function createGrid(totalNodes, parentNodeClass) {
    const div = document.querySelector(parentNodeClass);
    for (let i = 1; i <=totalNodes; i++){
        const divChild = document.createElement('div');
        divChild.classList.add('grid-item');
        divChild.textContent = i;
        div.append(divChild);
    }
}



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