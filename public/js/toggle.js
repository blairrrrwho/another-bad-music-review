const body = document.querySelector('body');

// Get the button element
const button = document.querySelector('#dark-mode-button');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Toggle the dark-mode class on the body element
  body.classList.toggle('dark-mode');
});