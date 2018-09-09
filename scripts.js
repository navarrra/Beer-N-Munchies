"use strict"

const menuBtn = document.querySelector(".menuicon");
const menuOverlay = document.querySelector(".menuoverlay");
const closeBtn = document.querySelector(".close");

const container = document.querySelector(".home");

function menuSlide(){
  const menuList = document.querySelectorAll(".slideitem");
   menuOverlay.classList.toggle("openmenu");

   for(let i=0; i<menuList.length; i++){
     setTimeout(function(){
       console.log([i]);
        menuList[i].style.display = "block";
     }, 0);
    };

};




menuBtn.addEventListener("click", menuSlide);
closeBtn.addEventListener("click", menuSlide);
