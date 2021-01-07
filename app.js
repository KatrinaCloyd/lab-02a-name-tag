const button = document.getElementById("changeName");
const input = document.getElementById('userName');
const newName = document.getElementById('mainName');
const makeItBlue = document.getElementById('toBlue');
const makeItGreen = document.getElementById('toGreen');
const makeItRed = document.getElementById('toRed');
const nametagColor = document.getElementById('nametag');
const nametagFont = document.getElementById('changeFont');


button.addEventListener('click', () => {
    newName.textContent = input.value; 
});

makeItBlue.addEventListener('click', () => {
    nametagColor.style.background = "blue"; 
});

makeItGreen.addEventListener('click', () => {
    nametagColor.style.background = "green"; 
});

makeItRed.addEventListener('click', () => {
    nametagColor.style.background = "red"; 
});

nametagFont.addEventListener('click', () => {
    newName.style.fontFamily = 'Yellowtail'; 
});