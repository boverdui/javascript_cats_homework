document.addEventListener('DOMContentLoaded', () => {

  const cats = document.querySelector('#cats');
  cats.innerHTML = '';

  const createNewCat = function (cat) {

    const newCat = document.createElement('ul');

    const newCatName = document.createElement('li');
    newCatName.textContent = `Name: ${cat[0]}`;

    const newCatFood = document.createElement('li');
    newCatFood.textContent = `Favourite food: ${cat[1]}`;

    const newCatImage = document.createElement('li');
    const image = document.createElement('img');
    image.width = 500;
    image.src = cat[2];

    cats.appendChild(newCat);
    newCat.appendChild(newCatName);
    newCat.appendChild(newCatFood);
    newCat.appendChild(newCatImage);
    newCatImage.appendChild(image);

  }

  const boba = ['Boba', 'Sock fluff', 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg']
  const barnaby = ['Barnaby', 'Tuna', 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg']
  const max = ['Max', 'Whiskas Temptations', 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg']
  const scratchy = ['Scratchy', 'Itchy', 'images/scratchy.png']

  const catArray = [boba, barnaby, max, scratchy];

  for (let i = 0; i < catArray.length; i++) {
    createNewCat(catArray[i]);
  }

});
