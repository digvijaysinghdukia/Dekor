window.onload = function() {
    // Define an array of four colors
    const colors = ['#00d200', '#00d2ff', '#ff0']; // Replace with your four colors
    
    // Randomly select one color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Set the new value for --secondary-color
    document.documentElement.style.setProperty('--secondary-color', randomColor);
    };