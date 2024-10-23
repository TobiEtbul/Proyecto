const squares = document.querySelectorAll('.barra_vida .square');
let currentSquare = 0;

let algo = document.querySelector('#toggleButton');

algo.addEventListener('click', function() {
    if (currentSquare < squares.length) {
        squares[currentSquare].classList.add('active'); 
        currentSquare++; 
    }
});
