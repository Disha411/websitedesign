// target element  = nav class
// perform element = tbtn
// for change icon = icon id

// create a variable
let btn = document.querySelector(".tbtn")
let menu = document.querySelector(".nav")
let i = document.getElementById("icon")
btn.addEventListener("click", function () {
    menu.classList.toggle("navigation");

    if (menu.classList.contains("navigation") == true) {
        i.classList.remove("fa-chart-simple")
        i.classList.add("fa-xmark")
    } else {
        i.classList.remove("fa-xmark")
        i.classList.add("fa-chart-simple")
    }
})