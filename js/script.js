const biglietto = 0.21;
let km = document.getElementById("kmarea");
console.log(km);
let age = document.getElementById("agearea");
console.log(age);
let prezzo = kmarea * 0.21;
console.log(prezzo);
const pricebutton = document.getElementById("price-button");
console.log(pricebutton);
let sconto20 = (prezzo * 20) / 100;
console.log(sconto20);
let sconto40 = (prezzo * 40) / 100;
console.log(sconto40);
pricebutton.addEventListener("click", function () {
  if (age < 18) {
    prezzo = prezzo - sconto20;
  } else if (age >= 65) {
    prezzo = prezzo - sconto40;
  }
  document.getElementById("price-button").innerHTML = ` ${prezzo}`;
});
