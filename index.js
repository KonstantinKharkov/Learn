
function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}



var firstNameId = 'first-name';



 window.alert(firstNameId);



debugger;
function alertFirstNameValues() {
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);

}

function alertLastNameValues() {
    console.log(lastNameEl.value);
    console.log(lastNameEl.className);
}

function alertAddressValues() {
    console.log(addressEl.value);
    console.log(addressEl.className);
}

function alertHobbiesValues(elementParameter) {
    
    console.log(elementParameter.value);
    console.log(elementParameter.className);
    
}





var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
alertHobbiesValues(firstNameEl);

var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
alertHobbiesValues(lastNameEl);


var addressId = 'address';
var addressEl = document.getElementById(addressId);




var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);

 
var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);

alertHobbiesValues(hobbiesEl);