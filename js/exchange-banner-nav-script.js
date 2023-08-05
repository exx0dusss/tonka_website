document.addEventListener('DOMContentLoaded', function () {
    const hideRadio = document.getElementById('all-input');
    const elements = document.querySelectorAll('.currency-item');

    hideRadio.addEventListener('change', function () {
        if (hideRadio.checked) {
            elements.forEach(element => {
                element.classList.remove('hidden');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hideRadio = document.getElementById('banks-input');
    const elementsToHide = document.querySelectorAll('.crypto');
    const elementsToShow = document.querySelectorAll('.fiat');

    hideRadio.addEventListener('change', function () {
        if (hideRadio.checked) {
            elementsToHide.forEach(element => {
                element.classList.add('hidden');
                fromCurrency = 'USD'
                toCurrency = 'RUB'

            });
            elementsToShow.forEach(element => {
                element.classList.remove('hidden');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hideRadio = document.getElementById('cryptocurrency-input');
    const elementsToHide = document.querySelectorAll('.fiat');
    const elementsToShow = document.querySelectorAll('.crypto');

    hideRadio.addEventListener('change', function () {
        if (hideRadio.checked) {
            elementsToHide.forEach(element => {
                element.classList.add('hidden');
                fromCurrency = "BTC";
                toCurrency = "ETH";
            });
            elementsToShow.forEach(element => {
                element.classList.remove('hidden');
            });
        }
    });
});

document.querySelectorAll('.fiat').forEach(element => {
    element.classList.add('hidden');
    fromCurrency = "BTC";
    toCurrency = "ETH";
});