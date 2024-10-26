let mockup = document.querySelector(".mockup");
let partTop = document.getElementById("partTop");
let elements = document.querySelectorAll(".element")
let hasAnimated = false;

document.addEventListener("scroll", () => {
    if (window.scrollY > 100 && !hasAnimated) {
        hasAnimated = true;
        partTop.style.transform = "translate3d(0, 0, 0) rotateX(0deg)";
        mockup.classList.add("loaded");
        elements.forEach(function (element) {
            element.classList.remove("hidden-oval")
            element.classList.add("vivible-oval")
        });
    }
})

const arrowLeft = document.querySelector('.firstFrame .arrowLeft');
const arrowRight = document.querySelector('.firstFrame .arrowRight');
const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    updateArrows();
}

function updateArrows() {
    if (currentSlideIndex === 0) {
        arrowLeft.style.display = 'none';
    } else {
        arrowLeft.style.display = 'block';
    }
    if (currentSlideIndex === slides.length - 1) {
        arrowRight.style.display = 'none';
    } else {
        arrowRight.style.display = 'block';
    }
}

arrowLeft.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
});

arrowRight.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
});

showSlide(currentSlideIndex);

