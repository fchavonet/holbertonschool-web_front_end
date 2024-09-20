const globalVariable = "Welcome";

function outer() {
	const course = "Holberton";
	const exclamation = "!";

	alert(globalVariable);

	function inner() {
		alert(globalVariable + " " + course);

		function inception() {
			alert(globalVariable + " " + course + exclamation);
		}
		inception()
	}
	inner()
}

outer();
