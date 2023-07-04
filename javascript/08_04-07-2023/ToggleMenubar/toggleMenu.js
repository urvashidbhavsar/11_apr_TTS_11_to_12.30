// click on btn
let toggleBtn = document.querySelector(".tbtn");
// target = menubar 
let nav = document.querySelector(".menubar")
// use add event listner 
toggleBtn.addEventListener("click", function () {
    nav.classList.add("nav-toggle");
})

// for close menu 
let closebtn = document.querySelector(".cbtn");
closebtn.addEventListener("click", function () {
    nav.classList.remove("nav-toggle");
})