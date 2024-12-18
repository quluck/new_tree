const myDialog = document.getElementById("myDialog");
window.myDialog = myDialog;

let names = []; 

function submitAndDraw() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;

    if (name.trim() === "") {
        alert("Пожалуйста, введите имя.");
        return;
    }

    names.push(name); 
    drawIcons(); 

    myDialog.close();
}

function drawIcons() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    names.forEach((name, index) => {
        const xPosition = 50 + index * 50; 

        ctx.beginPath();
        ctx.arc(xPosition, 75, 20, 0, 2 * Math.PI); 
        ctx.fillStyle = "lightblue";
        ctx.fill();
        ctx.lineWidth = 2; 
        ctx.strokeStyle = "black";
        ctx.stroke();

        const initials = getNameInitials(name);

        ctx.font = "20px Arial"; 
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(initials, xPosition, 75); 
    });
}

function getNameInitials(fullName) {
    const parts = fullName.split(" ");
    let initials = "";
    
    for (const part of parts) {
        if (part.length > 0) {
            initials += part.charAt(0).toUpperCase();
        }
    }
    
    return initials;
}

document.addEventListener("DOMContentLoaded", () => {
    window.submitAndDraw = submitAndDraw; 
});