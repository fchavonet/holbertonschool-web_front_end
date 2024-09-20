const stock = {
	macbook: 2,
	iphone: 4
};

function processPayment(itemName) {
	const key = itemName.toLowerCase();
	stock[key] -= 1;
	console.log("Payment is being processed for item " + itemName);
}

function processError(itemName) {
	console.log("No more " + itemName + " in stock");
	console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
	console.log("Verifying the stock of " + itemName);

	const key = itemName.toLowerCase();

	if (stock.hasOwnProperty(key)) {
		if (stock[key] > 0) {
			callbackPayment(itemName);
		} else {
			callbackError(itemName);
		}
	} else {
		console.log("Item " + itemName + " is not offered");
		console.log("Payment is not being processed");
	}
}

function main() {
	const userInput = prompt("Please enter the item you would like to purchase (Macbook, iPhone)").trim();

	processOrder(userInput, processPayment, processError);
}

main();
