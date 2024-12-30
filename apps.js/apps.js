const colorInput = document.getElementById('colorInput');
const colorDisplay = document.getElementById('colorDisplay');
const colorValue = document.getElementById('colorValue');
const container = document.getElementById("container");
function updateColor() {
    const selectedColor = colorInput.value;
    document.body.style.backgroundColor=selectedColor
    colorDisplay.style.backgroundColor = selectedColor;
    container.style.backgroundColor = selectedColor;
    colorValue.textContent = selectedColor;
    const randomRotation = Math.floor(Math.random() * 360); 
     colorDisplay.style.transform = 'rotate(10deg) scale(1.1)'
     setTimeout(() => {
        colorDisplay.style.transform = 'rotate(0deg) scale(1)';
       }, 300);
    }
    colorInput.addEventListener('input', updateColor);
    updateColor();

    var  generatecolor=document.getElementById('generate-color');
generatecolor.onclick = () =>{
    let letters = '0123456789ABCDEFabcdef';
let color = '#';
for (let i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 22)];
}
document.body.style.backgroundColor = color;
colorDisplay.style.backgroundColor=color;
colorDisplay.textContent=color;
container.style.backgroundColor = color;
colorDisplay.style.color='white';
colorDisplay.style.transform = 'rotate(10deg) scale(1.1)';
setTimeout(() => {
colorDisplay.style.transform = 'rotate(0deg) scale(1)';
  }, 300);
}