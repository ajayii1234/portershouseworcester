const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 200;

            function updateCounter() {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target.toLocaleString() + "+";

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

}, {

    threshold: .5

});

counters.forEach(counter => observer.observe(counter));


//==============================
// HERO SLIDER
//==============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));

    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextSlide(){

    current++;

    if(current >= slides.length){

        current = 0;

    }

    showSlide(current);

}

function prevSlide(){

    current--;

    if(current < 0){

        current = slides.length - 1;

    }

    showSlide(current);

}

next.addEventListener("click", nextSlide);

prev.addEventListener("click", prevSlide);

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

    });

});

setInterval(nextSlide,5000);


const header = document.getElementById("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

document.addEventListener("click", function(e){

    if(!navLinks.contains(e.target) && !hamburger.contains(e.target)){

        navLinks.classList.remove("active");

    }

});


/*=================================
    BELIEF ACCORDION
=================================*/

document.addEventListener("DOMContentLoaded", () => {

    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {

        header.addEventListener("click", () => {

            const currentItem = header.parentElement;

            // Close all other accordion items
            document.querySelectorAll(".accordion-item").forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    item.querySelector("i").classList.remove("fa-minus");
                    item.querySelector("i").classList.add("fa-plus");

                }

            });

            // Toggle current item
            currentItem.classList.toggle("active");

            const icon = header.querySelector("i");

            if (currentItem.classList.contains("active")) {

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            } else {

                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");

            }

        });

    });

});