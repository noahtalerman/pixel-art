// apply flexbox properties to container
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

// hide directional text when user hovers over container
container.addEventListener('mouseenter', function() {
    document.querySelector('.direction-text').style.opacity = '0';
});

const gridContainer = document.querySelector('.grid-container');
gridContainer.style.display = 'flex';
gridContainer.style.justifyContent = 'center';
gridContainer.style.flexWrap = 'wrap';

let numRows = 1;
// gridSize passed through html scripts tag from app.py
if (gridSize === 'error') {
}
else {
    // assigns width and height of squares according to respective fraction of grid size
    let percentGridContainerWidth = (100 * (1 / gridSize)) + '%';
    let width = percentGridContainerWidth
    let height = percentGridContainerWidth;
    const createRow = () => {
        for (let i = 0; i < gridSize; i++) {
            let sqr = document.createElement('div');
            sqr.classList.add('square');
            sqr.classList.add('inactive');
            sqr.style.setProperty('--element-height', height);
            sqr.style.setProperty('--element-width', width);
            gridContainer.appendChild(sqr);
        }
    }
    for (let i = 0; i < gridSize; i++) {
        createRow();
        ++numRows;
    }
}

let sqrs = document.querySelectorAll('.square');

sqrs.forEach(sqr => sqr.addEventListener('mouseenter', function(){
    let colors = ['#0000d6', '#1c00db', '#3d00e0', '#5300e8', '#6002ee',
                    '#7e3ff2', '#9965f4', '#b794f6', '#d4bff9', '#efe5fd']
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    this.style.setProperty('--element-background', random_color);
    this.style.setProperty('--element-border', random_color);
    this.classList.toggle('inactive');
    this.classList.toggle('active');
}));

const clearBoard = () => {
    sqrs.forEach(sqr => sqr.classList.remove('active'));
    sqrs.forEach(sqr => sqr.classList.add('inactive'));
}

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', function() {
    clearBoard();
});

const inputLabel = document.querySelector('.input__label-content');
const inputBox = document.querySelector('.input');

// text under input bar is toggled back when user clicks outside form
document.addEventListener('click', function(e) {
    let inputField = document.querySelector('.input__field');
    let isClickInside = inputField.contains(e.target);
    inputLabel.textContent = 'Enter an integer between 2 & 20';
    if (!isClickInside) {
        inputLabel.textContent = 'Height x Width';
    }
});

