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

function interestCalculator(principal, interest) {
  let result = principal * interest + Number(principal);
  return result;
}

submit.addEventListener("click", function (event) {
  amount = interestCalculator(principalInput.value, interestInput.value);
  console.log(amount);
});
