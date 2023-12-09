"use strict";

const MsgArea = document.querySelector("#message");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const colors = ["Blue", "White", "Orange", "Green", "Red", "Yellow"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = document.createElement("li");
  const name = event.target.name.value;
  const age = event.target.age.value;
  li.innerText = `Name: ${name} Age: ${age}`;
  ul.appendChild(li);
});

// For Loop displaying each color in the array on a new paragraph
for (let i = 0; i < colors.length; i++) {
  const col = document.createElement("p");
  col.innerText = colors[i];
  message.appendChild(col);
}

// Implement a while loop that adds paragraphs to the page while a counter is less than 5
// each paragraph displaying the counter's current value

let counter = 0;
while (counter < 5) {
  const col = document.createElement("p");
  col.innerText = counter;
  message.appendChild(col);
  counter++;
}
// Map Method to double each number and filter method to only display doubled even numbers
const doubledNumbers = nums.map(function (numbs) {
  return numbs * 2;
});
const evenNumbers = nums.filter((nums) => nums % 2 === 0);

// evenNumbers.forEach((nums) => { console.log (nums*2)});
evenNumbers.forEach(doubleNums);

// Function to double each number
function doubleNums(numbs) {
  console.log(numbs * 2);
}

// demonstrate the differnce between copying primitive values and reference values

// Example of primitive type (Changing the original number will not change the new number)
let primitiveNum = 50;
let newPrimitiveNum = primitiveNum;
primitiveNum = 90;
console.log("New Primitive number:", newPrimitiveNum);
console.log("Updated Primitive number:", primitiveNum);

// Example of reference type. (Changing the original array will also change the new array)
const refArray = ["apple"];
const newRefArray = refArray;
refArray.push("cherry");
console.log("Updated Array:", newRefArray);

const array = [5, 10, 15,];
const newArray = array
array.push(20, '30');
console.log("Updated Array:", newArray);
