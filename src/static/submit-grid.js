// Get the submit button, the original edit_grid, and the submitted grids container
const submitButton = document.querySelector('.submit-button');
const edit_grid = document.querySelector('#edit-grid');
const submittedGrids = document.querySelector('#submitted-grids');
const cell = document.querySelectorAll('.cell');

submitButton.addEventListener('click', function() {
  // Clone the original edit_grid
  const submittedGrid = edit_grid.cloneNode(true);

  // Disable interaction with the clone
  submittedGrid.style.pointerEvents = 'none';

  // Append the submitted edit_grid to the submitted grids container
  submittedGrids.appendChild(submittedGrid);

// Clear the original edit_grid
  const cells = edit_grid.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = 'white';
  }
});