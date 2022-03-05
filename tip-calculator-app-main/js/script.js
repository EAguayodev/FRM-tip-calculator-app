const billSubmitTotal = document.getElementById('billSubmit');
const reservePerson = document.getElementById('personReserve');
const inputTip = document.getElementById('tipAmount');
const inputPrice = document.getElementById('totalPrice');
const boxSelect1 = document.querySelector('box__select-1');
const boxSelect2 = document.querySelector('box__select-2');
const boxSelect3 = document.querySelector('box__select-3');
const boxSelect4 = document.querySelector('box__select-4');
const boxSelect5 = document.querySelector('box__select-5');
const boxCustom = document.querySelector('box__select-custom');
const buttonReset = document.querySelector('btn-reset');

form.addEventListener('click', calculateTip);
tipAmount.oninput = calculateTip;


// billSubmittion 
function submitButton() {
    
}

// tipAmount
function calculateTip() {
    const dollarsPerPerson = (
        (totalBill.value * (tipPercentage.value / 100)) /
        totalPeople.value
    ).toFixed(2);
}

// button sets to reset numbers
function customBox() {
    if (customBox === '') {
        customBox.style.border = '1px solid hsl(172, 67%, 45%)';
    } else {
        
    }
}