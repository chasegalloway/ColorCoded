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

    console.log(configs);
    // Function to check the configuration of a single grid and return a message
    function checkConfiguration(colors) {
        for (const check in configs) {
            const configColors = configs[check];
            if (arraysEqual(colors, configColors)) {
                return check;
            }
        }
        return null; // Return null if no matching configuration is found
    }
    console.log('submitted grids:', submitted_grids);

    // Event listener for the "Run Code" button
runButton.addEventListener('click', () => {
    // Process each submitted grid
    let output = '';
    let expression = '';
    let equalsSignFound = false;
    if (submitted_grids) {
        const submittedGridList = submitted_grids.children;
        console.log('grids: ', submittedGridList);
        Array.from(submittedGridList).forEach((grid) => {
            const cells = grid.querySelectorAll('.cell');
            const colors = [];
            cells.forEach((cell) => {
                const storedColor = window.getComputedStyle(cell).backgroundColor;
                colors.push(getColorName(storedColor));
            });
            // Check the configuration and display the result
            const configResult = checkConfiguration(colors);
            if (configResult) {
                if (/^\d+$/.test(configResult) || ["+", "-", "*", "/"].includes(configResult)) {
                    expression += configResult;
                } else if (configResult === "=") {
                    expression += configResult;
                    equalsSignFound = true;
                } else {
                    output += 'Error: Invalid syntax';
                    return; // Skip the rest of this iteration
                }
            } else {
                output += 'Error: Invalid syntax';
                return; // Skip the rest of this iteration
            }
            // Evaluate the expression and append the result to the output
            if (expression && equalsSignFound) {
                if (expression.trim() === "=") {
                    output += 'Error: Invalid syntax';
                } else {
                    const result = eval(expression.slice(0, -1)); // Remove the "="
                    output += result.toString();
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