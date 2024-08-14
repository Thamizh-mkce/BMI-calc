const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate-bmi");
const bmiResult = document.getElementById("bmi-result");

calculateButton.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;

  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height);
    bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;
  } else {
    bmiResult.textContent = "Please enter valid values.";
  }
});
