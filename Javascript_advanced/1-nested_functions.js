let globalVariable = "Welcome";

function outer() {
	let course = "Holberton";
	let exclamation = "!";

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
