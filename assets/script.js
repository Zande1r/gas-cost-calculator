// Function to calculate gas cost for a trip
function calculateGasCost(tripDistance, gasPrice, mpg) {
  let gallonsNeeded = tripDistance / mpg;
  let totalCost = gallonsNeeded * gasPrice;
  return totalCost.toFixed(2);
}

// Function to calculate cost per person
function calculateCostPerPerson(totalCost, passengers) {
  let costPerPerson = totalCost / passengers;
  return costPerPerson.toFixed(2);
}

// Get input elements
const mpgInput = document.getElementById("mpg");
const tripDistanceInput = document.getElementById("tripDistance");
const gasPriceInput = document.getElementById("gasPrice");
const passengersInput = document.getElementById("passengers");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

// Attach event listener to the button
calculateBtn.addEventListener("click", function () {
  const mpg = parseFloat(mpgInput.value);
  const tripDistance = parseFloat(tripDistanceInput.value);
  const gasPrice = parseFloat(gasPriceInput.value);
  const passengers = parseInt(passengersInput.value);

  if (!isNaN(mpg) && !isNaN(tripDistance) && !isNaN(gasPrice) && !isNaN(passengers)) {
    const totalCost = calculateGasCost(tripDistance, gasPrice, mpg);
    const costPerPerson = calculateCostPerPerson(totalCost, passengers);

    resultDiv.innerHTML = `Total cost: $${totalCost}<br>Cost per person: $${costPerPerson}`;
    resultDiv.style.display = "block";
    errorDiv.style.display = "none";
  } else {
    errorDiv.innerHTML = "Please fill in all fields with valid numbers.";
    errorDiv.style.display = "block";
    resultDiv.style.display = "none";
  }
});
