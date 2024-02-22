let input = document.getElementById("number");
let btn = document.getElementById("convert-btn");
let output = document.getElementById("output");

btn.addEventListener("click", convert);

function convert() {
  output.classList.remove("alert");
  let validInput = validate(input.value)
  let msg = null;
  let bad = false;
  switch (validInput) {
    case "NaN":
      msg = "Please enter a valid number.";
      bad = true;
      break;
    case "Too high":
      msg = "Please enter a number less than or equal to 3999.";
      bad = true;
      break;
    case "Too low":
      msg = "Please enter a number greater than or equal to 1.";
      bad = true;
      break;
    default:
      msg = toRoman(parseInt(input.value));
  }
  output.innerText = msg;
  output.classList.remove("hidden");
  if (bad) {
    output.classList.add("alert");
  }
}

function validate(nums) {
  if (nums.length === 0) {
    return "NaN";
  }
  let n = parseInt(nums);
  let good = {'-':true,};
  for(let i=0; i < 10; i++) {
    good[i.toString()] = true;
  }
  for(let i=0; i < nums.length; i++) {
    if (!(nums[i] in good)) {
      return "NaN";
    }
  }
  if (n > 3999) {
    return "Too high";
  }
  if (n < 1) {
    return "Too low";
  }
  return "Good";
}

function toRoman(n) {
  let romans = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  let reduce = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let ans = "";
  let i = 0;
  while (n > 0) {
    while (reduce[i] <= n) {
      n -= reduce[i];
      ans += romans[reduce[i]];
    }
    i++;
  }
  return ans;
}
