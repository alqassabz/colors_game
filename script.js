// const play = document.querySelector(".play")

// play.addEventListener("click", ()=>{
//   location.href="level1.html"

// })

const instruction = document.querySelector(".viewIns")
const instructions = document.querySelector("#overlay")
const popup = document.querySelector("#popupDialog")

const custom = document.querySelector("#overlay")
const custo = document.querySelector("#popupDialog")
const close = document.querySelector("#closebtn")

instruction.addEventListener("click", ()=>{
  instructions.style.display ="block" 
  popup.style.display = "block"
})

close.addEventListener("click", ()=>{
  instructions.style.display ="none" 
  popup.style.display = "none"
})

