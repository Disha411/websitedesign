// target element = header element
// perform element = window

// do not create reusable function
let newTop = document.querySelector("header")
window.addEventListener("scroll", function () {
    let current = this.window.scrollY;
    if (current > 0) {
        newTop.classList.add("topheader")
    } else {
        newTop.classList.remove("topheader")
    }
})