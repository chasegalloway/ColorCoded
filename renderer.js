// Get references to HTML elements
const codeGrid = document.getElementById('code-grid');
const submitButton = document.getElementById('submit-button');
const runButton = document.querySelector('.run-button');
const colorPalette = document.getElementById('color-palette');
const outputGrid = document.getElementById('output-grid');
const submittedGrids = document.getElementById('submitted-grids');
// Function to create a code cell with a specific color and store the color value
function createCell(color) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = color;
    cell.dataset.color = color; // Store the color value
    // Add an event listener to the cell that changes its background color to the selected color
    cell.addEventListener('click', () => {
        const selectedColor = document.querySelector('.color.selected');
        if (selectedColor) {
            const newColor = selectedColor.style.backgroundColor;
            cell.style.backgroundColor = newColor;
            cell.dataset.color = newColor; // Update the stored color value
        }
    });
    return cell;
}
// Function to convert RGB color to Hex
function rgbToHex(rgb) {
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(match[1]) + hex(match[2]) + hex(match[3]);
}
// Initialize the code grid with a default 5x5 grid of white cells
function initializeDefaultGrid() {
    for (let i = 0; i < 25; i++) {
        const cell = createCell('white');
        codeGrid.appendChild(cell);
    }
}
// Call the function to initialize the default grid
initializeDefaultGrid();
// Event listener for the "Submit" button
submitButton.addEventListener('click', () => {
    // Create a new submitted grid based on the current code grid
    const newSubmittedGrid = document.createElement('div');
    newSubmittedGrid.classList.add('submitted-grid');
    newSubmittedGrid.style.pointerEvents = 'none'; // Make it non-editable
    const cells = codeGrid.querySelectorAll('.cell');
    cells.forEach((cell) => {
        const newCell = createCell(cell.style.backgroundColor);
        newSubmittedGrid.appendChild(newCell);
    });
    // Append the new submitted grid to the list of submitted grids
    submittedGrids.appendChild(newSubmittedGrid);
    // Check the configuration of the submitted grid and display a message
    checkConfiguration(newSubmittedGrid);
    // Reset the code grid to white
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
});
// Event listener to select a color from the palette
colorPalette.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        const selectedColor = document.querySelector('.color.selected');
        if (selectedColor) {
            selectedColor.classList.remove('selected');
        }
        event.target.classList.add('selected');
    }
});
// Function to check the configuration of a grid and display a message
function checkConfiguration(grid) {
    const cells = grid.querySelectorAll('.cell');
    const colors = [];
    cells.forEach((cell) => {
        const color = cell.style.backgroundColor;
        colors.push(getColorName(color));
    });
    // Check if any configuration matches the arrays
    const configResult = checkConfiguration(colors);
    if (configResult) {
        alert(`${configResult}`);
    } else {
        alert(colors.join(', '));
    }
}

