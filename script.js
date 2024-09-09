const instruction = document.querySelector(".viewIns")
const instructions = document.querySelector("#overlay")
const popup = document.querySelector("#popupDialog")
const custom = document.querySelector("#overlay2")
const customizer = document.querySelector("#popupDialog2")
const custombtn = document.querySelector(".custombtn")
const close = document.querySelector("#closebtn")
const close2 = document.querySelector("#closebtn2")
const circle = document.querySelector("#circle")
const square = document.querySelector("#square")
const star = document.querySelector("#star")
const heart = document.querySelector("#heart")
const level1 = document.querySelector("#l1")
const level2 = document.querySelector("#l2")
const level3 = document.querySelector("#l3")
const blockNum1 = document.querySelector("#b1")
const blockNum2 = document.querySelector("#b2")
const blockNum3 = document.querySelector("#b3")
const boardSize = document.querySelector(".slider")


if(localStorage.getItem("blocks-shape") === null){
  localStorage.setItem("blocks-shape", "square")
}


// INSTRUCTIONS

instruction.addEventListener("click", ()=>{
  instructions.style.display ="block" 
  popup.style.display = "block"
})


close.addEventListener("click", ()=>{
  instructions.style.display ="none" 
  popup.style.display = "none"
})

close2.addEventListener("click", ()=>{
  custom.style.display ="none" 
  customizer.style.display = "none"
})



// CUSTOMIZATIONS

const changeLevel =() =>{
  if(localStorage.getItem("level")!= null){
    if(localStorage.getItem("level") === "1"){
        level1.style.backgroundColor = `lightpink`
      }
    else if(localStorage.getItem("level") === "2"){
      console.log("reached")
          level2.style.backgroundColor = `lightpink`
        }
    else if(localStorage.getItem("level") === "2"){
          level3.style.backgroundColor = `lightpink`
        }
      }
}

const changeShape = () =>{

  if(localStorage.getItem("blocks-shape")!= null){
    if(localStorage.getItem("blocks-shape") === "circle"){
          circle.style.backgroundColor = "blue"
        }
    else if(localStorage.getItem("blocks-shape") === "square"){
            square.style.backgroundColor = "blue"
          }
    else if(localStorage.getItem("blocks-shape") === "star"){
            star.style.backgroundColor = "blue"
          }
          else{
            heart.style.backgroundColor = "blue"
          }
        }
}


const changeSize = () =>{
  if(localStorage.getItem("blocksl1")!= null || localStorage.getItem("blocksl2")!= null || localStorage.getItem("blocksl3")!= null){
    if( localStorage.getItem("level") === "1" ){
        if(localStorage.getItem("blocksl1") === "9"){
            blockNum1.style.backgroundColor = "lightgreen"
        }
        else if (localStorage.getItem("blocksl1") === "12") {
          blockNum2.style.backgroundColor = "lightgreen"
        }
        else{
          blockNum3.style.backgroundColor = "lighgreen"
        }
        }
    else if( localStorage.getItem("level") === "2" ){
          if(localStorage.getItem("blocksl2") === "20"){
              blockNum1.style.backgroundColor = "lightgreen"
          }
          else if (localStorage.getItem("blocksl2") === "25") {
            blockNum2.style.backgroundColor = "lightgreen"
          }
          else{
            blockNum3.style.backgroundColor = "lighgreen"
          }
          }

          else{
            if(localStorage.getItem("blocksl3") === "20"){
              blockNum1.style.backgroundColor = "lightgreen"
          }
          else if (localStorage.getItem("blocksl3") === "25") {
            blockNum2.style.backgroundColor = "lightgreen"
          }
          else{
            blockNum3.style.backgroundColor = "lighgreen"
          }
          }
        }
}


