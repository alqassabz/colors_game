const cont = document.querySelector(".cont");
const again = document.querySelector(".againbtn")

blocks = 16
let complete1 = false
let random = Math.floor(Math.random() * blocks);

for (let i = 1; i <= blocks; i++) {
  if (blocks === 16 || blocks === 12 ) {
    cont.style.gridTemplateColumns = `repeat(4, 52px)`;
  }
  const div = document.createElement("div");
  div.classList.add("slots");
  if (i === random) {
    div.classList.add("diff");
  }
  cont.appendChild(div);
}

let button = document.querySelector(".startbtn");
const slots = document.querySelectorAll(".slots");
let win = document.querySelector(".level-winner");
let lose = document.querySelector(".level-loser");
let start = document.querySelector(".start");
let count = 150;
let game = 0;
let games = 20;
let diff = null;
const l2 = document.querySelector(".l2")
const timer = document.querySelector(".timer")
let time = parseInt(timer.innerText)

// Function to safely constrain the color between 0 and 255
const makeSafeColor = (colorValue) => {
  if (colorValue > 255){
    colorValue = 255
  }
  else if (colorValue < 0){
    colorValue = 0
  }
  return colorValue
}

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
    diff.style.backgroundColor = `rgb(${makeSafeColor(r + count)}, ${makeSafeColor(g + count)}, ${makeSafeColor(b + count)})`;
    // Add the event listener for the new diff block
    diff.addEventListener("click", colorChange);
  }

  // Check if the game has reached its end 
  if (count <= 0) {
    console.log("We reached zero");
    return
  }


  if (game === games) {
    win.style.opacity = 1;
    win.style.pointerEvents = "all";
    clearInterval(timerStart)
    let done = win.querySelector(".donebtn");  
      done.addEventListener("click", () => {
        console.log("Did it")
        complete1 = true;
        l2.setAttribute("href", "level2.html")
        location.href="level2.html"
      })
    return;
  }
}

  slots.forEach((slot) => {
    slot.addEventListener("click", ()=>{
      if (slot.classList.contains("diff")){
        colorChange()
        count -= 5;
        game++;
      }
      else{
      lose.style.opacity = 1;
      lose.style.pointerEvents = "all";
      clearInterval(timerStart)
      }
    })
  })

// Start button click event
button.addEventListener("click", colorChange);

start.addEventListener("click", ()=>{
 timerStart = setInterval(()=>{
    time ++
    timer.innerText = time.toString() + "s"
  }, 1000)
})

again.addEventListener("click", ()=>{
  location.reload()
})




