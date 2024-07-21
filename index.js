const box = document.getElementById("user");
const rock = document.getElementById("myBtnR");
const paper = document.getElementById("myBtnP");
const scissor = document.getElementById("myBtnS");


function changeR (){
   box.src = "Rock.jpg";
}
function changeP (){
    box.src = "Paper.jpg";
 }
 function changeS (){
    box.src = "scissor.jpg";
 }

rock.addEventListener("click", changeR);
paper.addEventListener("click", changeP);
scissor.addEventListener("click", changeS);