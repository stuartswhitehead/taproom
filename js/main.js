// 'Randomize' the page number of the data returned from the API, ensuring a new menu on refresh
const pageNum = Math.floor((Math.random() * 14) + 1);

// Save the API URL, get 15 beers on a page between 1-15
const url = 'https://api.punkapi.com/v2/beers?page=' + pageNum + '&per_page=15';

// Save reference to elements we will append beer data to
const menu = document.getElementById('beerList');
const bottles = document.getElementById('beerBottles');

// Send GET request
fetch(url)
// Convert response to JSON
.then((resp) => resp.json())
// Do something with the data
.then(function(data) {
	let beers = data;

	// Map over the data, create an element for each beer and add it to the 'menu'
	return beers.map(function(beer) {
		let menuLi = document.createElement('li'),
			bottleLi = document.createElement('li'),
			img = document.createElement('img'),
			title = document.createElement('span'),
			abv = document.createElement('span'),
			style = document.createElement('p');
		img.src = beer.image_url;
		title.innerHTML = beer.name;
		abv.innerHTML = " : " + beer.abv + "%";
		style.innerHTML = beer.tagline;

		bottleLi.appendChild(img);
		bottles.appendChild(bottleLi);
		menuLi.appendChild(title);
		menuLi.appendChild(abv);
		menuLi.appendChild(style);
		menu.appendChild(menuLi);
	})
})
// In case of error in the API response
.catch(function(error) {
	console.error(error);
});