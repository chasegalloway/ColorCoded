let selectedColor = null;

// Add click event listener to each color div
document.querySelectorAll('.color').forEach(colorDiv => {
  colorDiv.addEventListener('click', function() {
    selectedColor = getComputedStyle(colorDiv).backgroundColor;
  });
});

// Add click event listener to each cell div
document.querySelectorAll('.cell').forEach(cellDiv => {
  cellDiv.addEventListener('click', function() {
    if (selectedColor) {
      cellDiv.style.backgroundColor = selectedColor;
    }
  });
});