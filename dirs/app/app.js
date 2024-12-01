// Start Options Part
const options = document.querySelectorAll(".options button");
const ele_size = document.querySelector("div.size");
const contentDraw = document.querySelector(".content_draw");
const color_size = document.querySelector(".color_size .size input");

// Start canvas variables
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let currentTool = "pen";
let color_name = "black";

// Color variables
const colors = document.querySelectorAll("#color");
const colorInput = document.querySelector("input#color");

// Set up canvas size
canvas.width = contentDraw.offsetWidth;
canvas.height = contentDraw.offsetHeight;

// Load saved canvas image and line size if available
document.addEventListener("DOMContentLoaded", function () {
    const savedImage = localStorage.getItem("canvasImage");
    const savedLineSize = localStorage.getItem("lineSize");

    if (savedImage) {
        const img = new Image();
        img.src = savedImage;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
    }

    if (savedLineSize) {
        color_size.value = savedLineSize; // Restore line size
    }
});

// Track the tool selected
options.forEach(element => {
    element.addEventListener("click", () => {
        // Add "clicked" class to corresponding element
        options.forEach(el => el.classList.remove("clicked"));
        element.classList.add("clicked");

        // Show the size adjustment for pen
        if (element.classList.contains("color_size")) {
            let ChildEle = element.firstElementChild;
            ChildEle.classList.add("block");
            ChildEle.classList.remove("hidden");
        }

        // Switch between "pen" and "eraser"
        if (element.classList.contains("pen")) {
            currentTool = "pen";
        } else if (element.classList.contains("eraser")) {
            currentTool = "eraser";
        }
    });
});

// Track the color changes
colors.forEach(element => {
    element.addEventListener("click", function () {
        color_name = element.className;
    });
});

colorInput.addEventListener("input", function () {
    color_name = colorInput.value;
});

// Save the line size when changed
color_size.addEventListener("input", function () {
    localStorage.setItem("lineSize", color_size.value); // Save the line size to localStorage
});

// Mouse events for drawing/erasing
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath(); // Reset path after drawing

    // Save the current canvas state to localStorage
    const imgData = canvas.toDataURL("image/png");
    localStorage.setItem("canvasImage", imgData);
});
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
        ctx.clearRect(x - 5, y - 5, color_size.value, color_size.value);
    }
}

// Hide the size adjustment element on mouse out
ele_size.addEventListener("mouseout", function () {
    ele_size.classList.add("hidden");
    ele_size.classList.remove("block");
});

// Start Save & Delete Part
let clear_canvas = document.querySelector(".clear_canvas");
let save_as_img = document.querySelector(".save_as_img");

// Clear the canvas
clear_canvas.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem("canvasImage"); // Clear saved image from localStorage
    localStorage.removeItem("lineSize"); // Clear saved line size from localStorage
});

// Save the canvas as an image
save_as_img.addEventListener("click", function () {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = imgData;
    link.click();
});

// Manage User Profile

let char_name = document.querySelector(".profile-icon span");
let profile = document.querySelector(".profile");
let profile_icon = document.querySelector(".profile-icon");
let email = document.querySelector(".profile .email");
let img_profile = document.querySelector(".profile  .img-profile");
let user_msg = document.querySelector(".profile .msg .msg-user");

// Get Info From LocalStorage
document.addEventListener("DOMContentLoaded", function() {
    const MyInfo = JSON.parse(localStorage.getItem("PersonlInfo"));
    email.textContent = MyInfo.user_email;
    user_msg.textContent = MyInfo.user_name;
    img_profile.textContent = MyInfo.user_email.charAt(0).toUpperCase();
    char_name.textContent = MyInfo.user_email.charAt(0).toUpperCase();
});

profile_icon.addEventListener("click", function() {
    profile.classList.add("block");
    profile.classList.remove("hidden");
});

profile.addEventListener("mouseleave", function() {
    profile.classList.add("hidden");
    profile.classList.remove("block");
});
