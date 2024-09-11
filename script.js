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


/// DESIGN

function fallingShapes() {
  let e = document.createElement("div");
  let size = Math.random() * 12;
  let duration = Math.random() * 3;

  e.setAttribute("id", "fallingShape");
  document.body.appendChild(e);

  e.style.left = Math.random() * +innerWidth + "px";
  e.style.fontSize = 12 + size + "px";
  e.style.animationDuration = 4 + duration + "s";

  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);

  // Get the stylesheet
  const stylesheet = document.styleSheets[0]; // This assumes the first stylesheet in the document
      
  // Check if the stylesheet is accessible
  if (!stylesheet) {
    console.error('Stylesheet not found');
    return;
  }

  // Loop through all CSS rules
  let ruleFound = false;
  for (let i = 0; i < stylesheet.cssRules.length; i++) {
    const rule = stylesheet.cssRules[i];

    // Check for the rule that defines the #fallingShape::before selector
    if (rule.selectorText === "#fallingShape::before") {
      ruleFound = true;
      const shape = localStorage.getItem("blocks-shape");
      if (shape === "circle") {
        rule.style.content = '"\\f111"'; 
      } else if (shape === "square") {
        rule.style.content = '"\\f0c8"'; 
      } else if (shape === "star") {
        rule.style.content = '"\\f005"'; 
      } else if (shape === "heart") {
        rule.style.content = '"\\f004"'; 
      }
      let mode= localStorage.getItem("mode")
    if(mode === "light"){
      rule.style.color = "black"
    }
    else if (mode === "dark"){
      rule.style.color = "white"
    }
      break; // Exit loop once the rule is found
    }
    

  }
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
              all.style.backgroundColor = "#F6F5F2"
              dark.style.backgroundColor = "darkviolet"
              light.style.backgroundColor = `rgb(215, 141, 243)`
              h1.style.color = "black"
              navbar.style.backgroundColor = "black"
              navbarText.forEach((text)=>{
                text.style.color= "white"
              })
              custombtn.style.backgroundColor="black"
              instruction.style.backgroundColor="black"
            
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
              instruction.style.backgroundColor="white"
          }

          fallingShapes()
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
      
      const changeShape = () => {
        square.style.backgroundColor ="aqua"
        star.style.backgroundColor = "aqua"
        heart.style.backgroundColor = "aqua"
        circle.style.backgroundColor = "aqua"
        
      
        // Set background colors based on localStorage value
          const shape = localStorage.getItem("blocks-shape");
          if (shape === "circle") {
            circle.style.backgroundColor = "blue";

          } else if (shape === "square") {
            square.style.backgroundColor = "blue";
            

          } else if (shape === "star") {
            star.style.backgroundColor = "blue";

          } else if (shape === "heart") {
            heart.style.backgroundColor = "blue";

          }
          fallingShapes()
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
  changeShape()
  
})
square.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "square")
  changeShape()
})
star.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "star")
  changeShape()
})
heart.addEventListener("click", ()=>{
  localStorage.setItem("blocks-shape", "heart")
  changeShape()
})


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


changeMode()




setInterval(function () {
  fallingShapes();
}, 100);








