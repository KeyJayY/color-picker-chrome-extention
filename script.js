// adding event listiners
window.addEventListener("load", printHistory)
document.getElementById("btn").addEventListener("click", picker);
document.getElementById("clr").addEventListener("click", () => {
    localStorage.removeItem("colorsHistory");
    colors = [];
    let main = document.querySelector("main");
    const his = document.querySelector("#history");
    main.remove();
    main = document.createElement("main");
    his.appendChild(main);
});

let colors;
// checking if in localStorage already exists colors array 
JSON.parse(localStorage.getItem("colorsHistory")) ? colors = JSON.parse(localStorage.getItem("colorsHistory")) : colors = [];


// printing colors from history
function printHistory(){
    if(colors){
        for(let color of colors){
            console.log("a");
            printColors(color);
        }
    }
}

// picking color function
async function picker(){
    try{
        const eyedrop = new EyeDropper();
        const {sRGBHex} = await eyedrop.open();
        colors.push(sRGBHex);
        localStorage.setItem("colorsHistory", JSON.stringify(colors));
        printColors(sRGBHex);
    }
    catch(error)
    {
        console.log("fail ", error);
    }
}


// adding color to list function
function printColors(color){
    const board = document.querySelector("#history main");
    document.createElement("div");
    console.log(color)
    const elem = document.createElement("div");
    const square = document.createElement("div");
    const desc = document.createElement("span");
    desc.setAttribute("class", "text");
    desc.innerHTML= color;
    square.setAttribute("class", "square");
    square.style.backgroundColor = color;
    elem.appendChild(square);
    elem.appendChild(desc);
    elem.setAttribute("class", "color")
    board.appendChild(elem);
}
