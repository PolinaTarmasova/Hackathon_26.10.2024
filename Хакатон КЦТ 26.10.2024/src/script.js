let mockup = document.querySelector(".mockup");
let partTop = document.getElementById("partTop");
let elements = document.querySelectorAll(".element")
let hasAnimated = false;

// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//         partTop.style.transform = "translate3d(0, 0, 0) rotateX(0deg)";
//         mockup.classList.add("loaded");
//     }, 500)
// });

document.addEventListener("scroll", () => {
    if(window.scrollY > 100 && !hasAnimated){
        hasAnimated = true;

        partTop.style.transform = "translate3d(0, 0, 0) rotateX(0deg)";
        mockup.classList.add("loaded");

        elements.forEach(function(element) {
            element.classList.remove("hidden-oval")
            element.classList.add("vivible-oval")
        });
    }
})
