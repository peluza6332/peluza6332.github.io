const images = [];

for(let i=0; i<5; i++) images.push(`${i}.jpg`);

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');

// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
// background-image: url(images/bg.gif);
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
