document.addEventListener('DOMContentLoaded', function (){

const sumBtn = document.querySelector("#sumBtn");
sumBtn.addEventListener("click", getSum)

const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const total = document.getElementById("total");


function getSum(){
const item1 = parseInt(document.getElementById("price1").value, 10) || 0;
const item2 = parseInt(document.getElementById("price2").value, 10) || 0;
const item3 = parseInt(document.getElementById("price3").value, 10) || 0;

const quantity1 = parseInt(document.getElementById("quantity1").value, 10) || 0;
const quantity2 = parseInt(document.getElementById("quantity2").value, 10) || 0;
const quantity3 = parseInt(document.getElementById("quantity3").value, 10) || 0;

const item1Total = item1 * quantity1;
const item2Total = item2 * quantity2;
const item3Total = item3 * quantity3;



let num = [item1Total, item2Total, item3Total];
let sum = num.reduce((price, quantity) => {
   
    return price + quantity
}, 0);
subtotal.innerHTML = `Subtotal: $${sum}.00`;

let taxRate = sum * 0.055;
tax.innerHTML = `Tax: $${taxRate}`
const finalTotal = sum + taxRate;
console.log(finalTotal)
const realTotal = Math.round(100 * finalTotal)/100;
total.innerHTML = `Total: $${realTotal}`
}

async function includeHTML() {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, include => {
      let filePath = include.getAttribute('src');
      fetch(filePath).then((file) => {
        file.text().then((content) => {
          include.insertAdjacentHTML('afterend', content);
          include.remove();
        });
      });
    });
  };

  includeHTML();

})