const selectedShapes = () =>{
  if(localStorage.getItem("blocks-shape")!= null){
  if(localStorage.getItem("blocks-shape")==="circle"){
  square.style.backgroundColor ="aqua"
  star.style.backgroundColor = "aqua"
  heart.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "blue"
}
else if(localStorage.getItem("blocks-shape")==="square"){
  square.style.backgroundColor = "blue"
  star.style.backgroundColor = "aqua"
  heart.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "aqua"
}
else if(localStorage.getItem("blocks-shape")==="star"){
  star.style.backgroundColor = "blue"
  square.style.backgroundColor ="aqua"
  heart.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "aqua"
}
else{
  heart.style.backgroundColor = "blue"
  square.style.backgroundColor ="aqua"
  star.style.backgroundColor = "aqua"
  circle.style.backgroundColor = "aqua"
}
  }

}

// EVENT LISTENERS CUSTOMIZATION

custombtn.addEventListener("click", ()=>{
  custom.style.display ="block" 
  customizer.style.display = "block"
  changeLevel()
  changeShape()
  changeSize()
})


circle.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "circle")
  selectedShapes()
  
})
square.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "square")
  selectedShapes()
})
star.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "star")
  selectedShapes()
})
heart.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "heart")
  selectedShapes()
})

const selectedLevel = () =>{
  if(localStorage.getItem("blocks-shape")!= null){
    if(localStorage.getItem("level")==="1"){
  level1.style.backgroundColor = `lightpink`
  level2.style.backgroundColor = `red`
  level3.style.backgroundColor = `red`
    }
    else if(localStorage.getItem("level")==="2"){
      level1.style.backgroundColor = `red`
      level2.style.backgroundColor = 'lightpink'
      level3.style.backgroundColor = `red`
    }
    else{
      level1.style.backgroundColor = `red`
  level3.style.backgroundColor = 'lightpink'
  level2.style.backgroundColor = `red`
    }
  }
}

const updateBlocks = () =>{
  if(localStorage.getItem("level") === "1"){
    blockNum1.innerText = "9 Blocks"
    blockNum2.innerText = "12 Blocks"
    blockNum3.innerText = "16 Blocks"
    }
    else if(localStorage.getItem("level") === "2" ||localStorage.getItem("level") === "3" ){
      if(localStorage.getItem("blocks") === "9"){
        localStorage.setItem("blocks", "20")
      }
      else if(localStorage.getItem("blocks") === "12"){
        localStorage.setItem("blocks", "25")
      }
      else if(localStorage.getItem("blocks") === "16"){
        localStorage.setItem("blocks", "30")
      }
      blockNum1.innerText = "20 Blocks"
      blockNum2.innerText = "25 Blocks"
      blockNum3.innerText = "30 Blocks"
      }
}


level1.addEventListener("click", ()=>{
  localStorage.setItem("level", "1")
  selectedLevel()
  updateBlocks()
})

level2.addEventListener("click", ()=>{
  localStorage.setItem("level", "2")
  selectedLevel()
  updateBlocks()
})
level3.addEventListener("click", ()=>{
  localStorage.setItem("level", "3")
  selectedLevel()
  updateBlocks()
})



blockNum1.addEventListener("click", ()=>{
  blockNum2.style.backgroundColor ="green"
  blockNum3.style.backgroundColor = "green"
  blockNum1.style.backgroundColor = "lightgreen"
  if(localStorage.getItem("level")==="1"){
  localStorage.setItem("blocksl1", "9")
  }
  else{
    localStorage.setItem("blocksl2", "20")
    localStorage.setItem("blocksl3", "20")
  }
})



blockNum2.addEventListener("click", ()=>{
  blockNum2.style.backgroundColor = "lightgreen"
  blockNum1.style.backgroundColor = "green"
  blockNum3.style.backgroundColor = "green"
  if(localStorage.getItem("level")==="1"){
  localStorage.setItem("blocksl1", "12")
  }
  else{
    localStorage.setItem("blocksl2", "25")
    localStorage.setItem("blocksl3", "25")
  }
})




blockNum3.addEventListener("click", ()=>{
  blockNum3.style.backgroundColor = "lightgreen"
  blockNum1.style.backgroundColor ="green"
  blockNum2.style.backgroundColor = "green"
  if(localStorage.getItem("level")==="1"){
  localStorage.setItem("blocksl1", "16")
  }
  else{
    localStorage.setItem("blocksl2", "30")
    localStorage.setItem("blocksl3", "30")
  }
})








