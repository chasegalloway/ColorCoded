// Get the submit button, the original edit_grid, and the submitted grids container
const submitButton = document.querySelector(".submit-button")
const edit_grid = document.querySelector("#edit-grid")
const submittedGrids = document.querySelector("#submitted-grids")
const cell = document.querySelectorAll(".cell")

submitButton.addEventListener("click", () => {
  // Clone the original edit_grid
  const submittedGrid = edit_grid.cloneNode(true)

  // Remove the ID to avoid conflicts
  submittedGrid.removeAttribute("id")

  // Disable interaction with the clone's cells
  const clonedCells = submittedGrid.getElementsByClassName("cell")
  for (let i = 0; i < clonedCells.length; i++) {
    clonedCells[i].style.pointerEvents = "none"
  }

  // Append the submitted edit_grid to the submitted grids container
  submittedGrids.appendChild(submittedGrid)

  // Make the new grid draggable immediately
  if (window.makeDraggable) {
    console.log("Making new submitted grid draggable")
    window.makeDraggable(submittedGrid)
  } else {
    console.log("makeDraggable function not available")
  }

  // Add delete button functionality
  if (window.addDeleteButton) {
    console.log("Adding delete button to new grid")
    window.addDeleteButton(submittedGrid)
  } else {
    console.log("addDeleteButton function not available")
  }

  // Clear the original edit_grid
  const cells = edit_grid.getElementsByClassName("cell")
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white"
  }
})
