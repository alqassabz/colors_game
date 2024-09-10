const cont = document.querySelector(".cont")
const again = document.querySelector(".againbtn")
let diff = null;
let button = document.querySelector(".startbtn");
let win = document.querySelector(".level-winner");
let lose = document.querySelector(".level-loser");
let start = document.querySelector(".start");
let count = 50;
let game = 0;
let games = 20;
const l3 = document.querySelector(".l3")
const timer = document.querySelector(".timer")
let time = parseInt(timer.innerText)
const audio = new Audio("sounds/timer.mp3")
const over = new Audio("sounds/timeover.mp3")



if (localStorage.getItem("complete2") === "true"){

let random = Math.floor(Math.random() * parseInt(localStorage.getItem("blocksl3")));

for (let i = 1; i <= parseInt(localStorage.getItem("blocksl3")); i++) {
  if(parseInt(localStorage.getItem("blocksl3")) === 20 || parseInt(localStorage.getItem("blocksl3")) === 25 || parseInt(localStorage.getItem("blocksl3")) === 30){
    cont.style.gridTemplateColumns = `repeat(5, 52px)`;
  }


  const div = document.createElement("div");
  div.classList.add("slots");
  if (i === random) {
    div.classList.add("diff");
  }
  cont.appendChild(div);
}

const slots = document.querySelectorAll(".slots");


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

const changeBlockShape = () =>{
  if(localStorage.getItem("blocks-shape") === "circle"){
    slots.forEach((slot)=>{
      slot.style.borderRadius="50px"
    })
    }
    else if(localStorage.getItem("blocks-shape") === "square"){
      slots.forEach((slot)=>{
        slot.style.borderRadius="none"
      })
      }
    else if(localStorage.getItem("blocks-shape") === "star"){
        slots.forEach((slot)=>{
          slot.style.clipPath = `polygon(
            50% 0%, 
            61% 35%, 
            98% 35%, 
            68% 57%, 
            79% 91%, 
            50% 70%, 
            21% 91%, 
            32% 57%, 
            2% 35%, 
            39% 35%
          )`
        })
        }
        else if(localStorage.getItem("blocks-shape") === "heart"){
          slots.forEach((slot)=>{
            slot.style.clipPath = `polygon(
          50% 25%, 
          61% 10%, 
          75% 0%, 
          90% 10%, 
          100% 25%, 
          100% 50%, 
          50% 100%, 
          0% 50%, 
          0% 25%, 
          10% 10%, 
          25% 0%, 
          39% 10%
        )`
          })
        }
}


const winning = () =>{
  audio.pause()
  const winaudios = ["win1.mp3", "win2.mp3", "win3.mp3", "win4.mp3", "win5.mp3", "win6.mp3", "win7.mp3"]
        let rand = Math.floor(Math.random()*7)
        const winaudio = new Audio(`sounds/${winaudios[rand]}`)
        winaudio.play();
        setTimeout(() =>{
          winaudio.pause();
      }, 4000)
      winaudio.currentTime = 0
    win.style.opacity = 1;
    win.style.pointerEvents = "all";
}


const losing = () =>{
  audio.pause()
  const lossaudios = ["lose1.mp3", "lose2.mp3", "lose3.mp3", "lose4.mp3", "lose5.mp3", "lose6.mp3", "lose7.mp3"]
        let rand = Math.floor(Math.random()*7)
        const loseaudio = new Audio(`sounds/${lossaudios[rand]}`)
        loseaudio.play();
        setTimeout(() =>{
          loseaudio.pause();
      }, 4000)
      loseaudio.currentTime = 0
      lose.style.opacity = 1;
      lose.style.display = "block"
      lose.style.pointerEvents = "all";
}


const countdownTimer = () =>{
 over.pause()
 audio.loop = true;
 audio.play()
 timerStart = setInterval(()=>{
    time --
    timer.innerText = time.toString() + "s"
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
}


const reset = () =>{
  game = 0
  time = 30
  clearInterval(timerStart)
  timer.innerText = "30"
  lose.style.opacity = 0
  lose.style.display = "none"
  start.style.opacity = 1
  start.style.display = "block"
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
    winning()
    clearInterval(timerStart)
    let done = win.querySelector(".donebtn");  
      done.addEventListener("click", () => {
        location.href="index.html"
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
        losing()
      clearInterval(timerStart)
      }
    })
  })

  changeBlockShape()

// Start button click event
button.addEventListener("click", colorChange);

start.addEventListener("click", countdownTimer)

again.addEventListener("click", ()=>{
  reset()
})

}


