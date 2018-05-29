
var _ = require('lodash');


let array = [1,2,3,4,5];
console.log('answer: ', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.getElementById("colorpicker1");
var color2 = document.getElementById("colorpicker2");
var body = document.getElementById("gradientbody");

function setGradient() {
	 body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);