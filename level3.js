let diff = null;
if (localStorage.getItem("complete2") === "true"){

const cont = document.querySelector(".cont")
const again = document.querySelector(".againbtn")

blocks = 25
if(localStorage.getItem("complete2") === "false"){
  localStorage.setItem("complete2", "false")
  }
let random = Math.floor(Math.random() * blocks);

for (let i = 1; i <= blocks; i++) {
  if(blocks === 25){
    cont.style.gridTemplateColumns = `repeat(5, 52px)`;
  }
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
let count = 50;
let game = 0;
let games = 20;
const l3 = document.querySelector(".l3")
const timer = document.querySelector(".timer")
let time = parseInt(timer.innerText)
const audio = new Audio("timer.mp3")
const over = new Audio("timeover.mp3")

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
    localStorage.setItem("complete3", "true")
    const winaudios = ["win1.mp3", "win2.mp3", "win3.mp3", "win4.mp3", "win5.mp3", "win6.mp3", "win7.mp3"]
        let rand = Math.floor(Math.random()*7)
        const winaudio = new Audio(`sounds/${winaudios[rand]}`)
        winaudio.play();
        setTimeout(() =>{
          winaudio.pause();
      }, 2000)
      winaudio.currentTime = 0
    win.style.opacity = 1;
    win.style.pointerEvents = "all";
    clearInterval(timerStart)
    let done = win.querySelector(".donebtn");  
      done.addEventListener("click", () => {
        console.log("Did it")
        l3.setAttribute("href", "level3.html")
        location.href="level3.html"
      })
    return;
  }
};

  slots.forEach((slot) => {
    slot.addEventListener("click", ()=>{
      if (slot.classList.contains("diff")){
        colorChange()
        game++;
      }
      else{
        audio.pause()
        const lossaudios = ["lose1.mp3", "lose2.mp3", "lose3.mp3", "lose4.mp3", "lose5.mp3", "lose6.mp3", "lose7.mp3"]
        let rand = Math.floor(Math.random()*7)
        const loseaudio = new Audio(`sounds/${lossaudios[rand]}`)
        loseaudio.play();
        setTimeout(() =>{
          loseaudio.pause();
      }, 2000)
      loseaudio.currentTime = 0
      lose.style.opacity = 1;
      lose.style.display = "block"
      lose.style.pointerEvents = "all";
      clearInterval(timerStart)
      }
    })
  })

  

// Start button click event
button.addEventListener("click", colorChange);




start.addEventListener("click", ()=>{
  over.pause()
 audio.loop = true;
 audio.play()
 timerStart = setInterval(()=>{
    time --
    timer.innerText = time.toString()
    if(parseInt(timer.innerText) === 0 ){
      audio.pause()
      over.play()
      console.log("time over")
      lose.style.opacity = 1;
          lose.style.pointerEvents = "all";
          clearInterval(timerStart)

          setTimeout(() =>{
            over.pause();
            over.currentTime = 0;
        }, 3000);
    }
  }, 1000)
})

again.addEventListener("click", ()=>{
  game = 0
  time = 30
  clearInterval(timerStart)
  timer.innerText = "30"
  lose.style.opacity = 0
  lose.style.display = "none"
  start.style.opacity = 1
  start.style.display = "block"
})

}


