
var display = document.getElementById('displayText');

//To update text
function updateText(text){
    display.textContent = text;
}

//To change text size
function changeText(size) {
    display.style.fontSize = size + "px"
}

//To change text color 
function changeTextColor(color) {
    display.style.color = color;
}


//To change text font
function changeFont(fontName) {
    display.style.fontFamily = fontName;
}

//To drag and drop the content
var draggable = document.getElementById('displayText');
var offsetX, offsetY;
var isDragging = false;

draggable.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        e.preventDefault();
        draggable.style.left = e.clientX - offsetX + 'px';
        draggable.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
});