
// ==============================================
// Part 1: Variables and Conditionals
// ==============================================

// Variable declarations
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const compareBtn = document.getElementById('compareBtn');
const comparisonResult = document.getElementById('comparisonResult');

// Age verification function
checkAgeBtn.addEventListener('click', function() {
    // Get user input
    const age = parseInt(ageInput.value);
    
    // Validate input
    if (isNaN(age)) {
        ageResult.textContent = 'Please enter a valid age.';
        ageResult.style.color = 'var(--accent-color)';
        return;
    }
    
    // Conditional logic
    if (age < 0) {
        ageResult.textContent = 'Age cannot be negative.';
        ageResult.style.color = 'var(--accent-color)';
    } else if (age < 13) {
        ageResult.textContent = 'You are too young for this service.';
        ageResult.style.color = 'var(--accent-color)';
    } else if (age < 18) {
        ageResult.textContent = 'You need parental consent to use this service.';
        ageResult.style.color = 'orange';
    } else if (age < 100) {
        ageResult.textContent = 'You are eligible for our service!';
        ageResult.style.color = 'var(--secondary-color)';
    } else {
        ageResult.textContent = 'Please enter a valid age.';
        ageResult.style.color = 'var(--accent-color)';
    }
});

// Number comparison function
compareBtn.addEventListener('click', function() {
    // Get user input
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        comparisonResult.textContent = 'Please enter valid numbers.';
        comparisonResult.style.color = 'var(--accent-color)';
        return;
    }
    
    // Conditional logic
    if (num1 > num2) {
        comparisonResult.textContent = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        comparisonResult.textContent = `${num1} is less than ${num2}`;
    } else {
        comparisonResult.textContent = `${num1} is equal to ${num2}`;
    }
    comparisonResult.style.color = 'var(--secondary-color)';
});

// ==============================================
// Part 2: Functions
// ==============================================

// Function declarations
const tempInput = document.getElementById('tempInput');
const tempScale = document.getElementById('tempScale');
const convertBtn = document.getElementById('convertBtn');
const conversionResult = document.getElementById('conversionResult');

const stringInput = document.getElementById('stringInput');
const upperCaseBtn = document.getElementById('upperCaseBtn');
const lowerCaseBtn = document.getElementById('lowerCaseBtn');
const capitalizeBtn = document.getElementById('capitalizeBtn');
const formatResult = document.getElementById('formatResult');

// Temperature conversion function
function convertTemperature(temp, scale) {
    if (scale === 'celsius') {
        // Convert Celsius to Fahrenheit
        return (temp * 9/5) + 32;
    } else {
        // Convert Fahrenheit to Celsius
        return (temp - 32) * 5/9;
    }
}

// String formatting functions
function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Temperature conversion event listener
convertBtn.addEventListener('click', function() {
    const temp = parseFloat(tempInput.value);
    
    if (isNaN(temp)) {
        conversionResult.textContent = 'Please enter a valid temperature.';
        conversionResult.style.color = 'var(--accent-color)';
        return;
    }
    
    const scale = tempScale.value;
    const convertedTemp = convertTemperature(temp, scale);
    const fromUnit = scale === 'celsius' ? 'Celsius' : 'Fahrenheit';
    const toUnit = scale === 'celsius' ? 'Fahrenheit' : 'Celsius';
    
    conversionResult.textContent = `${temp}° ${fromUnit} is ${convertedTemp.toFixed(2)}° ${toUnit}`;
    conversionResult.style.color = 'var(--secondary-color)';
});

// String formatting event listeners
upperCaseBtn.addEventListener('click', function() {
    const text = stringInput.value;
    if (!text) {
        formatResult.textContent = 'Please enter some text.';
        formatResult.style.color = 'var(--accent-color)';
        return;
    }
    
    formatResult.textContent = toUpperCase(text);
    formatResult.style.color = 'var(--secondary-color)';
});

lowerCaseBtn.addEventListener('click', function() {
    const text = stringInput.value;
    if (!text) {
        formatResult.textContent = 'Please enter some text.';
        formatResult.style.color = 'var(--accent-color)';
        return;
    }
    
    formatResult.textContent = toLowerCase(text);
    formatResult.style.color = 'var(--secondary-color)';
});

