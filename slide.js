const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Next() {
	let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 1s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	}, 1000);
}

function Prev() {
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0%";
	slider.style.transition = "all 1s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast)
		slider.style.marginLeft = "-100%";
	}, 1000);
}

btnRight.addEventListener('click', function(){
	Next();
}); 

btnLeft.addEventListener('click', function(){
	Prev();
}); 

setInterval(function(){
	Next();
}, 6500);

let products = [];
let total = 0 

function add(product, price){
	console.log(product, price)
	products.push(product);
	total = total + price;
	document.getElementById("checkout").innerHTML = `Pagar: $${total}`
}

function pay(product, price){
	console.log(product, price)
	window.alert(products.join(", \n"));
}
