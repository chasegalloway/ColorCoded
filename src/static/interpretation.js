// Get references to HTML elements
const runButton = document.querySelector('.run-button');
let submitted_grids;

document.addEventListener('DOMContentLoaded', function () {
    submitted_grids = document.getElementById('submitted-grids')
    // Function to check if two arrays are equal
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    // Function to check the configuration of a single grid and return a message
function checkConfiguration(colors) {
    // Check if the first layer defines grid as a boolean variable
    const checkFirstLayer = colors.slice(0, 5);
    if (checkFirstLayer.every(color => color === 'brown')) {
        const bool = colors;
        // Process the bool
        return 'bool';
    } else if (checkFirstLayer.every(color => color === 'cyan')) {
        const int = colors;
        // Process the int
        return 'int';
    } else if (checkFirstLayer.every(color => color === 'red')) {
        const string = colors;
        // Process the string
        return 'string';
    }

    for (const check in configs) {
        const configColors = configs[check];
        if (arraysEqual(colors, configColors)) {
            return check;
        }
    }
    return null; // Return null if no matching configuration is found
}

    // Event listener for the "Run Code" button
    runButton.addEventListener('click', () => {
        // Process each submitted grid
        let output = '';
        let expression = '';
        let equalsSignFound = false;
        let isPrinting = false;
        let printStart = false;
        if (submitted_grids) {
            const submittedGridList = submitted_grids.children;
            Array.from(submittedGridList).forEach((grid) => {
                const cells = grid.querySelectorAll('.cell');
                const colors = [];
                cells.forEach((cell) => {
                    const storedColor = window.getComputedStyle(cell).backgroundColor;
                    colors.push(getColorName(storedColor));
                });
                // Check the configuration and display the result
                const configResult = checkConfiguration(colors);
                console.log(`Processing grid with config: ${configResult}`); // Log the config
                if (configResult) {
                    if (configResult === "print") {
                        printStart = true;
                    } else if (printStart && configResult === "between") {
                        isPrinting = !isPrinting;
                        if (!isPrinting) {
                            printStart = false;
                        }
                    } else if (isPrinting) {
                        output += configResult;
                    } else if (/^\d+$/.test(configResult) || ["+", "-", "*", "/"].includes(configResult)) {
                        expression += configResult;
                    } else if (configResult === "=") {
                        expression += configResult;
                        equalsSignFound = true;
                    } else {
                        output += 'Error: Invalid syntax';
                        return; 
                    }
                } else {
                    output += 'Error: Invalid syntax';
                    return;
                }
                // Evaluate the expression and append the result to the output
                if (expression && equalsSignFound) {
                    if (expression.trim() === "=") {
                        output += 'Error: Invalid syntax';
                    } else {
                        try {
                            const result = eval(expression.slice(0, -1)); // Remove the "="
                            output += result.toString();
                        } catch (e) {
                            output += 'Error: Invalid syntax';
                        }
                    }
                    // Reset the expression and equalsSignFound for the next calculation
                    expression = '';
                    equalsSignFound = false;
                }
            });
        } else {
            output = 'Error: No submitted grids found';
        }
        // Display the output in an alert
        alert(output);
    });

    // Function to get the color name from its CSS value
    function getColorName(color) {
        // Retrieve the color name from the mapping
        const colorName = colorMapping[color];
        return colorName !== undefined ? colorName : color; // Return the color value if not found in mapping
    }
});