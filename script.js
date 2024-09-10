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
const body = document.querySelector("body")
const dark = document.querySelector("#dark")
const light = document.querySelector("#light")
const all = document.querySelector("html")
const h1 = document.querySelector("h1")
const navbar = document.querySelector(".navbar")
const navbarText = document.querySelectorAll(".navbar a")

if(localStorage.getItem("blocks-shape") === null){
  localStorage.setItem("blocks-shape", "square")
}

if(localStorage.getItem("mode") === null){
  localStorage.setItem("mode", "dark")
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

const updateSelected = () =>{
  let level = localStorage.getItem("level")
  blockNum1.style.backgroundColor = "green"
  blockNum2.style.backgroundColor = "green"
  blockNum3.style.backgroundColor = "green"
  if( level === "1" ){
    if(localStorage.getItem("blocksl1") === "9"){
    blockNum1.style.backgroundColor = "lightgreen"
    }
    else if(localStorage.getItem("blocksl1") === "12"){
      blockNum2.style.backgroundColor = "lightgreen"
      }
    else if(localStorage.getItem("blocksl1") === "16"){
      blockNum3.style.backgroundColor = "lightgreen"
    }
  }

  else if( level === "2" ){
    if(localStorage.getItem("blocksl2") === "20"){
    blockNum1.style.backgroundColor = "lightgreen"
    }
    else if(localStorage.getItem("blocksl2") === "25"){
      blockNum2.style.backgroundColor = "lightgreen"
      }
    else if(localStorage.getItem("blocksl2") === "30"){
      blockNum3.style.backgroundColor = "lightgreen"
    }
  }
  else if( level === "3" ){
    if(localStorage.getItem("blocksl3") === "20"){
    blockNum1.style.backgroundColor = "lightgreen"
    }
    else if(localStorage.getItem("blocksl3") === "25"){
      blockNum2.style.backgroundColor = "lightgreen"
      }
    else if(localStorage.getItem("blocksl3") === "30"){
      blockNum3.style.backgroundColor = "lightgreen"
    }
  }
}



const changeSize = () =>{
    if( localStorage.getItem("level") === "1" ){
        if(localStorage.getItem("blocksl1") === "9"){
            blockNum1.style.backgroundColor = "lightgreen"
        }
        else if (localStorage.getItem("blocksl1") === "12") {
          blockNum2.style.backgroundColor = "lightgreen"
        }
        else {
          blockNum3.style.backgroundColor = "lightreen"
        }
      }



    else if( localStorage.getItem("level") === "2" ){
          if(localStorage.getItem("blocksl2") === "20"){
              blockNum1.style.backgroundColor = "lightgreen"
          }
          else if (localStorage.getItem("blocksl2") === "25") {
            blockNum2.style.backgroundColor = "lightgreen"
          }
          else {
            blockNum3.style.backgroundColor = "lightgreen"
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
            blockNum3.style.backgroundColor = "lightgreen"
          }
          }
        }


        const changeMode = () =>{
          let mode = localStorage.getItem("mode")
          if(mode === "light"){
              all.style.backgroundColor = "lightgray"
              dark.style.backgroundColor = "darkviolet"
              light.style.backgroundColor = `rgb(215, 141, 243)`
              h1.style.color = "black"
              navbar.style.backgroundColor = "black"
              navbarText.forEach((text)=>{
                text.style.color= "white"
              })
              custombtn.style.backgroundColor="black"
              custombtn.style.color="white"
              instruction.style.backgroundColor="black"
              instruction.style.color="white"
            
          }
          else if (mode === "dark"){
            all.style.backgroundColor = "black"
            light.style.backgroundColor = "darkviolet"
            dark.style.backgroundColor = `rgb(215, 141, 243)`
            h1.style.color = "white"
            navbar.style.backgroundColor = "white"
            navbarText.forEach((text)=>{
              text.style.color= "black"
            })
            custombtn.style.backgroundColor="white"
              custombtn.style.color="black"
              instruction.style.backgroundColor="white"
              instruction.style.color="black"
          }
        }


const changeLevel =() =>{
  const level = localStorage.getItem("level")
  level1.style.backgroundColor = "red"
  level2.style.backgroundColor = "red"
  level3.style.backgroundColor = "red"
    if(level === "1"){
        level1.style.backgroundColor = "lightpink"
        blockNum1.innerText = "9 Blocks"
        blockNum2.innerText = "12 Blocks"
        blockNum3.innerText = "16 Blocks"
        localStorage.setItem("blocksl1", "9");
        updateSelected()
      }
    else if(level === "2"){
        level2.style.backgroundColor = "lightpink"
        blockNum1.innerText = "20 Blocks"
        blockNum2.innerText = "25 Blocks"
        blockNum3.innerText = "30 Blocks"
        localStorage.setItem("blocksl2", "20");
        updateSelected()
        }
    else if(level === "3"){
        level3.style.backgroundColor = "lightpink"
        blockNum1.innerText = "20 Blocks"
        blockNum2.innerText = "25 Blocks"
        blockNum3.innerText = "30 Blocks"
        localStorage.setItem("blocksl3", "20");
        updateSelected()
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
  changeMode()
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
  changeLevel()
})

level2.addEventListener("click", ()=>{
  localStorage.setItem("level", "2")
  changeLevel()
})
level3.addEventListener("click", ()=>{
  localStorage.setItem("level", "3")
  changeLevel()
})



blockNum1.addEventListener("click", ()=>{
  const level = localStorage.getItem("level")

  blockNum1.style.backgroundColor = "lightgreen"
  blockNum2.style.backgroundColor ="green"
  blockNum3.style.backgroundColor = "green"
  if(level ==="1"){
  localStorage.setItem("blocksl1", "9")
  }
  if(level ==="2"){
    localStorage.setItem("blocksl2", "20")
    }
  if(level ==="3"){
    localStorage.setItem("blocksl3", "20")
    }
})



blockNum2.addEventListener("click", ()=>{
  const level = localStorage.getItem("level")

  blockNum1.style.backgroundColor = "green"
  blockNum2.style.backgroundColor ="lightgreen"
  blockNum3.style.backgroundColor = "green"
  if(level ==="1"){
  localStorage.setItem("blocksl1", "12")
  }
  if(level ==="2"){
    localStorage.setItem("blocksl2", "25")
    }
  if(level ==="3"){
    localStorage.setItem("blocksl3", "25")
    }
})



blockNum3.addEventListener("click", ()=>{
  const level = localStorage.getItem("level")

  blockNum1.style.backgroundColor = "green"
  blockNum2.style.backgroundColor ="green"
  blockNum3.style.backgroundColor = "lightgreen"
  if(level ==="1"){
  localStorage.setItem("blocksl1", "16")
  }
  if(level ==="2"){
    localStorage.setItem("blocksl2", "30")
    }
  if(level ==="3"){
    localStorage.setItem("blocksl3", "30")
    }
})


dark.addEventListener("click", ()=>{
  localStorage.setItem("mode", "dark")
  changeMode()
})

light.addEventListener("click", ()=>{
  localStorage.setItem("mode", "light")
  changeMode()
})











