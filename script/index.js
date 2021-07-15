const main = document.getElementById("sketch-area");
const pageSpace = 100;

function fillPage() {
    document.addEventListener("DOMContentLoaded", function() {
        for (let i=0; i < pageSpace; i++) {
            let tile = document.createElement("div");
            tile.className = "tile";

            main.appendChild(tile);  
        }      
    })
}

fillPage();