const clearButton = document.querySelector('.clear-button');
const cells = document.querySelectorAll('.cell');

clearButton.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.style.backgroundColor = 'white';
    });
});
