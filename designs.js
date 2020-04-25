function makeGrid(tableHeight, tableWidth) {
    // Finding the table element, to start creating the grid inside it
    const table = document.getElementById('pixelCanvas')
    // set the element's HTML content to empty, to reset the grid
    table.innerHTML = '';
    // for loops to interact with the size numbers input:

    // first loop: create a different row up to the inserted number (grid height)
    for (r = 0; r < tableHeight; r++) {
        var row = document.createElement("tr");
        for (c = 0; c < tableWidth; c++){
            // second loop: create cells (inside each row) up to the inserted number (grid width)
            var cell = document.createElement("td");
            // append the cell to the row
            row.appendChild(cell);
            // append the row inside the element table
            table.appendChild(row);
        }
    }
    // Call the coloring function to allow the user to start selecting and coloring the cells 
    table.addEventListener('click', colorToTheClick) 
    }

// Paint the background of the cell with the selected color
function colorToTheClick(evt) {
    evt.target.style.backgroundColor = color.value;
}

// Select color input
var color = document.getElementById('colorPicker')

// Find the submit button to create the event that will call the makegrid() function
const submitGrid = document.querySelectorAll('input')[2]

// Event for calling the makegrid() function when you press the submit button
submitGrid.addEventListener('click', function(event){
    // Retain user inputted values from defaulting to 1 when submitting 
    // (Prevent reload the page)
    event.preventDefault();
    // Take in Height and Width from user input
    const tableHeight = document.getElementById('inputHeight').value;
    const tableWidth = document.getElementById('inputWidth').value;
    // Call function 'makeGrid' to create the grid of the user inputted sizes
    makeGrid(tableHeight, tableWidth)
})