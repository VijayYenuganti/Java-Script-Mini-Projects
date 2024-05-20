// Array of famous quotes
const quotes = [
  "All that glitters is not gold.",
  "All the world’s a stage, and all the men and women merely players.",
  "Ask not what your country can do for you; ask what you can do for your country.",
  "Ask, and it shall be given you; seek, and you shall find.",
  "For those to whom much is given, much is required.",
  "Frankly, my dear, I don't give a damn.",
  "Genius is one percent inspiration and ninety-nine percent perspiration.",
  "He travels the fastest who travels alone.",
  "Hell has no fury like a woman scorned.",
  "If you want something said, ask a man; if you want something done, ask a woman.",
  "I'm gonna make him an offer he can't refuse.",
  "I've got a feeling we're not in Kansas anymore.",
  "Keep your friends close, but your enemies closer.",
  "Knowledge is power.",
  "Life is like a box of chocolates. You never know what you’re gonna get.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "No one can make you feel inferior without your consent.",
  "Nothing is certain except for death and taxes.",
  "Power corrupts; absolute power corrupts absolutely.",
  "Speak softly and carry a big stick.",
  "That’s one small step for a man, a giant leap for mankind.",
  "The love of money is the root of all evil.",
  "The only thing we have to fear is fear itself.",
  "Three can keep a secret, if two of them are dead.",
  "It is better to have loved and lost than never to have loved at all.",
  "To be or not to be, that is the question.",
  "What we've got here is failure to communicate. Some men you just can't reach.",
  "You must be the change you wish to see in the world."
];

// Set to keep track of used quote indices to avoid repetition
const usedIndexes = new Set();

// Get the HTML element where the quote will be displayed
const quoteElement = document.getElementById("quote");

// Function to generate a random quote
function generateQuote() {
  // Generate a random index within the range of the quotes array
  const randomIdx = Math.floor(Math.random() * quotes.length);

  // Get the quote at the randomly generated index
  const quote = quotes[randomIdx];

  // Set the innerHTML of the quote element to the selected quote
  quoteElement.innerHTML = quote;

  // Log the displayed quote to the console for debugging purposes
  console.log(quoteElement.innerHTML = quote);
}

// Example usage: Call generateQuote to display a random quote
generateQuote();
