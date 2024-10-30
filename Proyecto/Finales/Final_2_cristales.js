const cristales = document.querySelector('.num_cristales')
const squaresV = document.querySelectorAll('.barra_vida .squareV');
let currentSquareV = 0;

let algoV = document.querySelector('#toggleButtonV');

let crystalCount = parseInt(cristales.textContent);

algoV.addEventListener('click', function() {
    if (crystalCount > 1) {
    if (currentSquareV < squaresV.length) {
        squaresV[currentSquareV].classList.add('active'); 
        currentSquareV++; 
        crystalCount = parseInt(cristales.textContent);
        cristales.textContent = crystalCount - 1; 
    }
}
});



const squaresDe = document.querySelectorAll('.barra_defensa .squareDe');
let currentSquareDe = 0;

let algoDe = document.querySelector('#toggleButtonDe');

algoDe.addEventListener('click', function() {
    if (crystalCount > 1) {
    if (currentSquareDe < squaresDe.length) {
        squaresDe[currentSquareDe].classList.add('active'); 
        currentSquareDe++; 
        crystalCount = parseInt(cristales.textContent);
        cristales.textContent = crystalCount - 1;
    }}
});

const squaresDa = document.querySelectorAll('.barra_daño .squareDa');
let currentSquareDa = 0;

let algoDa = document.querySelector('#toggleButtonDa');

algoDa.addEventListener('click', function() {
    if (crystalCount > 1) {
    if (currentSquareDa < squaresDa.length) {
        squaresDa[currentSquareDa].classList.add('active'); 
        currentSquareDa++; 
        crystalCount = parseInt(cristales.textContent);
        cristales.textContent = crystalCount - 1;
    }}
});

const squaresA = document.querySelectorAll('.barra_area .squareA');
let currentSquareA = 0;

let algoA = document.querySelector('#toggleButtonA');

algoA.addEventListener('click', function() {
    if (crystalCount > 1) {
    if (currentSquareA < squaresA.length) {
        squaresA[currentSquareA].classList.add('active'); 
        currentSquareA++; 
        crystalCount = parseInt(cristales.textContent);
        cristales.textContent = crystalCount - 1;
    }}
});

const squaresS = document.querySelectorAll('.barra_stamina .squareS');
let currentSquareS = 0;

let algoS = document.querySelector('#toggleButtonS');

algoS.addEventListener('click', function() {
    if (crystalCount > 1) {
    if (currentSquareS < squaresS.length) {
        squaresS[currentSquareS].classList.add('active'); 
        currentSquareS++;
        crystalCount = parseInt(cristales.textContent);
        cristales.textContent = crystalCount - 1;
    }}
});
