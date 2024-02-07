const d = document;

const prodDescBox = d.querySelector("#productDescBox");
const prodDescBox2 = d.querySelector("#productDescBox2");
const productCards = d.querySelectorAll(".featuredProd .product");
const productCards2 = d.querySelectorAll(".newArrival .product");
const backBtn1 = d.querySelector("#productDescBox .backBtn");
const backBtn2 = d.querySelector("#productDescBox2 .backBtn");

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
})

backBtn2.addEventListener("click", () => {
  prodDescBox2.classList.toggle("active-box");
})