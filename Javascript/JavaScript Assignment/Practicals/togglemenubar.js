//target element => menubar class
//Perform elemnt => tbtn

//create a varible

let btn = document.querySelector(".tbtn")
let menu = document.querySelector(".menubar")
let i = document.getElementById("icon")
btn.addEventListener("click",function(){
    menu.classList.toggle("anchor")

    if (menu.classList.contains("anchor") == true) {
        i.classList.remove("fa-chart-simple")
        i.classList.add("fa-xmark")
    } else {
        i.classList.remove("fa-xmark")
        i.classList.add("fa-chart-simple")
    }
})