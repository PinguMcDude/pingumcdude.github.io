document.getElementById("answerBox").value = "";
document.getElementById("inputBox").value = "";

var answerList = [];

function getNumber (x) {
	var output = document.getElementById("inputBox");
	output.value += x;
}

function calculate () {
	boxValue = document.getElementById("inputBox").value;
	answer = eval(boxValue);
	var column = document.getElementById("answersSec");
	column.innerHTML += boxValue + " = ";
	document.getElementById("answerBox").value = answer;
	document.getElementById("inputBox").value = "";
	column.innerHTML += answer + "<br>";

}

function reset() {
	document.getElementById("answerBox").value = "";
	document.getElementById("inputBox").value = "";
}

function resetAll() {
	document.getElementById("answerBox").value = "";
	document.getElementById("inputBox").value = "";
	var column = document.getElementById("answersSec");
	column.innerHTML = "";
}

function delChar() {
	input = document.getElementById("inputBox").value;
	output = input.slice(0, -1);
	document.getElementById("inputBox").value = output;
}
