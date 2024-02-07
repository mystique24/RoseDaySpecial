const scratchImage = document.getElementById('scratch-image');
const content = document.getElementById('content');
const ctx = scratchImage.getContext('2d');

// Set up the canvas
scratchImage.width = window.innerWidth;
scratchImage.height = window.innerHeight;

// Load the foreground image
const img = new Image();
img.src = 'foreground-image.jpg'; // Replace 'foreground-image.jpg' with your foreground image

// When the image is loaded, draw it on the canvas and add text
img.onload = function() {
  ctx.drawImage(img, 0, 0, scratchImage.width, scratchImage.height);
  ctx.fillStyle = 'white'; // Set text color
  ctx.font = 'bold 50px Sofia'; // Set font style
  ctx.textAlign = 'center';
  ctx.fillText('Scratch Me! I want to show something SPECIAL :)', scratchImage.width / 2, scratchImage.height / 2); // Add text
};

// Event listeners for scratching effect
let isDrawing = false;

scratchImage.addEventListener('mousedown', (e) => {
  isDrawing = true;
  draw(e);
});

scratchImage.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    draw(e);
  }
});

scratchImage.addEventListener('mouseup', () => {
  isDrawing = false;
});

scratchImage.addEventListener('mouseleave', () => {
  isDrawing = false;
});

// Function to draw on the canvas
function draw(e) {
  if (!isDrawing) return;

  const rect = scratchImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2); // Increase scratch cursor size
  ctx.fill();

  // Load the background image
  const bgImg = new Image();
  bgImg.src = 'background-image.jpg'; // Replace 'background-image.jpg' with your background image

  // When the background image is loaded, draw it on the canvas and add text
  bgImg.onload = function() {
    // Set the global alpha value for translucency
    ctx.globalAlpha = 0.1; // Adjust the value for desired transparency (0.0 - fully transparent, 1.0 - fully opaque)
    ctx.globalCompositeOperation = 'destination-over';
    ctx.drawImage(bgImg, 0, 0, scratchImage.width, scratchImage.height);
    ctx.fillStyle = 'white'; // Set text color
    ctx.font = 'bold 30px Courier New'; // Set font style
    ctx.textAlign = 'center';
    ctx.fillText('Roses are red violets are blue', scratchImage.width / 2, scratchImage.height / 4); // First line
    ctx.fillText('I am stuck with you like paper with glue.', scratchImage.width / 2, scratchImage.height / 4 + 30); // Second line
    ctx.fillText('Roses are red violets are blue', scratchImage.width / 2, scratchImage.height / 4 + 60); // Third line
    ctx.fillText('There are few wonders and I am one of the few.', scratchImage.width / 2, scratchImage.height / 4 + 90); // Fourth line
    ctx.fillText('Roses are red violets are blue', scratchImage.width / 2, scratchImage.height / 4 + 120); // Fifth line
    ctx.fillText('Your life is going to be wonders you have no clue.', scratchImage.width / 2, scratchImage.height / 4 + 150); // Sixth line  
    ctx.fillText('Roses are red violets are blue.', scratchImage.width / 2, scratchImage.height / 4 + 180); // Sixth line  
    ctx.fillText('Sending some roses phew phew phew phew🔫.', scratchImage.width / 2, scratchImage.height / 4 + 210); // Sixth line  
    // Reset the global alpha value
    ctx.globalAlpha = 1.0; // Reset to fully opaque
  };
}
