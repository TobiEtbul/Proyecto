const cristales = document.querySelector('.num_cristales')
const squaresV = document.querySelectorAll('.barra_vida .squareV');
let currentSquareV = 0;

let algoV = document.querySelector('#toggleButtonV');

algoV.addEventListener('click', function() {
    let crystalCountV = parseInt(cristales.textContent);
    if (crystalCountV > 0) {
    if (currentSquareV < squaresV.length) {
        squaresV[currentSquareV].classList.add('active'); 
        currentSquareV++; 

         // Obtiene el valor actual del h2
        // Solo resta si el número es mayor a 0
            cristales.textContent = crystalCountV - 1; // Actualiza el número en el h2
    }
}
});



const squaresDe = document.querySelectorAll('.barra_defensa .squareDe');
let currentSquareDe = 0;

let algoDe = document.querySelector('#toggleButtonDe');

algoDe.addEventListener('click', function() {
    if (currentSquareDe < squaresDe.length) {
        squaresDe[currentSquareDe].classList.add('active'); 
        currentSquareDe++; 
    }
});

const squaresDa = document.querySelectorAll('.barra_daño .squareDa');
let currentSquareDa = 0;

let algoDa = document.querySelector('#toggleButtonDa');

algoDa.addEventListener('click', function() {
    if (currentSquareDa < squaresDa.length) {
        squaresDa[currentSquareDa].classList.add('active'); 
        currentSquareDa++; 
    }
});

const squaresA = document.querySelectorAll('.barra_area .squareA');
let currentSquareA = 0;

let algoA = document.querySelector('#toggleButtonA');

algoA.addEventListener('click', function() {
    if (currentSquareA < squaresA.length) {
        squaresA[currentSquareA].classList.add('active'); 
        currentSquareA++; 
    }
});

const squaresS = document.querySelectorAll('.barra_stamina .squareS');
let currentSquareS = 0;

let algoS = document.querySelector('#toggleButtonS');

algoS.addEventListener('click', function() {
    if (currentSquareS < squaresS.length) {
        squaresS[currentSquareS].classList.add('active'); 
        currentSquareS++;
    }
});
