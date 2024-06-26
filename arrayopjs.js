// Function to split user input and return an array of numbers
function getArrayFromInput() {
    let input = document.getElementById("arrayInput").value.trim();
    if (input === "") return [];
    let array = input.split(",").map(num => parseInt(num));
    return array;
}

function calculateLength() {

    let array = getArrayFromInput();
    let length = 0;
    for (let i = 0; i < array.length; i++) {
        length++;
    }
    displayResult('Length of the array: ' + length);
}



function calculateSum() {
    let array = getArrayFromInput();
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    displayResult('Sum of elements: ' + sum);
}


function reverseArray() {
    let array = getArrayFromInput();
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    let formattedReversedArray = '[';
    for (let i = 0; i < reversedArray.length; i++) {
        formattedReversedArray += reversedArray[i];
        if (i !== reversedArray.length - 1) {
            formattedReversedArray += ', ';
        }
    }
    formattedReversedArray += ']';
    displayResult('Reversed array: ' + formattedReversedArray);
}



function sortArray() {
    let array = getArrayFromInput();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    let formattedSortedArray = '[';
    for (let i = 0; i < array.length; i++) {
        formattedSortedArray += array[i];
        if (i !== array.length - 1) {
            formattedSortedArray += ', ';
        }
    }
    formattedSortedArray += ']';
    displayResult('Sorted array (ascending): ' + formattedSortedArray);
}


// Function to find the biggest number in the array
function findMax() {
    let array = getArrayFromInput();
    let max = Math.max(...array);
    displayResult(`Biggest number in the array: ${max}`);
}

// Function to display result in the output div
function displayResult(result) {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${result}</p>`;
}
