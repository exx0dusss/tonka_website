const urlParams = new URLSearchParams(window.location.search);
const fromBasis = urlParams.get("fromBasis");
const fromQuantity = urlParams.get("fromQuantity");
const toBasis = urlParams.get("toBasis");
const toQuantityText = urlParams.get("toQuantity");
const address = urlParams.get("address");
const code = urlParams.get("code");

// document.getElementById("from-coin").classList.add(fromBasis.split(' ')[0])
document.getElementById("from-basis").textContent = fromBasis
document.getElementById("crypto-name").textContent = fromBasis

const elements = document.querySelectorAll('.from-coin');

elements.forEach((element) => {
    element.classList.add(fromBasis.split(' ')[0])
});
document.getElementById("to-coin").classList.add(toBasis.split(' ')[0])
document.getElementById("to-basis").textContent = toBasis
document.getElementById("from-quantity-input").textContent = fromQuantity
document.getElementById("to-quantity-text").textContent = toQuantityText
document.getElementById("address-input").textContent = address
document.getElementById("Code").textContent = code;

let currentDate = new Date();
let datetime =
    currentDate.getDate() + "/"
    + (currentDate.getMonth() + 1) + "/"
    + currentDate.getFullYear() + " "
    + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds();


document.getElementById("date-and-time").textContent = datetime;
const copyMessage = document.getElementById('copy-message');
const copyButton = document.getElementById('copy-button');

copyButton.addEventListener("click", async function () {
    copyMessage.classList.remove('hidden')
    await navigator.clipboard.writeText(code);
    setTimeout(function () {
        copyMessage.classList.add('hidden')

    }, 2000);
});

const paymentButton = document.getElementById('payment-button')
paymentButton.addEventListener("click", async function () {
    document.getElementById('step-one-wrapper').classList.remove('blue')
    document.getElementById('step-two-wrapper').classList.add('blue')
});