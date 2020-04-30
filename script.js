function kwToGbp(currency) {
    let fixResult = currency / 1510.83;
    return '£ ' + fixResult.toFixed(2);
    
}

function kwToUsd(currency) {
    let fixResult = currency / 1219.00
    return '$ ' + fixResult.toFixed(2);
}

function kwToEuro(currency) {
    let fixResult = currency / 1322.25;
    return '€ ' + fixResult.toFixed(2);
}

function kwToCny(currency) {
    let fixResult = currency / 172.06;
    return '￥ ' + fixResult.toFixed(2);
}

function kwToSgd(currency) {
    let fixResult = currency / 861.64;
    return '$ ' + fixResult.toFixed(2);
}

document.addEventListener('submit', e => {
    e.preventDefault();
    let amountEntered = document.querySelector('#currency-input').value
    let convertAmount
        if(document.querySelector('#kwToGbp').checked){
            convertAmount = kwToGbp(amountEntered)
        } else if (document.querySelector('#kwToUsd').checked) { 
            convertAmount = kwToUsd(amountEntered)
        } else if (document.querySelector('#kwToEuro').checked) {
            convertAmount = kwToEuro(amountEntered)
        } else if (document.querySelector('#kwToCny').checked) {
            convertAmount = kwToCny(amountEntered)
        } else {
            convertAmount = kwToSgd(amountEntered)
        }
    document.querySelector('#currency-result').innerText = convertAmount;
    
    document.querySelector('.result-div').classList.remove('d-none');

    document.querySelector('#currency-input').value = null;

})