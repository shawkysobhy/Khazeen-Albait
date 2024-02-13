import {
	mostTraderActive,
	deliveryminiDashboard,
} from '../mockups/mainDashboardMockup.js';
function createTradeInfo(trades) {
	var container = document.getElementById('traders-table-body');
	trades.forEach(function (trade) {
		var li = document.createElement('li');
		li.className = 'trade-info flex-row';

		var pName = document.createElement('p');
		pName.className = 'trader-name';
		pName.textContent = trade.name;

		var pCategory = document.createElement('p');
		pCategory.className = 'trader-category';
		pCategory.textContent = trade.category;

		var pTotalPrice = document.createElement('p');
		pTotalPrice.className = 'trader-total-price';
		var spanPrice = document.createElement('span');
		spanPrice.className = 'bold-price';
		spanPrice.textContent = trade.totalSales;
		pTotalPrice.appendChild(spanPrice);
		pTotalPrice.innerHTML += 'الف/ في اليوم';

		li.appendChild(pName);
		li.appendChild(pCategory);
		li.appendChild(pTotalPrice);

		container.appendChild(li);
	});
}

function renderDeliveries(deliveries) {
	var ul = document.getElementById('delivery-table-body');

	deliveries.forEach(function (delivery) {
		var li = document.createElement('li');
		li.className = 'flex-row';

		var divId = document.createElement('div');
		divId.textContent = delivery.orderNumber;

		var divQuantity = document.createElement('div');
		divQuantity.textContent ='x'+ delivery.quantity ;

		var divPrice = document.createElement('div');
		divPrice.textContent = delivery.totalPrice;

		li.appendChild(divId);
		li.appendChild(divQuantity);
		li.appendChild(divPrice);

		ul.appendChild(li);
	});
}

// Call the function passing the deliveries array
renderDeliveries(deliveryminiDashboard);

createTradeInfo(mostTraderActive);
