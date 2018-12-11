// 'Randomize' the page number of the data returned from the API, ensuring a new menu on refresh
const pageNum = Math.floor((Math.random() * 14) + 1);

// Save the API URL, get 15 beers on a page between 1-15
const url = 'https://api.punkapi.com/v2/beers?page=' + pageNum + '&per_page=15';

// Save reference to element we will append beer data to
const ol = document.getElementById('beerList');

// Send GET request
fetch(url)
// Convert response to JSON
.then((resp) => resp.json())
// Do something with the data
.then(function(data) {
	console.log(data);
	let beers = data;
	return beers.map(function(beer) {
		console.log(beer.name);
		let li = document.createElement('li'),
			img = document.createElement('img'),
			title = document.createElement('span');
		console.log('heyehe');
		img.src = beer.image_url;
		title.innerHTML = beer.name;

		li.appendChild(img);
		li.appendChild(title);
		console.log(li);
		ol.appendChild(li);
	})
})
// In case of error in the API response
.catch(function(error) {
	console.error(error);
});