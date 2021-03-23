function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}



var sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', addErrorClassToAllInputs);


var buttonPlus = document.getElementById('buttonPlus');
var buttonPlus = document.getElementById('buttonMinus');
var buttonPlus = document.getElementById('buttonMultiply');
var buttonPlus = document.getElementById('buttonDevide');