var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
// let Description = document.querySelector(".description");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

const card1 = document.querySelector('.result');
const card2 = document.querySelector('.box');


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
    bmr = Math.floor(10*weight.value + 6.25*height.value - 5*age.value + 5);
  }else if(female.checked){
    p.push("female");
    bmr = Math.floor(10*weight.value + 6.25*height.value - 5*age.value - 161);
  }

      
  // var result = '';
  // if(bmi<18.5){
  //   result = 'Underweight 😥';
  //    }else if(18.5<=bmi&&bmi<=24.9){
  //   result = 'Healthy 🤗';
  //    }else if(25<=bmi&&bmi<=29.9){
  //   result = 'Overweight 😵';
  //    }else if(30<=bmi&&bmi<=34.9){
  //   result = 'Obese 😨';
  //    }else if(35<=bmi){
  //   result = 'Extremely obese 🤯';
  //    }

     card1.style.transform = 'translateX(150%)';
     card2.style.transform = 'translateX(-50%)';
     card1.style.display = "block";
     card1.style.transition = "0.5s";

resultArea.style.display = "block";
//document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
// document.quarySelector(".description").innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo veritatis suscipit illum doloremque corrupti! Amet odit alias nulla debitis.`;
document.querySelector("#result").innerHTML = bmr+" "+"Calories/Days";
//document.querySelector(".description").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, harum.Lorem";

}







// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
