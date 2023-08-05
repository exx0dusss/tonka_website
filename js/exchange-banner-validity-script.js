const addressInput = document.getElementById('address-input');
const paymentButton = document.getElementById('payment-button')
const checkValidity = () => {
    return WAValidator.validate(addressInput.value, fromCurrency);
}
setInterval(function () {
    checkValidity();
}, 5000);

checkValidity();

document.querySelector('#exchange-form').addEventListener('submit', e => {
    e.preventDefault();
    e.currentTarget.classList.add('submitted');
    if (checkValidity()) {
        location.replace("../application.html")
    }
});

