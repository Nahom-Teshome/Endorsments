//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

//const { url } = require("inspector")

//import {getDatabase,ref,push, onValue, remove} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// const appSetings = {
// 
// }
// const app = initializeApp(appSetings)

// const firebaseApp = initializeApp({
//   
//   firebasedatabase.app",
//   
//   });

// console.log(firebaseApp);

// const database = getDatabase(firebaseApp)
// const endoInDB = ref(database, "endoList")


const endorsementTxt = document.querySelector("#endorsement-textarea")
const publishBtn = document.querySelector("#publish-btn")
let listOfEndorsements = document.querySelector("#list-of-endorsements")
let endorsement
let from, to 
const fromInput = document.querySelector("#from-input")
const toInput = document.querySelector("#to-input")
 
publishBtn.addEventListener("click", function(){
     
      endorsement = endorsementTxt.value 
      endorsementTxt.value = ""
      from =`From: ${fromInput.value}`
      to =`To: ${toInput.value}`
      addToList(endorsement,from, to)
      
      fromInput.value = ""
      toInput.value = ""
      
    
})

function addToList(text,fromAddress,toAddress){ 
    
  let likeBtnClickedCount =0//this is the counter next to the heart,which is right now, initialized to 0

   
   
   //1)here i've created an DIV that will hold the LIKE button,the counter 
   let newEl = document.createElement('div')
   newEl.setAttribute("class","newdiv")

   //2) here i've created an "i" element and made it an icon  and appended it to the DIV
   let newElLikeBtn = document.createElement('i')
   newElLikeBtn.setAttribute("class", "fa-solid fa-heart")
  newEl.appendChild(newElLikeBtn) 
   
   //3) here i've created the paragraph that displays the number of likes on a published comment
   let likeCounter = document.createElement("p")
   likeCounter.setAttribute("class","likeCounter")
   newEl.appendChild(likeCounter)        

   //4)Here I've created the new text area that's going to display the text when publish button is hit
    let newTextArea = document.createElement('textarea')
    newTextArea.setAttribute("class","new-text-area")
    newTextArea.value = text
    newEl.appendChild(newTextArea)
  
    //this is just like the above (#4,#3,#2) i am adding to text areas to adding in the from and to addresses

    let fromTextArea = document.createElement("textarea")
    fromTextArea.setAttribute("class","from-text-area")
    fromTextArea.value = fromAddress
    newEl.appendChild(fromTextArea)

    let toTextArea = document.createElement("textarea")
    toTextArea.setAttribute("class","to-text-area")
    toTextArea.value = toAddress
    newEl.appendChild(toTextArea)

   //5)Here i append the DIV(newEl) to the <UL>
  listOfEndorsements.appendChild(newEl)
   
   //6) here i've created the function that turns the heart icon "red" when clicked 
    newElLikeBtn.addEventListener("click", function(){

            newElLikeBtn.style.color="red"
            newElLikeBtn.style.transform="skewy(1deg)"
           
        // here is where the counter is increamented upon click and assigned to the paragraph created above
            likeBtnClickedCount++
            likeCounter.textContent = likeBtnClickedCount
            
    }
    )


}

