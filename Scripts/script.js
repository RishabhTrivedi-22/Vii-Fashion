const d = document;

const prodDescBox = d.querySelector("#productDescBox");
const prodDescBox2 = d.querySelector("#productDescBox2");
const productCards = d.querySelectorAll(".featuredProd .product");
const productCards2 = d.querySelectorAll(".newArrival .product");
const backBtn1 = d.querySelector("#productDescBox .backBtn");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector("#menu-link-container");
const navItems = document.querySelectorAll("#menu-link-container li");
const backBtn2 = d.querySelector("#productDescBox2 .backBtn");
const loginWrapper = d.querySelector("#form-wrapper");
const registerLink = d.querySelector(".register-link");


let showMenu = true;
menuBtn.addEventListener("click", toggleMenu);



productCards.forEach((card) => {
	card.addEventListener("click", () => {
		prodDescBox.classList.toggle("active-box");
	});
});
productCards2.forEach((card) => {
	card.addEventListener("click", () => {
		prodDescBox2.classList.toggle("active-box");
	});
});

backBtn1.addEventListener("click", () => {
	prodDescBox.classList.toggle("active-box");
});

backBtn2.addEventListener("click", () => {
	prodDescBox2.classList.toggle("active-box");
});



function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add("close");
		menu.classList.add("show");
		menuNav.classList.add("show");
		navItems.forEach((item) =>
			item.classList.add("show"));

		// Reset the menu state
		showMenu = true;
	} else {
		menuBtn.classList.remove("close");
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		navItems.forEach((item) =>
			item.classList.remove("show"));

		// Reset the menu state
		showMenu = false;
	}
}


registerLink.addEventListener("click", () => {
	loginWrapper.classList.add('signupactive');
});