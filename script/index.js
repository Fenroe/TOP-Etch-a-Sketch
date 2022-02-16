const button = document.querySelector("button");
const sketchArea = document.getElementById("sketch-area");
const select = document.querySelector("select");

function fillSketchSpace() {
    let sketchSpace = select.value;
    sketchArea.classList.remove('space-10x10', 'space-20x20', 'space-30x30', 'space-40x40', 'space-50x50', 'space-60x60', 'space-70x70',
    'space-80x80', 'space-90x90', 'space-100x100');
    sketchArea.classList.add(`space-${sketchSpace}x${sketchSpace}`)
    let tileSize = `factor-${sketchSpace}`;
    for (let i=0; i < sketchSpace*sketchSpace; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile", tileSize);
        sketchArea.appendChild(tile);  
    }
}

function clearSketchSpace() {
    oldTiles = sketchArea.getElementsByClassName("tile");
    let oldTilesAmount = oldTiles.length;
    for(i=oldTilesAmount-1; i >= 0; i--) {
        sketchArea.removeChild(oldTiles[i]);
    }
}

function activateSketchTiles() {
    document.querySelectorAll(".tile").forEach(item => {
        item.addEventListener("mouseover", event => {
            item.classList.add("tile-change-color");
        })
    })
}

button.addEventListener("click", function() {
    clearSketchSpace();
    fillSketchSpace();
    activateSketchTiles();
})