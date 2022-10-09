import "./styles.css";

const quotes = [
  {
    quote: "I WILL BE THE BEST VERSION OF MYSELF"
  },
  {
    quote: "MAKE YOUR DREAMS REAL"
  },
  {
    quote: "NOTHING CHANGES IF NOTHING CHANGES"
  },
  {
    quote: "DON'T WISH FOR IT WORK FOR IT"
  },
  {
    quote: "EVERYTHING IS HARD BEFORE IT IS EASY"
  }
];

const quote = document.querySelector("#quote span");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
