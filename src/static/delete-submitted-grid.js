document.querySelectorAll('.submitted-grids').forEach(grid => {
    grid.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        const submittedGrid = grid.querySelector('.grid');
        if (submittedGrid) {
            submittedGrid.parentElement.removeChild(submittedGrid);
        }
    });
});