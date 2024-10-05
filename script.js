const banner = document.querySelector(".banner");

let primaryPercent = 0; // Controls the primary color position
let secondaryPercent = 25; // Controls the secondary color position

const colors = [
  { start: "#3498db", end: "#9b59b6" }, // Blue takes Purple
  { start: "#4b0082", end: "#3498db" }, // indigo takes blue
  { start: "#2ecc71", end: "#4b0082" }, // green takes indigo
  { start: "#e74c3c", end: "#2ecc71" }, // red takes green
  { start: "#9b59b6", end: "#e74c3c" }, // purple takes green
];

let currentColorIndex = 0;

function animateGradient() {
  // Update percentages
  primaryPercent += 0.2;
  secondaryPercent += 0.2;

  // When the primary gradient reaches 100%, reset the percentages and switch colors
  if (primaryPercent >= 100) {
    primaryPercent = -125; // Restart from the beginning
    secondaryPercent = 25; // Start secondary after some overlap
    currentColorIndex = (currentColorIndex + 1) % colors.length; // Switch to the next color pattern
  }

  // Get the current color pattern
  const currentColors = colors[currentColorIndex];

  // Set the gradient with overlapping effect
  banner.style.background = `
    linear-gradient(to right, 
      ${currentColors.start} ${primaryPercent}%, 
      ${currentColors.end} ${secondaryPercent}%)
  `;

  requestAnimationFrame(animateGradient);
}

// Start the animation
animateGradient();
