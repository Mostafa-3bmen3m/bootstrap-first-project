const slider = document.querySelector(".container-3");
const slide = document.querySelectorAll(".content-3");
const next = querySelector(".next");
const prev = querySelector(".prev");

let curruntIndex = 0;

function updateSlide() {
    slider.style.transform=`translateX=(-${curruntIndex * 100}%)`
}
next.addeEventListener("click" , ()=>{
    curruntIndex = (curruntIndex + 1) % slide.length;
    updateSlide();
})