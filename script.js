const cont = document.querySelector(".cont");

blocks = 20;
let random = Math.floor(Math.random() * blocks);

for (let i = 1; i <= blocks; i++) {
  if (blocks === 20) {
    cont.style.gridTemplateColumns = `repeat(5, 52px)`;
  }
  const div = document.createElement("div");
  div.classList.add("slots");
  if (i === random) {
    div.classList.add("diff");
  }
  cont.appendChild(div);
}


const hello1 = document.querySelector(".firsth");
const hello2 = document.querySelector(".secondh");
let button = document.querySelector(".startbtn");
const slots = document.querySelectorAll(".slots");
let win = document.querySelector(".level-winner");
let start = document.querySelector(".start");
let count = 200;
let game = 1;
let games = 9;
let diff = null;

// Function to safely constrain the color between 0 and 255
const safeColor = (colorValue) => {
  return Math.min(255, Math.max(0, colorValue));
};

// Function to handle color change
const colorChange = () => {
  start.style.opacity = 0;
  start.style.display = "none"

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  // If there's a previous diff block, remove its class
  if (diff) {
    diff.classList.remove("diff");
  }

  // Choose a new random diff block
  const random = Math.floor(Math.random() * slots.length);
  diff = slots[random];
  diff.classList.add("diff");

  // Set the background color for all slots
  slots.forEach((slot) => {
    slot.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  // Set a slightly different color for the diff block
  if (diff) {
    diff.style.backgroundColor = `rgb(${safeColor(r + count)}, ${safeColor(g + count)}, ${safeColor(b + count)})`;
    // Add the event listener for the new diff block
    diff.addEventListener("click", colorChange);
  }

  // Check if the game has reached its end or if count has gone too low
  if (count <= 0) {
    hello1.innerText = "DONE";
    hello2.innerText = "DONE";
    console.log("We reached zero");
    return;
  }

  if (game === games) {
    console.log("We are done");
    win.style.opacity = 1;
    win.style.pointerEvents = "all";

    // Now select the done button after the win section is shown
    let done = win.querySelector(".done");  // Query for the done button here
    if (done) {
      done.addEventListener("click", () => {
        console.log("Done button clicked!");
      });
    } else {
      console.error("Done button not found!");
    }

    return;
  }

  console.log(`For normal ==> rgb(${r}, ${g}, ${b})`);
  console.log(`For diff ==> ${diff.style.backgroundColor}`);

  count -= 20;
  game++;
};

// Start button click event
button.addEventListener("click", colorChange);



