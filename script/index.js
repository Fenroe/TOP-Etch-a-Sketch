const button = document.querySelector("button");
const sketchArea = document.getElementById("sketch-area");
const select = document.querySelector("select");

function declareSketchSpace() {
    return select.value;
}

function fillSketchSpace(sketchSpace) {
    let tileSize = "facotr-"+sketchSpace;
    for (let i=0; i < sketchSpace; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile", tileSize);
        sketchArea.appendChild(tile);  
    }
}

button.addEventListener("click", function() {
    fillSketchSpace(declareSketchSpace());
})