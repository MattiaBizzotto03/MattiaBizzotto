//menu a tendina
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


//popup per le materie
let popup = document.getElementsByClassName("popup");
console.log(popup)

function openPopup(numero){
    popup[numero - 1].classList.add("open-popup");
}

function closePopup(numero){
    popup[numero - 1].classList.remove("open-popup");
    console.log(popup)
}

//carosello nel popup di arte
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.lenght > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    showSlide (0);
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}



//immagine in cima al sito che si dissolve
window.addEventListener('scroll', function() {
    const div = this.document.querySelector('div.container_immagine');
    div.style.opacity = 1 - window.scrollY / 500;

});



//pulsante che ingrandisce nella home
const pulseButton = document.getElementById('pulse-button');

pulseButton.addEventListener('mouseover', () => {
    pulseButton.style.transform = 'scale(1.1)';
});

pulseButton.addEventListener('mouseout', () => {
    pulseButton.style.transform = 'scale(1)';
});