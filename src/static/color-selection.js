let selectedColor = null;
let isMouseDown = false;

// Add click event listener to each color div
document.querySelectorAll('.color').forEach(colorDiv => {
  colorDiv.addEventListener('click', function() {
    selectedColor = getComputedStyle(colorDiv).backgroundColor;
  });
});

// Add mousedown, mouseup, and mouseover event listeners to each cell div
document.querySelectorAll('.cell').forEach(cellDiv => {
  cellDiv.addEventListener('mousedown', function() {
    isMouseDown = true;
    if (selectedColor) {
      cellDiv.style.backgroundColor = selectedColor;
    }
  });
  cellDiv.addEventListener('mouseup', function() {
    isMouseDown = false;
  });
  cellDiv.addEventListener('mouseover', function() {
    if (isMouseDown && selectedColor) {
      cellDiv.style.backgroundColor = selectedColor;
    }
  });
  cellDiv.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    cellDiv.style.backgroundColor = 'white';
  });
});