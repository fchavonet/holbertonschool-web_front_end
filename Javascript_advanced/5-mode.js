// Function to change the display mode.
function changeMode(size, weight, transform, background, color) {
	return function () {
		// Apply the styles to the body of the document.
		document.body.style.fontSize = size + "px";
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	};
}

// Function to reset default CSS styles.
function resetCSS() {
	const allElements = document.querySelectorAll("*");

	// Apply default styles to all elements.
	allElements.forEach((element) => {
		element.style.boxSizing = "border-box";
		element.style.margin = "0";
		element.style.padding = "0";
		element.style.fontFamily = "arial";
		element.style.fontSize = "12px";
	});
}

// Main function to set up the page content and modes.
function main() {
	resetCSS();

	// Create different mode styles.
	const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
	const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

	// Create the main container for the page.
	const mainContainer = document.createElement("main");
	mainContainer.style.height = "100vh";
	mainContainer.style.display = "flex";
	mainContainer.style.flexDirection = "column";
	mainContainer.style.justifyContent = "center";
	mainContainer.style.alignItems = "center";
	document.body.appendChild(mainContainer);

	// Create and add a title to the container.
	const title = document.createElement("h1");
	title.textContent = "You're Browsing As A Guest"
	mainContainer.appendChild(title);

	// Create and add a paragraph with some text.
	const paragraph = document.createElement("p");
	paragraph.textContent = "Pages You View In This Window Won't Appear In The\
                            Browser History And They Won't Leave Other Traces,\
                            Like Cookies, On The Computer After You Close All\
                            Open Guest Windows. Any Files You Download Will Be\
                            Preserved, However.";
	paragraph.style.paddingRight = "100px";
	paragraph.style.paddingLeft = "100px";
	mainContainer.appendChild(paragraph);

	// Create and add a "Learn More" link.
	const link = document.createElement("a");
	link.textContent = "Learn More";
	link.href = "#";
	link.style.marginBottom = "75px";
	mainContainer.appendChild(link)

	// Create a container for the bottom part of the page.
	const bottomPartContainer = document.createElement("div");
	bottomPartContainer.style.position = "absolute";
	bottomPartContainer.style.left = "5px";
	bottomPartContainer.style.bottom = "5px"
	bottomPartContainer.style.display = "flex";
	bottomPartContainer.style.flexDirection = "column"
	bottomPartContainer.style.justifyContent = "flex-start";
	mainContainer.appendChild(bottomPartContainer);

	// Create and add a subtitle.
	const subtitle = document.createElement("h2");
	subtitle.textContent = "Welcome Holberton!";
	subtitle.style.width = "100%";
	subtitle.style.textAlign = "left";
	bottomPartContainer.appendChild(subtitle);

	// Create a container for the buttons.
	const buttonContainer = document.createElement("div");
	buttonContainer.style.width = "100%";
	buttonContainer.style.display = "flex";
	buttonContainer.style.flexDirection = "row"
	buttonContainer.style.justifyContent = "flex-start";
	bottomPartContainer.appendChild(buttonContainer);

	// Create and add the "Spooky" button.
	const spookyButton = document.createElement("button");
	spookyButton.textContent = "Spooky";
	buttonContainer.appendChild(spookyButton);

	// Create and add the "Dark mode" button.
	const darkModeButton = document.createElement("button");
	darkModeButton.textContent = "Dark mode";
	buttonContainer.appendChild(darkModeButton);

	// Create and add the "Scream mode" button.
	const screamModeButton = document.createElement("button");
	screamModeButton.textContent = "Scream mode";
	buttonContainer.appendChild(screamModeButton);

	// Add event listeners to the buttons to change modes.
	spookyButton.addEventListener("click", spooky);
	darkModeButton.addEventListener("click", darkMode);
	screamModeButton.addEventListener("click", screamMode);
}

main();