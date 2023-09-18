const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickSingUp = document.querySelector(".sing-up")
const arrow = document.querySelector(".arrow")

function createAnAccount(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

clickSingUp.addEventListener("click",createAnAccount)

function ToGoBack(){
   screen1.classList.toggle("hide")
   screen2.classList.toggle("hide")
}

arrow.addEventListener("click",ToGoBack)
