const container = document.getElementById("grid-container");
const setsize = document.getElementById("set-size-button");

function makeGrid(size) {
    container.innerHTML = "";
    const squaresize = 500/size;
    for (let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squaresize}px`;
            square.style.height = `${squaresize}px`;
            square.style.fontSize = `${squaresize/2.5}px`;
            square.style.opacity = "0.1";
            square.textContent = `${i},${j}`;
            square.addEventListener("mouseover", () => {
                square.style.opacity = parseFloat(square.style.opacity) + 0.1;
            })
            container.appendChild(square);
        }
    }
}

setsize.addEventListener("click", () => {
    let newsize = parseInt(prompt("Enter size of grid, max 100:"));
    if (0<newsize && newsize<101){
        makeGrid(newsize);
    }
    else {
        alert("Please enter a valid number between 1 and 100");
    }
})

makeGrid(16);