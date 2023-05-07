$(document).ready(function(){
    $('.testimonial-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });
  // read more function 
  const readMoreBtns = document.querySelectorAll(".card-readMore");
// const readLessBtns = document.querySelectorAll(".card-readLess");
const fullParas = document.querySelectorAll(".card-full");

for (let i = 0; i < readMoreBtns.length; i++) {
  readMoreBtns[i].addEventListener("click", function() {
    fullParas[i].classList.remove("hidden");
    readMoreBtns[i].classList.add("hidden");
  });
}

for (let i = 0; i < readLessBtns.length; i++) {
  readLessBtns[i].addEventListener("click", function() {
    fullParas[i].classList.add("hidden");
    readMoreBtns[i].classList.remove("hidden");
  });
}

// scroll function
function scrollToSection(sectionClass) {
  const section = document.querySelector(`.${sectionClass}`);
  section.scrollIntoView({ behavior: "smooth" });
}


const servicesLink = document.querySelector(".services-link");
servicesLink.addEventListener("click", () => {
  scrollToSection("services-section");
});

const aboutLink = document.querySelector(".about-link");
aboutLink.addEventListener("click", () => {
  scrollToSection("about-section");
});

const photographyLink = document.querySelector(".photography-link");
photographyLink.addEventListener("click", () => {
  scrollToSection("client-say-section");
});

const blogLink = document.querySelector(".blog-link");
blogLink.addEventListener("click", () => {
  scrollToSection("blog-post-section");
});

const contactLink = document.querySelector(".contact-link");
contactLink.addEventListener("click", () => {
  scrollToSection("contact-section");
});
// const heroSection=document.querySelector(".hero-content")
// const servicesSection=document.querySelector(".services")
// const aboutSection=document.querySelector(".about-section")
// const photographySection=document.querySelector(".slider-section")
// const blogSection=document.querySelector(".blog")
// const contactSection=document.querySelector(".contact-section")

// document.querySelector(".home-link").addEventListener("click", () => {
//   heroSection.scrollIntoView({ behavior: "smooth"})

// })
// document.querySelector(".about-link").addEventListener("click", () => {
//   aboutSection.scrollIntoView({ behavior: "smooth"})

// })
// document.querySelector(".services-link").addEventListener("click", () => {
//   servicesSection.scrollIntoView({ behavior: "smooth"})

// })




function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const goTopButton = document.querySelector(".go-top-button");
goTopButton.addEventListener("click", () => {
  scrollToTop();
});




    
  