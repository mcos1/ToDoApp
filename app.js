const input = document.getElementById("input");
const submit = document.getElementById("submit");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

let count = 1;

submit.addEventListener("click", () => {
  if (count === 1) {
    one.innerText = "1. " + input.value;
    count++;
  } else if (count === 2) {
    two.innerHTML = "2. " + input.value;
    count++;
  } else if (count === 3) {
    three.innerText = "3. " + input.value;
    count++;
  } else if (count === 4) {
    four.innerText = "4. " + input.value;
    count++;
  } else if (count === 5) {
    five.innerText = "5. " + input.value;
    count++;
  } else if (count === 6) {
    six.innerText = "6. " + input.value;
    count++;
  } else {
    alert("Error");
  }
});
