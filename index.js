const phrases = [
    "Software Developer",
    "Content Creator",
    "Gym Enthusiast",
    "Football Lover"
  ];
  
  let index = 0;
  const rotatingText = document.getElementById("rotating-text");
  
  function rotateText() {
    rotatingText.textContent = phrases[index];
    index = (index + 1) % phrases.length; // Loop back to the first phrase
  }
  
  setInterval(rotateText, 4000); // Change text every 4 seconds
  rotateText(); // Initialize the first phrase
  