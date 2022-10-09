import "./styles.css";

const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(images);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
