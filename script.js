let slideIndex = 0;
const slides = document.querySelectorAll('.features-img img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }
    slides[slideIndex].style.display = 'block';
}

function changeSlide(offset) {
    showSlide(slideIndex + offset);
}

setInterval(() => {
    changeSlide(1);
}, 5000); // Altere aqui para controlar o tempo de transição

showSlide(slideIndex); // Iniciar a apresentação de slides
