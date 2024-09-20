function createElement(data) {
	const paragraph = document.createElement("p");
	paragraph.textContent = data;
	paragraph.style.textAlign = "Justify";
	document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
	const xhr = new XMLHttpRequest();

	const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

	xhr.open("GET", url, true);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				try {
					const response = JSON.parse(xhr.responseText);

					const pages = response.query.pages;
					const pageId = Object.keys(pages)[0];
					const extract = pages[pageId].extract;

					callback(extract);
				} catch (e) {
					console.error("Error parsing JSON response:", e);
				}
			} else {
				console.error("Error fetching data from Wikipedia. Status:", xhr.status);
			}
		}
	};

	xhr.send();
}

queryWikipedia(createElement);
