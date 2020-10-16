var images = ['../homepage-v5/media/city.jpg',
              '../homepage-v5/media/city1.jpg',
              '../homepage-v5/media/city2.jpg',
              '../homepage-v5/media/city3.jpg'];
document.getElementsByClassName('background')[0].style.background = 'url(' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center fixed';
document.getElementsByClassName('background')[0].style.backgroundSize = 'cover';
