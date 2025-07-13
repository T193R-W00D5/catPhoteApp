import { handleConsoleLogTest } from './scripts/consoleLogHandler.js';
import { showSnackbar } from './components/Snackbar.js';

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function() {
    /*
    btn.classList.remove('shake');
    btn.offsetWidth; // eslint-disable-line no-unused-expressions
    btn.classList.add('shake');
    */
    
    // Check if the button is already animating
    if (isAnimating) {
      // Already animating? Shake the button for feedback!
      btn.classList.remove("shake"); // Reset if still active
      btn.offsetWidth;  // eslint-disable-line no-unused-expressions
      btn.classList.add("shake");
      return;
    }
    // Set the button to animating state
    isAnimating = true;
    setTimeout(() => { isAnimating = false; }, 1000); // Debounce for 1s

  });
});

const catReactions = [
  {
    message: "You're paws-itively awesome!",
    gif: "assets/gifs/cat-furiously-typing.webp"
  },
  {
    message: "Keep calm and purr on 🐱",
    gif: "assets/gifs/cat-in-glass-bowl.webp"
  },
  {
    message: "You just made the cat smile 😸",
    gif: "assets/gifs/kitten-tickling.webp"
  },
  {
    message: "Wait... that's not a cat! 🐶➡️🐱",
    gif: "assets/gifs/dog-fish-costume.webp"
  },
  {
    message: "That's disturbing.",
    gif: "assets/gifs/dog-axed-and-sawed.gif"
  }
];

function typeText(element, text, speed = 50) {
  element.textContent = "";
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

setTimeout(() => {
  document.getElementById("surpriseCat").classList.add("reveal");
}, 2000);


let isAnimating = false;
// Function to show a message with a cat reaction
// This function will be called when the button is clicked
function showMessage() {
  const button = document.getElementById("messageBtn");
  const messageBox = document.getElementById("messageBox");
  const textMessage = document.getElementById("textMessage");
  const catGif = document.getElementById("catGif");
  
  /*
  // Check if the button is already animating
  if (isAnimating) {
    // Already animating? Shake the button for feedback!
    button.classList.remove("shake"); // Reset if still active
    button.offsetWidth;  // eslint-disable-line no-unused-expressions
    button.classList.add("shake");
    return;
  }
  // Set the button to animating state
  isAnimating = true;
  setTimeout(() => { isAnimating = false; }, 1000); // Debounce for 1s
  */

  // Choose a random cat reaction
  //const randomReaction = catReactions[Math.floor(Math.random() * catReactions.length)];
  // and a chance for easter egg
  let randomReaction;
  if (Math.random() < 1 / 200) {
     // easter egg
    randomReaction = {
      message: "You found the secret paw! This is a rare moment.",
      gif: "assets/gifs/laser-disco-cat.gif"
    };
    // Apply message
    textMessage.textContent = randomReaction.message;
  } else {
    const index = Math.floor(Math.random() * catReactions.length);
    randomReaction = catReactions[index];
  }
  
  // Apply message
  //typeText(textMessage, randomReaction.message);
  // Use textContent to avoid HTML injection
  textMessage.textContent = randomReaction.message;

  catGif.src = "";
  setTimeout(() => {
    catGif.src = randomReaction.gif;
  }, 0);

  // Reset and replay the fade-in animation
  messageBox.style.animation = "none";
  messageBox.offsetHeight; // eslint-disable-line no-unused-expressions
  messageBox.style.animation = "fadeIn 0.6s ease forwards";
  messageBox.style.display = "block";  
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("messageBtn");
  // Ensure the message button is available before adding the event listener
  if (button) { 
    button.addEventListener("click", showMessage);
  }
});

// Show snackbar for Alert Test button
document.getElementById('alert_test').addEventListener('click', function() {
  showSnackbar('snackbar_alert_test', 'Alert Test button clicked!');
});

// Show snackbar for Console Log Test button and log some info to the browser console
document.getElementById('console_log_test').addEventListener('click', function() {
  handleConsoleLogTest(showSnackbar);
});