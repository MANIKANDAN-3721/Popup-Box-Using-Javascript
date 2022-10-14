
const section =document.querySelector("section"),
overlay =document.querySelector(".overlay"),
showBtn =document.querySelector(".show-modal"),
CloseBtn =document.querySelector(".close-btn");

showBtn.addEventListener("click", ()=> section.classList.add("active"));
CloseBtn.addEventListener("click", ()=> section.classList.remove("active"));

