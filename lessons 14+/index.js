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
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

function onButtonPlusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 + number2;
    window.alert(summ); 

}


  

function onButtonMinusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 - number2;
    window.alert(summ); 
}


function onButtonMultiplyClick() {
    console.log('onButtonMultiplyClick');
}


function onButtonDevideClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 / number2;
    window.alert(summ); 
}






buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);
