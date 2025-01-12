const images = [
    '0.jpeg',
    '1.jpeg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
]

let chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);