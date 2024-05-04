const grid = document.getElementsByClassName('edit-grid')[0];
const grid_cell = document.getElementsByClassName('cell');
const gridCount = 25;

for (let i = 0; i < gridCount; i++) {
    const div = document.createElement('div');
    div.id = 'cell';
    div.className = 'cell';

    grid.appendChild(div);
}

