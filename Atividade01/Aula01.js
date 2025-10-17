

const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// Retângulo preenchido
ctx.fillStyle = '#3498db';
ctx.fillRect(50, 50, 200, 100);

// Retângulo com borda
ctx.strokeStyle = '#e74c3c';
ctx.lineWidth = 3;
ctx.strokeRect(300, 50, 200, 100);

// Círculo
ctx.beginPath();
ctx.arc(150, 250, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#2ecc71';
ctx.fill();