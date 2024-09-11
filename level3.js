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
let all = document.querySelector("html")
let h1 = document.querySelector("h1")
const navbar = document.querySelector(".navbar")
const navbarText = document.querySelectorAll(".navbar a")
let scoring = document.querySelector(".scoring")
let scoreVal = 0
const life1 = document.querySelector("#life1");
const life2 = document.querySelector("#life2");
const life3 = document.querySelector("#life3");
const loseLife = new Audio('sounds/loseLife.wav')


if (localStorage.getItem("complete2") === "true"){

let random = Math.floor(Math.random() * parseInt(localStorage.getItem("blocksl3")));

for (let i = 1; i <= parseInt(localStorage.getItem("blocksl3")); i++) {
  if(parseInt(localStorage.getItem("blocksl3")) === 20 || parseInt(localStorage.getItem("blocksl3")) === 25 ){
    cont.style.gridTemplateColumns = `repeat(5, 52px)`;
  }
  else if (parseInt(localStorage.getItem("blocksl3")) === 30){ 
    cont.style.gridTemplateColumns = `repeat(6, 52px)`
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


const changeMode = () =>{
  let mode = localStorage.getItem("mode")
if(mode === "dark"){
  all.style.backgroundColor = "black"
  timer.style.color = "black"
  timer.style.backgroundColor = "white"
  h1.style.color = "white"
  navbar.style.backgroundColor = "white"
  navbarText.forEach((text)=>{
  text.style.color= "black"
  life1.style.color = "white"
  life2.style.color = "white"
  life3.style.color = "white"
  })
  scoring.style.color = "white"
}
else if (mode === "light"){
  all.style.backgroundColor = "#F6F5F2"
  timer.style.color = "white"
  timer.style.backgroundColor = "black"
  h1.style.color = "black"
  navbar.style.backgroundColor = "black"
  navbarText.forEach((text)=>{
  text.style.color= "white"
  life1.style.color = "black"
  life2.style.color = "black"
  life2.style.color = "black"
  })
  scoring.style.color = "black"
}

}

const changeBlockShape = () =>{
  const fullSquare = String.fromCharCode(9632)
  const fullCircle = String.fromCharCode(9679)
  const fullStar = String.fromCharCode(9733)
  const fullHeart = String.fromCharCode(9829)
if(localStorage.getItem("blocks-shape") === "circle"){

slots.forEach((slot)=>{
slot.style.borderRadius="50px"
})
life1.textContent = fullCircle
life2.textContent = fullCircle
life3.textContent = fullCircle

}
else if(localStorage.getItem("blocks-shape") === "square"){
slots.forEach((slot)=>{
  slot.style.borderRadius="none"
})
life1.innerText = fullSquare
life2.innerText = fullSquare
life3.innerText = fullSquare
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
  life1.innerText = fullStar
  life2.innerText = fullStar
  life3.innerText = fullStar
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
    life1.textContent = fullHeart
    life2.innerText = fullHeart
    life3.innerText = fullHeart
  }
}


const winning = () =>{
  audio.pause()
  const winaudios = ["win1.mp3", "win2.mp3", "win3.mp3", "win4.mp3", "win5.mp3", "win6.mp3", "win8.mp3"]
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


const losing = () => {
  const square = String.fromCharCode(9633); 
  const fullSquare = String.fromCharCode(9632); 
  const circle = String.fromCharCode(9675); 
  const fullCircle = String.fromCharCode(9679); 
  const star = String.fromCharCode(9734); 
  const fullStar = String.fromCharCode(9733); 
  const heart = String.fromCharCode(9825); 
  const fullHeart = String.fromCharCode(9829); 
  

  let life1 = document.querySelector("#life1");
  let life2 = document.querySelector("#life2");
  let life3 = document.querySelector("#life3");

  // Check if all lives are empty, indicating a loss
  if (life2.innerText === square || life2.innerText === circle || life2.innerText === star  || life2.innerText === heart)  {
    const lossaudios = ["lose1.mp3", "lose2.mp3", "lose3.mp3", "lose4.mp3", "lose5.mp3", "lose6.mp3", "lose7.mp3"];
    let rand = Math.floor(Math.random() * lossaudios.length);
    const loseaudio = new Audio(`sounds/${lossaudios[rand]}`);
    audio.pause()
    loseaudio.play();
    loseaudio.addEventListener('ended', () => {
      loseaudio.currentTime = 0; 
      
    });
    if(localStorage.getItem("blocks-shape") === "square"){
    life1.innerText = fullSquare
    life2.innerText = fullSquare
    life3.innerText = fullSquare
    }
    if(localStorage.getItem("blocks-shape") === "circle"){
    life1.innerText = fullCircle
    life2.innerText = fullCircle
    life3.innerText = fullCircle
    }
    if(localStorage.getItem("blocks-shape") === "heart"){
    life1.innerText = fullHeart
    life2.innerText = fullHeart
    life3.innerText = fullHeart
    }
    if(localStorage.getItem("blocks-shape") === "star"){
    life1.innerText = fullStar
    life2.innerText = fullStar
    life3.innerText = fullStar
    }

    lose.style.opacity = 1;
    lose.style.display = "block";
    lose.style.pointerEvents = "all";
    
    clearInterval(timerStart); // Stop the timer
    scoreVal = 0; // Reset score
    scoring.innerText = "000";
    return; // Exit the function after a loss
  }

  // Update lives logic: lose one life at a time
  if (life1.innerText === fullSquare && life2.innerText === fullSquare && life3.innerText === fullSquare) {
    life3.innerText = square; // Lose third life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullSquare && life2.innerText === fullSquare) {
    life2.innerText = square; // Lose second life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullSquare) {
    life1.innerText = square; // Lose first life
    loseLife.currentTime = 0
    loseLife.play()
  }

  if (life1.innerText === fullStar && life2.innerText === fullStar && life3.innerText === fullStar) {
    life3.innerText = star; // Lose third life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullStar && life2.innerText === fullStar) {
    life2.innerText = star; // Lose second life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullStar) {
    life1.innerText = star; // Lose first life
    loseLife.currentTime = 0
    loseLife.play()
  }

  if (life1.innerText === fullHeart && life2.innerText === fullHeart && life3.innerText === fullHeart) {
    life3.innerText = heart; // Lose third life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullHeart && life2.innerText === fullHeart) {
    life2.innerText = heart; // Lose second life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullHeart) {
    life1.innerText = heart; // Lose first life
    loseLife.currentTime = 0
    loseLife.play()
  }

  if (life1.innerText === fullCircle && life2.innerText === fullCircle && life3.innerText === fullCircle) {
    life3.innerText = circle; // Lose third life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullCircle && life2.innerText === fullCircle) {
    life2.innerText = circle; // Lose second life
    loseLife.currentTime = 0
    loseLife.play()
  } else if (life1.innerText === fullCircle) {
    life1.innerText = circle; // Lose first life
    loseLife.currentTime = 0
    loseLife.play()
  }
};


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
  scoreVal = 0
  scoring.innerText = "000"
  timer.innerText = "30"
  lose.style.opacity = 0
  lose.style.display = "none"
  start.style.opacity = 1
  start.style.display = "block"
  slots.forEach((slot) =>{
    slot.style.pointerEvents = "none"
  })
}

// Function to handle color change
const colorChange = () => {
  slots.forEach((slot) =>{
    slot.style.pointerEvents = "all"
  })
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
    let again1 = win.querySelector(".againbtn1")
      done.addEventListener("click", () => {
        location.href="index.html"
      })

      again1.addEventListener("click", ()=>{
        reset()
        win.style.display = "none"
        win.style.opacity = 0
      })
    return;
  }
}



changeBlockShape()
changeMode()



  slots.forEach((slot) => {
    slot.addEventListener("click", ()=>{
      if (slot.classList.contains("diff")){
        colorChange()
        game++
        scoreVal +=5
        scoring.innerText = `${scoreVal.toString()}`
      }
      else{
        losing()
      }
    })
  })

  

// Start button click event
button.addEventListener("click", colorChange);

start.addEventListener("click", countdownTimer)

again.addEventListener("click", ()=>{
  reset()
})

}


