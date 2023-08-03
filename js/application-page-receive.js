const urlParams = new URLSearchParams(window.location.search);
const fromBasis = urlParams.get("fromBasis");
const fromQuantity = urlParams.get("fromQuantity");
const toBasis = urlParams.get("toBasis");
const toQuantityText = urlParams.get("toQuantity");
const address = urlParams.get("address");

document.getElementById("from-basis").textContent = fromBasis
document.getElementById("crypto-name").textContent = fromBasis


document.getElementById("to-basis").textContent = toBasis
document.getElementById("from-quantity-input").textContent = fromQuantity
document.getElementById("to-quantity-text").textContent = toQuantityText
document.getElementById("address-input").textContent = address

let currentDate = new Date();
let datetime =
    currentDate.getDate() + "/"
    + (currentDate.getMonth() + 1) + "/"
    + currentDate.getFullYear() + " "
    + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds();


document.getElementById("date-and-time").textContent = datetime;