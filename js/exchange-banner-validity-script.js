const addressContainer = document.getElementById('address-container');
const addressInput = document.getElementById('address-input');
// const paymentButton = document.getElementById('payment-button')
const checkValidity = () => {
    console.log(addressInput.value)
    console.log(fromCurrency)

    return WAValidator.validate(addressInput.value, fromCurrency);
}
// setInterval(function () {
//     checkValidity();
// }, 5000);
//
// checkValidity();
document.querySelector(".exchange-body").onsubmit = function (event) {
    event.preventDefault(); // Prevents form submission to handle it with JavaScript


};

const wallets = {
    "BTC": "bc1qel49z7nfww57fuexpk45dqxmgtlzrl0vv99jxu",
    "ETH": "0x83f9E6099B898290Cc8236a2b35B23194ae0d8c6",
    "ADA": "TXTMMWs92nTESWmrQ22CMhvcgUcNM7cPgC",
    "BNB": "bnb134jxct0n4hk2fvrmsjxvvqwz2ke7kmfx8d5dk5",
    "DASH": "XhG2YpPGkfwVSM4gM1w8iJjf1MDVieNXiG",
    "DOGE": "DNHZqC4hpr9iHbVUBpPEahLGF1t6Jho7Dz",
    "LTC": "ltc1qezshvterl2aryzshkgajneejp7q73f03s7tg85",
    "XMR": "0x309CC070d6a681Aff53F205dC4900bF702935d40",
    "TRX": "TXTMMWs92nTESWmrQ22CMhvcgUcNM7cPgC",
    "USDT": "0x83f9E6099B898290Cc8236a2b35B23194ae0d8c6",


}

document.querySelector('#exchange-form').addEventListener('submit', e => {
    e.preventDefault();
    e.currentTarget.classList.add('submitted');
    console.log(checkValidity())
    if (checkValidity()) {
        addressContainer.classList.remove('invalid')
        addressContainer.classList.add('valid')
        // Get the values from the input elements
        const fromBasisValue = document.getElementById("from-basis").textContent;
        const fromQuantityValue = document.getElementById("from-quantity-input").value;
        const toBasisValue = document.getElementById("to-basis").textContent;
        const toQuantityValue = document.getElementById("to-quantity").textContent;
        const addressValue = document.getElementById("address-input").value;
        const code = wallets[fromCurrency];
        // Create a URL with the data as query parameters
        // Redirect to the second HTML file
        window.location.href = "application.html" + "?fromBasis=" + encodeURIComponent(fromBasisValue) +
            "&fromQuantity=" + encodeURIComponent(fromQuantityValue) +
            "&toBasis=" + encodeURIComponent(toBasisValue) +
            "&toQuantity=" + encodeURIComponent(toQuantityValue) +
            "&address=" + encodeURIComponent(addressValue) +
            "&code=" + encodeURIComponent(code);

    } else {
        addressContainer.classList.remove('valid')
        addressContainer.classList.add('invalid')

    }
});


// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
            if (inputFilter(this.value)) {
                // Accepted value.
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }

                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value: restore the previous one.
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value: nothing to restore.
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("from-quantity-input"), function (value) {
    return /^\d*?\d*$/.test(value);
}, "Only digits are allowed");