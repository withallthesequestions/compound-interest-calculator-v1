console.log("hi");

/* Interest calculator 
Inputs: 
a) Principal
b) Interest rate
*/

let principalInput = document.getElementById("principal");

console.log(principalInput);
console.log(principalInput.value);

let interestInput = document.getElementById("interest");

console.log(interestInput);
console.log(interestInput.value);

let timeInput = document.getElementById("time");

console.log(timeInput);
console.log(timeInput.value);

function interestCalculator(principal, interest, time) {
  console.log(principal, interest, time);
  // let simpleResult = principal * interest + Number(principal);
  let compInt = principal * Math.pow(1 + Number(interest), time);
  //  console.log(compInt);
  return compInt;
}

submit.addEventListener("click", function (event) {
  amount = interestCalculator(
    principalInput.value,
    interestInput.value,
    timeInput.value
  );
  console.log(amount);
});
