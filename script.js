// Hala Almasoud - June 13, 2020
// Select color input
// Get height input
// Get width input

const colorPicker = document.getElementById("colorPicker");
const canvasHeight = document.getElementById("inputHeight");
const canvasWidth = document.getElementById("inputWidth");
const pixCanvas = document.getElementById("pixelCanvas");
const form = document.getElementById("sizePicker");

// When size is submitted by the user, call makeGrid()
form.addEventListener("submit", function (event) {
    pixCanvas.innerHTML = "";
    event.preventDefault();

    makeGrid();
});

// the coloring of the pixels is based on user's choice of colors using the colorPicker

pixCanvas.addEventListener("click", function (event) {
    if (event.target.nodeName === "TD") {
        event.target.style.backgroundColor = colorPicker.value;
    }

})

// the generation of grid is based on the user's input

function makeGrid() {
    for (let i = 0; i < canvasHeight.value; i++) {
        const row = pixCanvas.insertRow(0);
        for (let j = 0; j < canvasWidth.value; j++) {
            row.insertCell(0);

        }
    }


}

