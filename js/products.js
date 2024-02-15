import {
	categories,
	highDemandProducts,
	traders,
} from '../mockups/productsPageMockup.js';

function createCategoryElements(categories) {
	var ul = document.getElementById('categories-list');
	categories.forEach((category) => {
		let li = document.createElement('li');
		li.className = 'categories-item';
		let img = document.createElement('img');
		img.className = 'categories-vector';
		img.src = category.imageSrc;

		let h3 = document.createElement('h3');
		h3.className = 'categories-title';
		h3.textContent = category.title;

		li.appendChild(img);
		li.appendChild(h3);
		ul.appendChild(li);
	});
}
function createHighDemandElements(products) {
	var ul = document.getElementById('most-popular-list');

	products.forEach(function (product) {
		var li = document.createElement('li');
		li.className = 'product-card';
		var img = document.createElement('img');
		img.className = 'product-vector';
		img.src = product.imageSrc;
		var h3 = document.createElement('h3');
		h3.className = 'product-title';
		h3.textContent = product.title;

		var divDetails = document.createElement('div');
		divDetails.className = 'product-details';
		var pCategory = document.createElement('p');
		pCategory.className = 'product-category';
		pCategory.textContent = product.productCategory;
		var divStatistics = document.createElement('div');
		divStatistics.className = 'product-statistics';

		var pStatistics = document.createElement('p');
		pStatistics.textContent = product.statistics;
		var imgArrow = document.createElement('img');
		imgArrow.src = '/assets/svgs/arrowUp.svg';

		divStatistics.appendChild(pStatistics);
		divStatistics.appendChild(imgArrow);

		divDetails.appendChild(pCategory);
		divDetails.appendChild(divStatistics);

		li.appendChild(img);
		li.appendChild(h3);
		li.appendChild(divDetails);
		ul.appendChild(li);
	});
}

function createTradeItems(trades) {
	var ul = document.getElementById('trade-list');

	trades.forEach(function (trade) {
		var li = document.createElement('li');
		li.className = 'trade-item';

		var img = document.createElement('img');
		img.className = 'trade-img';
		img.src =trade.imageSrc; 

		var overlay = document.createElement('div');
		overlay.className = 'overlay';

		var p = document.createElement('p');
		p.className = 'title';
		p.textContent = trade.title;

		li.appendChild(img);
		li.appendChild(overlay);
		li.appendChild(p);

		ul.appendChild(li);
	});
}

createCategoryElements(categories);
createHighDemandElements(highDemandProducts)
createTradeItems(traders)
