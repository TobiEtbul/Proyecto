const squaresV = document.querySelectorAll('.barra_vida .square');
let currentSquareV = 0;

let algoV = document.querySelector('#toggleButton');

algoV.addEventListener('click', function() {
    if (currentSquareV < squaresV.length) {
        squaresV[currentSquareV].classList.add('active'); 
        currentSquareV++; 
    }
});


const squaresDe = document.querySelectorAll('.barra_defensa .square');
let currentSquareDe = 0;

let algoDe = document.querySelector('#toggleButton');

algoDe.addEventListener('click', function() {
    if (currentSquareDe < squaresDe.length) {
        squaresDe[currentSquareDe].classList.add('active'); 
        currentSquareDe++; 
    }
});

