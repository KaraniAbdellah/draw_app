
// Start Options Part
const options = document.querySelectorAll(".options button");
const ele_size = document.querySelector("div.size");
const contentDraw = document.querySelector(".content_draw");
const color_size = document.querySelector(".color_size .size input");

// start canvas variables
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let currentTool = "pen";
let color_name = "black";

// Color varaible
const colors = document.querySelectorAll("#color");
const colorInput = document.querySelector("input#color");

// Set up canvas size
canvas.width = contentDraw.offsetWidth;
canvas.height = contentDraw.offsetHeight;

// Track the tool selected
options.forEach(element => {
    element.addEventListener("click", () => {
        // Add "clicked" class to correspond ele
        options.forEach(el => el.classList.remove("clicked"));
        element.classList.add("clicked");

        // show the size of pen
         if (element.classList.contains("color_size")) {
            let ChildEle =element.firstElementChild; 
            ChildEle.classList.add("block");
            ChildEle.classList.remove("hidden");
        }

        // start using canvas with "pen" & "eraser"
        if (element.classList.contains("pen")) {
            currentTool = "pen";
        } else if (element.classList.contains("eraser")) {
            currentTool = "eraser";
        }
    });
});

// Track the color
colors.forEach(element => {
    element.addEventListener("click", function() {
        color_name = element.className;
    });
});
colorInput.addEventListener("input", function() {
    color_name = colorInput.value;
});


// Mouse events for drawing/erasing
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mousemove", drawOrErase);

// Function to draw or erase
function drawOrErase(event) {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (currentTool === "pen") {
        ctx.strokeStyle = color_name;
        ctx.lineWidth = color_size.value;
        ctx.lineCap = "round";
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else if (currentTool === "eraser") {
        ctx.fillStyle = color_size.value;
        ctx.clearRect(x - 5, y - 5, color_size.value, color_size.value);
    }
}


ele_size.addEventListener("mouseout", function() {
    ele_size.classList.add("hidden");
    ele_size.classList.remove("block");
})

// Start Save & Delete Part
let clear_canvas = document.querySelector(".clear_canvas");
let save_as_img = document.querySelector(".save_as_img");




