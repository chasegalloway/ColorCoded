const configurations = {
    '1': [
        'white', 'white', 'blue', 'white', 'white',
        'white', 'blue', 'blue', 'white', 'white',
        'white', 'white', 'blue', 'white', 'white',
        'white', 'white', 'blue', 'white', 'white',
        'white', 'blue', 'blue', 'blue', 'white'
    ],
    '2': [
        'blue', 'blue', 'blue', 'blue', 'white',
        'white', 'white', 'white', 'white', 'blue',
        'blue', 'blue', 'blue', 'blue', 'white',
        'blue', 'white', 'white', 'white', 'white',
        'blue', 'blue', 'blue', 'blue', 'blue'
    ],
    '3': [
        'white', 'blue', 'blue', 'blue', 'blue',
        'white', 'white', 'white', 'white', 'blue',
        'white', 'white', 'blue', 'blue', 'white',
        'white', 'white', 'white', 'white', 'blue',
        'white', 'blue', 'blue', 'blue', 'blue'
    ],
    '4': [
        'blue', 'white', 'white', 'blue', 'white',
        'blue', 'white', 'white', 'blue', 'white',
        'blue', 'blue', 'blue', 'blue', 'blue',
        'white', 'white', 'white', 'blue', 'white',
        'white', 'white', 'white', 'blue', 'white'
    ],
    '5': [
        'blue', 'blue', 'blue', 'blue', 'blue',
        'blue', 'white', 'white', 'white', 'white',
        'blue', 'blue', 'blue', 'blue', 'blue',
        'white', 'white', 'white', 'white', 'blue',
        'blue', 'blue', 'blue', 'blue', 'blue'
    ],
    '6': [
        'blue', 'blue', 'blue', 'blue', 'blue',
        'blue', 'white', 'white', 'white', 'white',
        'blue', 'blue', 'blue', 'blue', 'blue',
        'blue', 'white', 'white', 'white', 'blue',
        'blue', 'blue', 'blue', 'blue', 'blue'
    ],
    '7': [
        'white', 'blue', 'blue', 'blue', 'blue',
        'white', 'white', 'white', 'white', 'blue',
        'white', 'white', 'white', 'blue', 'white',
        'white', 'white', 'blue', 'white', 'white',
        'white', 'white', 'blue', 'white', 'white'
    ],
    '8': [
        'white', 'blue', 'blue', 'blue', 'white',
        'blue', 'white', 'white', 'white', 'blue',
        'white', 'blue', 'blue', 'blue', 'white',
        'blue', 'white', 'white', 'white', 'blue',
        'white', 'blue', 'blue', 'blue', 'white'
    ],
    '9': [
        'blue', 'blue', 'blue', 'blue', 'blue',
        'blue', 'white', 'white', 'white', 'blue',
        'blue', 'blue', 'blue', 'blue', 'blue',
        'white', 'white', 'white', 'white', 'blue',
        'blue', 'blue', 'blue', 'blue', 'blue'
    ],
    '0': [
        'white', 'blue', 'blue', 'blue', 'white',
        'blue', 'white', 'white', 'blue', 'blue',
        'blue', 'white', 'blue', 'white', 'blue',
        'blue', 'blue', 'white', 'white', 'blue',
        'white', 'blue', 'blue', 'blue', 'white'
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
        'white', 'red', 'white', 'red', 'white',
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
    '696e206265747765656': [
        'white', 'white', 'black', 'white', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'white', 'black', 'white', 'white'
    ],
    '=': [
        'white', 'white', 'white', 'white', 'white',
        'white', 'black', 'black', 'black', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'black', 'black', 'black', 'white',
        'white', 'white', 'white', 'white', 'white'
    ],
    '+': [
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'black', 'black', 'black', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'white', 'white', 'white', 'white'
    ],
    '-': [
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'black', 'black', 'black', 'white',
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white'
    ],
    '*': [
        'white', 'white', 'white', 'white', 'white',
        'white', 'black', 'white', 'black', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'black', 'white', 'black', 'white',
        'white', 'white', 'white', 'white', 'white'
    ],
    '/': [
        'white', 'white', 'white', 'white', 'white',
        'white', 'white', 'white', 'black', 'white',
        'white', 'white', 'black', 'white', 'white',
        'white', 'black', 'white', 'white', 'white',
        'white', 'white', 'white', 'white', 'white'
    ],
  
};

export default configurations;