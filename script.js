// const play = document.querySelector(".play")

// play.addEventListener("click", ()=>{
//   location.href="level1.html"

// })

const instruction = document.querySelector(".viewIns")
const instructions = document.querySelector("#overlay")
const popup = document.querySelector("#popupDialog")

const custom = document.querySelector("#overlay2")
const customizer = document.querySelector("#popupDialog2")
const custombtn = document.querySelector(".custombtn")
const close = document.querySelector("#closebtn")
const close2 = document.querySelector("#closebtn2")

instruction.addEventListener("click", ()=>{
  instructions.style.display ="block" 
  popup.style.display = "block"
})


custombtn.addEventListener("click", ()=>{
  custom.style.display ="block" 
  customizer.style.display = "block"
  if(localStorage.getItem("blocks-shape") === "circle"){
      circle.style.backgroundColor = "blue"
    }
    else if(localStorage.getItem("blocks-shape") === "square"){
        square.style.backgroundColor = "blue"
      }
      else if(localStorage.getItem("blocks-shape") === "star"){
        star.style.backgroundColor = "blue"
      }
      else if(localStorage.getItem("blocks-shape") === "heart"){
        heart.style.backgroundColor = "blue"
      }
})

close.addEventListener("click", ()=>{
  instructions.style.display ="none" 
  popup.style.display = "none"
})

close2.addEventListener("click", ()=>{
  custom.style.display ="none" 
  customizer.style.display = "none"
})

const circle = document.querySelector("#circle")
const square = document.querySelector("#square")
const star = document.querySelector("#star")
const heart = document.querySelector("#heart")


circle.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "circle")
  square.style.backgroundColor ="aqua"
  star.style.backgroundColor = "aqua"
  heart.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "blue"
  
})
square.addEventListener("click", ()=>{
  square.style.backgroundColor = "blue"
  star.style.backgroundColor = "aqua"
  heart.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "aqua"
  localStorage.setItem("blocks-shape", "square")
})
star.addEventListener("click", ()=>{
  star.style.backgroundColor = "blue"
  square.style.backgroundColor ="aqua"
  heart.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "aqua"
  localStorage.setItem("blocks-shape", "star")
})
heart.addEventListener("click", ()=>{
  heart.style.backgroundColor = "blue"
  square.style.backgroundColor ="aqua"
  star.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "aqua"
  localStorage.setItem("blocks-shape", "heart")
})

if(localStorage.getItem("blocks-shape") === null){
  localStorage.setItem("blocks-shape", "square")
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}



