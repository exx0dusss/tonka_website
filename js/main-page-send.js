document.querySelector(".exchange-body").onsubmit = function (event) {
    event.preventDefault(); // Prevents form submission to handle it with JavaScript

    // Get the values from the input elements
    const fromBasisValue = document.getElementById("from-basis").textContent;
    const fromQuantityValue = document.getElementById("from-quantity-input").value;
    const toBasisValue = document.getElementById("to-basis").textContent;
    const toQuantityValue = document.getElementById("to-quantity").textContent;
    const addressValue = document.getElementById("address-input").value;

    // Create a URL with the data as query parameters
    // Redirect to the second HTML file
    window.location.href = "application.html" + "?fromBasis=" + encodeURIComponent(fromBasisValue) +
        "&fromQuantity=" + encodeURIComponent(fromQuantityValue) +
        "&toBasis=" + encodeURIComponent(toBasisValue) +
        "&toQuantity=" + encodeURIComponent(toQuantityValue) +
        "&address=" + encodeURIComponent(addressValue);
};