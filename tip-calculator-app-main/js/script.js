// Elements
const billSubmit = document.getElementById("billSubmit");
const personReserve = document.getElementById("personReserve");
const tipAmount = document.getElementById("tipAmount");
const totalPrice = document.getElementById("totalPrice");
const resetButton = document.querySelector(".btn-reset");
const tipButtons = document.querySelectorAll(".box__select");
const error = document.getElementById("error");

let tipPercentage = 0;

// Function to calculate and display tip and total per person
function calculateTip() {
  const bill = parseFloat(billSubmit.value);
  const people = parseInt(personReserve.value);

  // Check if number of people is zero or not entered
  if (people === 0 || isNaN(people)) {
    error.textContent = "Number can't be zero";
    error.style.color = "#E17457"; // Set error text color
    personReserve.classList.add("error-outline"); // Optional: add styling to highlight the error
    tipAmount.value = "";
    totalPrice.value = "";
    tipAmount.placeholder = "$0.00";
    totalPrice.placeholder = "$0.00";
  } else {
    error.textContent = ""; // Clear the error message
    personReserve.classList.remove("error-outline"); // Remove error styling

    // Display the calculated totals when both bill and tip percentage are available
    if (bill > 0 && tipPercentage > 0) {
      const tipPerPerson = (bill * (tipPercentage / 100)) / people;
      const totalPerPerson = bill / people + tipPerPerson;

      // Display calculated values in the input fields
      tipAmount.value = `$${tipPerPerson.toFixed(2)}`;
      totalPrice.value = `$${totalPerPerson.toFixed(2)}`;
    } else {
      // Reset the input fields if conditions are not met
      tipAmount.value = "";
      totalPrice.value = "";
      tipAmount.placeholder = "$0.00";
      totalPrice.placeholder = "$0.00";
    }
  }
}

// Function to handle tip button click
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove active class from all buttons
    tipButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    e.target.classList.add("active");

    // Get tip percentage
    tipPercentage = parseFloat(e.target.textContent);

    // Recalculate and show totals
    calculateTip();
  });
});

// Reset button functionality
resetButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Reset all values
  billSubmit.value = "";
  personReserve.value = "";
  tipAmount.value = "";
  totalPrice.value = "";
  error.textContent = ""; // Clear error message

  // Reset placeholders
  tipAmount.placeholder = "$0.00";
  totalPrice.placeholder = "$0.00";

  // Remove active class from all tip buttons
  tipButtons.forEach((btn) => btn.classList.remove("active"));

  // Reset tip percentage
  tipPercentage = 0;
});

// Listen for changes in bill or number of people
billSubmit.addEventListener("input", calculateTip);
personReserve.addEventListener("input", calculateTip);