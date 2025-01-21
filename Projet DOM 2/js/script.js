document.addEventListener("DOMContentLoaded", (event) => {
    const color = document.getElementById('color-box');
    const colorChang = document.getElementById('change-color-btn');

    colorChang.addEventListener("click", function(){
        color.style.backgroundColor = getRandomColor();
    })
});

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