// Function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Define the configurations and their meanings
const configurations = {
    '1': [
        'white', 'white', 'black', 'white', 'white',
        'white', 'black', 'black', 'white', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'black', 'black', 'black', 'white'
    ],
    '2': [
        'black', 'black', 'black', 'black', 'white',
        'white', 'white', 'white', 'white', 'black',
        'black', 'black', 'black', 'black', 'white',
        'black', 'white', 'white', 'white', 'white',
        'black', 'black', 'black', 'black', 'black'
    ],
    '3': [
        'white', 'black', 'black', 'black', 'black',
        'white', 'white', 'white', 'white', 'black',
        'white', 'white', 'black', 'black', 'white',
        'white', 'white', 'white', 'white', 'black',
        'white', 'black', 'black', 'black', 'black'
    ],
    '4': [
        'black', 'white', 'white', 'black', 'white',
        'black', 'white', 'white', 'black', 'white',
        'black', 'black', 'black', 'black', 'black',
        'white', 'white', 'white', 'black', 'white',
        'white', 'white', 'white', 'black', 'white'
    ],
    '5': [
        'black', 'black', 'black', 'black', 'black',
        'black', 'white', 'white', 'white', 'white',
        'black', 'black', 'black', 'black', 'black',
        'white', 'white', 'white', 'white', 'black',
        'black', 'black', 'black', 'black', 'black'
    ],
    '6': [
        'black', 'black', 'black', 'black', 'black',
        'black', 'white', 'white', 'white', 'white',
        'black', 'black', 'black', 'black', 'black',
        'black', 'white', 'white', 'white', 'black',
        'black', 'black', 'black', 'black', 'black'
    ],
    '7': [
        'black', 'black', 'black', 'black', 'black',
        'white', 'white', 'white', 'white', 'black',
        'white', 'white', 'white', 'black', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'white', 'black', 'white', 'white'
    ],
    '8': [
        'white', 'black', 'black', 'black', 'white',
        'black', 'white', 'white', 'white', 'black',
        'white', 'black', 'black', 'black', 'white',
        'black', 'white', 'white', 'white', 'black',
        'white', 'black', 'black', 'black', 'white'
    ],
    '9': [
        'black', 'black', 'black', 'black', 'black',
        'black', 'white', 'white', 'white', 'black',
        'black', 'black', 'black', 'black', 'black',
        'white', 'white', 'white', 'white', 'black',
        'black', 'black', 'black', 'black', 'black'
    ],
    '0': [
        'white', 'black', 'black', 'black', 'white',
        'black', 'white', 'white', 'black', 'black',
        'black', 'white', 'black', 'white', 'black',
        'black', 'black', 'white', 'white', 'black',
        'white', 'black', 'black', 'black', 'white'
    ],
    'A': [
        'white', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red'
    ],
    'B': [
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'white'
    ],
    'C': [
        'white', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'white',
        'red', 'white', 'white', 'white', 'red',
        'white', 'red', 'red', 'red', 'white'
    ],
    'D': [
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'white'
    ],
    'E': [
        'red', 'red', 'red', 'red', 'red',
        'red', 'white', 'white', 'white', 'white',
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'white',
        'red', 'red', 'red', 'red', 'red'
    ],
    'F': [
        'red', 'red', 'red', 'red', 'red',
        'red', 'white', 'white', 'white', 'white',
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'white',
        'red', 'white', 'white', 'white', 'white'
    ],
    'G': [
        'white', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'white',
        'red', 'white', 'red', 'red', 'red',
        'red', 'white', 'white', 'white', 'red',
        'white', 'red', 'red', 'red', 'white'
    ],
    'H': [
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red'
    ],
    'I': [
        'red', 'red', 'red', 'red', 'red',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white',
        'red', 'red', 'red', 'red', 'red'
    ],
    'J': [
        'red', 'red', 'red', 'red', 'red',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white',
        'red', 'white', 'red', 'white', 'white',
        'white', 'red', 'red', 'white', 'white'
    ],
    'K': [
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'red', 'red',
        'red', 'red', 'red', 'white', 'white',
        'red', 'white', 'white', 'red', 'red',
        'red', 'white', 'white', 'white', 'red'
    ],
    'L': [
        'red', 'white', 'white', 'white', 'white',
        'red', 'white', 'white', 'white', 'white',
        'red', 'white', 'white', 'white', 'white',
        'red', 'white', 'white', 'white', 'white',
        'red', 'red', 'red', 'red', 'red'
    ],
    'M': [
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'white', 'red', 'red',
        'red', 'white', 'red', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red'
    ],
    'N': [
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'white', 'white', 'red',
        'red', 'white', 'red', 'white', 'red',
        'red', 'white', 'white', 'red', 'red',
        'red', 'white', 'white', 'white', 'red'
    ],
    'O': [
        'white', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'white', 'red', 'red', 'red', 'white'
    ],
    'P': [
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'white',
        'red', 'white', 'white', 'white', 'white'
    ],
    'Q': [
        'white', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'red', 'white', 'red',
        'red', 'white', 'white', 'red', 'white',
        'white', 'red', 'red', 'white', 'red'
    ],
    'R': [
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'white',
        'red', 'white', 'white', 'red', 'white',
        'red', 'white', 'white', 'white', 'red'
    ],
    'S': [
        'white', 'red', 'red', 'red', 'red',
        'red', 'white', 'white', 'white', 'white',
        'white', 'red', 'red', 'red', 'red',
        'white', 'white', 'white', 'white', 'red',
        'red', 'red', 'red', 'red', 'white'
    ],
    'T': [
        'red', 'red', 'red', 'red', 'red',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white'
    ],
    'U': [
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'white', 'red', 'red', 'red', 'white'
    ],
    'V': [
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'white', 'red', 'white', 'red', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white'
    ],
    'W': [
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'white', 'white', 'red',
        'red', 'white', 'red', 'white', 'red',
        'red', 'red', 'white', 'red', 'red',
        'red', 'white', 'white', 'white', 'red'
    ],
    'X': [
        'red', 'white', 'white', 'white', 'red',
        'white', 'red', 'white', 'red', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'red', 'white', 'red', 'white',
        'red', 'white', 'white', 'white', 'red'
    ],
    'Y': [
        'red', 'white', 'white', 'white', 'red',
        'white', 'red', 'white', 'red', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'white', 'red', 'white', 'white'
    ],
    'Z': [
        'red', 'red', 'red', 'red', 'red',
        'white', 'white', 'white', 'red', 'white',
        'white', 'white', 'red', 'white', 'white',
        'white', 'red', 'white', 'white', 'white',
        'red', 'red', 'red', 'red', 'red'
    ],
    'print': [
        'brown', 'white', 'white', 'white', 'brown',
        'brown', 'white', 'white', 'white', 'brown',
        'gray', 'gray', 'gray', 'gray', 'gray',
        'gray', 'cyan', 'cyan', 'cyan', 'gray',
        'gray', 'gray', 'gray', 'gray', 'gray'
    ],
    ' ': [
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white'
    ],
    "test": [
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'purple', 'white', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white'
    ],
};
// Function to check the configuration of a grid and display a message
function checkConfiguration(colors) {
    for (const config in configurations) {
        const configColors = configurations[config];
        if (arraysEqual(colors, configColors)) {
            return config;
        }
    }
    return null; // Return null if no matching configuration is found
}
// Event listener for the "Run Code" button
runButton.addEventListener('click', () => {
    // Process the code based on the colors in the grid
    const cells = codeGrid.querySelectorAll('.cell');
    const colors = [];
    cells.forEach((cell) => {
        const storedColor = cell.dataset.color;
        colors.push(getColorName(storedColor));
    });
    // Check the configuration and display the result
    const configResult = checkConfiguration(colors);
    if (configResult) {
        alert(`${configResult}`);
    } else {
        // If no matching configuration, alert the colors
        alert(/*colors.join(', ')*/ 'Error: No matching configuration found');
    }
});
// Function to get the color name from its CSS value
function getColorName(color) {
    // Define a mapping of RGB values to color names (need to replace this with data retrieved from the backend)
    const colorMapping = {
        'rgb(255, 0, 0)': 'red',
        'rgb(255, 165, 0)': 'orange',
        'rgb(255, 255, 0)': 'yellow',
        'rgb(0, 255, 0)': 'lime',
        'rgb(0, 128, 0)': 'green',
        'rgb(0, 255, 255)': 'cyan',
        'rgb(0, 0, 255)': 'blue',
        'rgb(128, 0, 128)': 'purple',
        'rgb(255, 192, 203)': 'pink',
        'rgb(82, 59, 40)': 'brown',
        'rgb(0, 0, 0)': 'black',
        'rgb(128, 128, 128)': 'gray',
        'rgb(255, 255, 255)': 'white',
    };
    // Retrieve the color name from the mapping
    const colorName = colorMapping[color];
    return colorName !== undefined ? colorName : color; // Return the color value if not found in mapping
}
// Function to display the grid's values in a 5x5 format
function displayGridValues() {
    const cells = codeGrid.querySelectorAll('.cell');
    let gridValues = '';
    for (let i = 0; i < cells.length; i++) {
        const color = cells[i].dataset.color;
        const colorName = getColorName(color);
        gridValues += colorName + ' ';
        // Add a line break after every 5 values
        if ((i + 1) % 5 === 0) {
            gridValues += '\n';
        }
    }
    // Display the grid values in an alert
    alert(gridValues);
}