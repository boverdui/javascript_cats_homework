document.addEventListener('DOMContentLoaded', () => {

  const cats = document.querySelector('#cats');
  cats.innerHTML = '';

  const createNewCat = function (cat) {

    const newCat = document.createElement('ul');

    const newCatName = document.createElement('li');
    newCatName.textContent = `Name: ${cat.name}`;

    const newCatFood = document.createElement('li');
    newCatFood.textContent = `Favourite food: ${cat.food}`;

    const newCatImage = document.createElement('li');
    const image = document.createElement('img');
    image.width = 500;
    image.src = cat.src;

    cats.appendChild(newCat);
    newCat.appendChild(newCatName);
    newCat.appendChild(newCatFood);
    newCat.appendChild(newCatImage);
    newCatImage.appendChild(image);

  }

  const boba = new Cat ('Boba', 'Sock fluff', 'images/boba.jpg')
  const barnaby = new Cat ('Barnaby', 'Tuna', 'images/barnaby.jpg')
  const max = new Cat ('Max', 'Whiskas Temptations', 'images/max.jpg')
  const scratchy = new Cat ('Scratchy', 'Itchy', 'images/scratchy.png')

  const catArray = [boba, barnaby, max, scratchy];

  catArray.forEach(cat => createNewCat(cat));

});