capitalizeBtn.addEventListener('click', function() {
    const text = stringInput.value;
    if (!text) {
        formatResult.textContent = 'Please enter some text.';
        formatResult.style.color = 'var(--accent-color)';
        return;
    }
    
    formatResult.textContent = capitalizeFirstLetter(text);
    formatResult.style.color = 'var(--secondary-color)';
});

// ==============================================
// Part 3: Loops
// ==============================================

// Loop examples
const multiplicationInput = document.getElementById('multiplicationInput');
const generateTableBtn = document.getElementById('generateTableBtn');
const multiplicationTable = document.getElementById('multiplicationTable');

const sequenceStart = document.getElementById('sequenceStart');
const sequenceEnd = document.getElementById('sequenceEnd');
const generateSequenceBtn = document.getElementById('generateSequenceBtn');
const sequenceResult = document.getElementById('sequenceResult');

// Multiplication table with for loop
generateTableBtn.addEventListener('click', function() {
    const number = parseInt(multiplicationInput.value);
    
    if (isNaN(number)) {
        multiplicationTable.innerHTML = '<div>Please enter a valid number</div>';
        return;
    }
    
    // Clear previous table
    multiplicationTable.innerHTML = '';
    
    // Create multiplication table using a for loop
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        const tableItem = document.createElement('div');
        tableItem.textContent = `${number} × ${i} = ${result}`;
        multiplicationTable.appendChild(tableItem);
    }
});

// Number sequence with while loop
generateSequenceBtn.addEventListener('click', function() {
    const start = parseInt(sequenceStart.value);
    const end = parseInt(sequenceEnd.value);
    
    if (isNaN(start) || isNaN(end)) {
        sequenceResult.textContent = 'Please enter valid numbers.';
        sequenceResult.style.color = 'var(--accent-color)';
        return;
    }
    
    if (start >= end) {
        sequenceResult.textContent = 'Start number must be less than end number.';
        sequenceResult.style.color = 'var(--accent-color)';
        return;
    }
    
    // Generate sequence using a while loop
    let current = start;
    let sequence = '';
    
    while (current <= end) {
        sequence += current + ' ';
        current++;
    }
    
    sequenceResult.textContent = sequence;
    sequenceResult.style.color = 'var(--secondary-color)';
});

// ==============================================
// Part 4: DOM Manipulation
// ==============================================

// DOM manipulation examples
const listItemInput = document.getElementById('listItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const clearListBtn = document.getElementById('clearListBtn');
const dynamicList = document.getElementById('dynamicList');

const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');
const blueThemeBtn = document.getElementById('blueThemeBtn');

const elementText = document.getElementById('elementText');
const elementType = document.getElementById('elementType');
const createElementBtn = document.getElementById('createElementBtn');
const elementContainer = document.getElementById('elementContainer');

// Dynamic list functionality
addItemBtn.addEventListener('click', function() {
    const itemText = listItemInput.value.trim();
    
    if (!itemText) {
        alert('Please enter an item.');
        return;
    }
    
    // Create new list item
    const listItem = document.createElement('li');
    
    // Add text
    const itemSpan = document.createElement('span');
    itemSpan.textContent = itemText;
    listItem.appendChild(itemSpan);
    
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        dynamicList.removeChild(listItem);
    });
    
    listItem.appendChild(deleteBtn);
    dynamicList.appendChild(listItem);
    
    // Clear input
    listItemInput.value = '';
});

// Clear list functionality
clearListBtn.addEventListener('click', function() {
    dynamicList.innerHTML = '';
});

// Theme switcher functionality
lightThemeBtn.addEventListener('click', function() {
    document.documentElement.setAttribute('data-theme', 'light');
});

darkThemeBtn.addEventListener('click', function() {
    document.documentElement.setAttribute('data-theme', 'dark');
});

blueThemeBtn.addEventListener('click', function() {
    document.documentElement.setAttribute('data-theme', 'blue');
});

// Element creator functionality
createElementBtn.addEventListener('click', function() {
    const text = elementText.value.trim();
    const type = elementType.value;
    
    if (!text) {
        alert('Please enter some text.');
        return;
    }
    
    // Create new element
    const newElement = document.createElement(type);
    newElement.textContent = text;
    
    // Add to container
    elementContainer.appendChild(newElement);
    
    // Clear input
    elementText.value = '';
});
