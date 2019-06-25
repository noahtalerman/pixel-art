// apply flexbox properties to container
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

// hide directional text when user hovers over container
// container.addEventListener('mouseenter', function() {
//     document.querySelector('.direction-text').style.opacity = '0';
// });

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
let purpleColors = ['#0000d6', '#1c00db', '#3d00e0', '#5300e8', '#6002ee',
'#7e3ff2', '#9965f4', '#b794f6', '#d4bff9', '#efe5fd'];
let greenColors = ['#008b00', '#09af00', '#41c300', '#61d800', '#75e900',
 '#90ee02', '#aaf255', '#c6f68d', '#defabb', '#f2fde4'];
let pinkColors = ['#880061', '#b1006a', '#c7006e', '#dd0074', '#ef0078', 
'#ee0290', '#ef4fa6', '#f186c0', '#f5b6da', '#fbe2f0'];
let orangeColors = ['#e54304', '#ee6002', '#f47100', '#fa8100', '#ff8d00', 
'#ff9e22', '#ffaf49', '#ffc77d', '#ffddb0', '#fff2df'];

let colorSqrs = document.querySelectorAll('.color-sqr');
colorSqrs.forEach(function(btn) {
    btn.style.width = '6vw';
    btn.style.height = '6vw';
    btn.style.position = 'flex';
});

const sqr1 = document.querySelector('.sqr-1');
const sqr2 = document.querySelector('.sqr-2');
const sqr3 = document.querySelector('.sqr-3');
const sqr4 = document.querySelector('.sqr-4');

sqr1.style.background = purpleColors[2];
sqr2.style.background = purpleColors[4];
sqr3.style.background = purpleColors[6];
sqr4.style.background = purpleColors[8];

const purpleSelect = document.querySelector('.select-1');
const greenSelect = document.querySelector('.select-2');
const pinkSelect = document.querySelector('.select-3');
const orangeSelect = document.querySelector('.select-4');

let selects = document.querySelectorAll('.select');

const clearSelected = () => {
    selects.forEach(select => select.classList.remove('selected'));
}

const changeColorBar = (select) => {
    if (select == purpleSelect) {
        sqr1.style.background = purpleColors[2];
        sqr2.style.background = purpleColors[4];
        sqr3.style.background = purpleColors[6];
        sqr4.style.background = purpleColors[8];
    }
    else if (select == greenSelect){
        sqr1.style.background = greenColors[2];
        sqr2.style.background = greenColors[4];
        sqr3.style.background = greenColors[6];
        sqr4.style.background = greenColors[8];
    }
    else if (select == pinkSelect){
        sqr1.style.background = pinkColors[2];
        sqr2.style.background = pinkColors[4];
        sqr3.style.background = pinkColors[6];
        sqr4.style.background = pinkColors[8];
    }
    else if (select == orangeSelect){
        sqr1.style.background = orangeColors[2];
        sqr2.style.background = orangeColors[4];
        sqr3.style.background = orangeColors[6];
        sqr4.style.background = orangeColors[8];
    }
}

selects.forEach(select => select.addEventListener('click', function(){
    clearSelected();
    changeColorBar(select);
    if (select == purpleSelect) {
        select.classList.add('selected');
    }
    else if (select == greenSelect){
        select.classList.add('selected');
    }
    else if (select == pinkSelect){
        select.classList.add('selected');
    }
    else if (select == orangeSelect){
        select.classList.add('selected');
    }
}))

sqrs.forEach(sqr => sqr.addEventListener('mouseenter', function(){
    let selectedColor = document.querySelector('.selected');
    let colors;
    if (selectedColor == purpleSelect){
        colors = purpleColors;
    }
    else if (selectedColor == greenSelect){
        colors = greenColors;
    }
    else if (selectedColor == pinkSelect){
        colors = pinkColors;
    }
    else if (selectedColor == orangeSelect){
        colors = orangeColors;
    }
    console.log(colors);
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

