// Get the submit button, the original grid, and the submitted grids container
const submitButton = document.getElementById('submit-button');
const grid = document.getElementById('code-grid');
const submittedGrids = document.getElementById('submitted-grids');
const cell = document.getElementsByClassName('cell');

submitButton.addEventListener('click', function() {
  // Clone the original grid
  const submittedGrid = grid.cloneNode(true);

  // Disable interaction with the clone
  submittedGrid.style.pointerEvents = 'none';

  // Append the submitted grid to the submitted grids container
  submittedGrids.appendChild(submittedGrid);

// Clear the original grid
  const cells = grid.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = 'white';
  }
});