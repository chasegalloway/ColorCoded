const field = document.getElementsByClassName('grid')[0];
const field_tile = document.getElementsByClassName('cell');
const gridCount = 25;

for (let i = 0; i < gridCount; i++) {
    const div = document.createElement('div');
    div.id = 'cell';
    div.className = 'cell';

    field.appendChild(div);
}

