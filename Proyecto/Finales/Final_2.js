const squares = document.querySelectorAll('.barra_vida .square');
let currentSquare = 0; // Controla cuál cuadrado se está encendiendo

document.querySelector('#toggleButton').addEventListener('click', function() {
    if (currentSquare < squares.length) {
        squares[currentSquare].classList.add('active'); // Enciende el cuadrado actual
        currentSquare++; // Pasa al siguiente cuadrado
    }
});