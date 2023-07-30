let fromCurrencyWrapper = document.getElementById("from-currency-wrapper");
let toCurrencyWrapper = document.getElementById("to-currency-wrapper");

let toBasis = document.getElementById("to-basis");
let fromBasis = document.getElementById("from-basis");

let fromCoin = document.getElementById("from-coin");
let toCoin = document.getElementById("to-coin");

let headerFromBasis = document.getElementById("header-from-basis");
let headerToBasis = document.getElementById("header-to-basis");

let leftBasis = document.getElementById("left-basis");
let rightBasis = document.getElementById("right-basis");

let toMenu = document.getElementById("to-menu");
let fromMenu = document.getElementById("from-menu");

let toSelect = document.getElementsByClassName("to-currency");
let fromSelect = document.getElementsByClassName("from-currency");

let fromCurrency = "BTC";
let toCurrency = "ETH";

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const currencies = {
    "Bitcoin": "BTC",
    "Ethereum": "ETH",
    "Cardano": "ADA",
    "Binance Coin": "BNB",
    "Dash": "DASH",
    "Dogecoin": "DOGE",
    "Litecoin": "LTC",
    "Monero": "XMR",
    "Tron": "TRX",
    "Tether": "USDT",

    "Dollar": "USD",
    "Krona": "KR",
    "Ruble": "RUB",
    "Euro": "EUR",

}


let retrieveExchangeData = function () {
    let amount = parseFloat(document.getElementById("from-quantity-input").value) || 0; // Get the amount to convert

    let XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status === 200) {
            let val = JSON.parse(XHR.responseText)[fromCurrency][toCurrency];
            let price = (val * amount).toLocaleString('en'); // Calculate the converted amount

            toBasis.textContent = getKeyByValue(currencies, toCurrency);
            fromBasis.textContent = getKeyByValue(currencies, fromCurrency);

            fromCoin.className = fromBasis.textContent;
            fromCoin.classList.add('currency-logo')

            toCoin.className = toBasis.textContent;
            toCoin.classList.add('currency-logo')
            leftBasis.textContent = currencies[fromBasis.textContent];
            rightBasis.textContent = currencies[toBasis.textContent];
            headerFromBasis.textContent = fromBasis.textContent + " (" + leftBasis.textContent + ")";
            headerToBasis.textContent = toBasis.textContent + " (" + rightBasis.textContent + ")";

            document.getElementById("to-quantity").textContent = price; // Display the converted amount
        }
    }

    XHR.open("GET", "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + fromCurrency + "&tsyms=" + toCurrency);
    XHR.send();
}


for (let i = 0; i < fromSelect.length; i++) {
    fromSelect[i].addEventListener("click", function () {
        fromMenu.classList.remove("expand");
        fromCurrencyWrapper.classList.remove("bottom-border-radius-flat");
        fromCurrency = currencies[this.textContent];
        retrieveExchangeData();
    });
}

for (let i = 0; i < toSelect.length; i++) {
    toSelect[i].addEventListener("click", function () {
        toMenu.classList.remove("expand");
        toCurrencyWrapper.classList.remove("bottom-border-radius-flat");

        toCurrency = currencies[this.textContent];
        retrieveExchangeData();
    });
}

fromBasis.addEventListener("click", function () {
    if (fromMenu.classList.contains("expand")) {
        fromMenu.classList.remove("expand");
        fromCurrencyWrapper.classList.remove("bottom-border-radius-flat");

    } else {
        fromMenu.classList.add("expand");
        fromCurrencyWrapper.classList.add("bottom-border-radius-flat");


    }
});

toBasis.addEventListener("click", function () {
    if (toMenu.classList.contains("expand")) {
        toMenu.classList.remove("expand");
        toCurrencyWrapper.classList.remove("bottom-border-radius-flat");

    } else {
        toMenu.classList.add("expand");
        toCurrencyWrapper.classList.add("bottom-border-radius-flat");


    }
});


//Execute
setInterval(function () {
    retrieveExchangeData();
}, 1000);

retrieveExchangeData();

