// let km = prompt ("chilometri da percorrere");
// console.log(km);
// let age = prompt ("età passeggero");
// console.log(age);
const biglietto = 0.21;
let km = "chilometri";
let age = "eta";
let prezzo = km * 0.21;
const pricebutton = document.getElementById("price-button");
const ageinput = document.getElementById("age-input");
const kilometer = document.getElementById("km-input");
let sconto20 = (prezzo * 20) / 100;
let sconto40 = (prezzo * 40) / 100;
if (age < 18) {
  prezzo = prezzo - sconto20;
} else if (age >= 65) {
  prezzo = prezzo - sconto40;
}
pricebutton.addEventListener("click", function () {
  document.getElementById("price-button").innerHTML = ` ${prezzo}`;
});
