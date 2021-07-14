const main = document.getElementById("sketch-area");
const pageSpace = 16 //maximum amount of tiles that will fit into the main HTML element

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