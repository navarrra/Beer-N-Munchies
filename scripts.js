"use strict"

const menuBtn = document.querySelector(".menuicon");
const menuOverlay = document.querySelector(".menuoverlay");
const closeBtn = document.querySelector(".close");
const menuList = document.querySelectorAll(".slideitem");
const slideOutList = document.querySelector("#slideoutlist");
const container = document.querySelector(".home");
const body = document.querySelector(".home");


//Sliding menu
function menuSlide(){
   menuOverlay.classList.toggle("openmenu");
     if(!menuOverlay.classList.contains("openmenu")){
       slideOutList.classList.add("fadeinlist");
     }else{
       slideOutList.classList.remove("fadeinlist");
     };
};

body.onclick = function(event){
  if(!event.target.matches(".menuoverlay") && !event.target.matches(".menuicon")){
    menuOverlay.classList.remove("openmenu");
  }
};

menuBtn.addEventListener("click", menuSlide);
closeBtn.addEventListener("click", menuSlide);
