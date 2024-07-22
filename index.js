const box = document.getElementById("user");
const comp = document.getElementById("computer");
const rock = document.getElementById("myBtnR");
const paper = document.getElementById("myBtnP");
const scissor = document.getElementById("myBtnS");


function changeR (){
   box.src = "Rock.jpg";
   let random = Math.floor(Math.random() * 4);

   if (random == 1) {
      comp.src ="Rock.jpg";
    }
    else if (random == 2) {
      comp.src ="Paper.jpg";
    }
    else {
      comp.src = "scissor.jpg"
    }
}
function changeP (){
    box.src = "Paper.jpg";

    let random = Math.floor(Math.random() * 4);
    if (random == 1) {
      comp.src ="Rock.jpg";
    }
    else if (random == 2) {
      comp.src ="Paper.jpg";
    }
    else {
      comp.src = "scissor.jpg"
    }
 }
 function changeS (){
    box.src = "scissor.jpg";

    let random = Math.floor(Math.random() * 4);
    if (random == 1) {
      comp.src ="Rock.jpg";
    }
    else if (random == 2) {
      comp.src ="Paper.jpg";
    }
    else {
      comp.src = "scissor.jpg"
    }
 }

rock.addEventListener("click", changeR);
paper.addEventListener("click", changeP);
scissor.addEventListener("click", changeS);


 