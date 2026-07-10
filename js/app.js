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


/*==============================
        HERO SLIDER
==============================*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if(slides.length && next && prev){

    let current = 0;

    function showSlide(index){

        slides.forEach(slide=>slide.classList.remove("active"));

        dots.forEach(dot=>dot.classList.remove("active"));

        slides[index].classList.add("active");

        if(dots[index]){

            dots[index].classList.add("active");

        }

    }

    function nextSlide(){

        current++;

        if(current>=slides.length){

            current=0;

        }

        showSlide(current);

    }

    function prevSlide(){

        current--;

        if(current<0){

            current=slides.length-1;

        }

        showSlide(current);

    }

    next.addEventListener("click",nextSlide);

    prev.addEventListener("click",prevSlide);

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            current=index;

            showSlide(current);

        });

    });

    setInterval(nextSlide,5000);

}


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


/*=================================
        CONTACT FAQ
==================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*=================================
        COPY ACCOUNT NUMBER
==================================*/

const copyButton = document.querySelector(".copy-account-btn");

if(copyButton){

    copyButton.addEventListener("click", () => {

        navigator.clipboard.writeText("0123456789");

        copyButton.innerHTML = '<i class="fas fa-check"></i> Account Number Copied';

        setTimeout(() => {

            copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy Account Number';

        }, 2000);

    });

}

/*=================================
        PRELOADER
==================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.classList.add("hide");

    }

});

/*=================================
        SCROLL PROGRESS
==================================*/

const progressBar = document.getElementById("scroll-progress");

if(progressBar){

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}

/*=================================
        BACK TO TOP
==================================*/

const backToTop = document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*=================================
        SCROLL REVEAL
==================================*/

const reveals = document.querySelectorAll(".reveal");

if(reveals.length){

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:0.15

    });

    reveals.forEach(section=>{

        revealObserver.observe(section);

    });

}

/*=================================
        STAGGERED CARDS
==================================*/

const revealCards = document.querySelectorAll(".reveal-card");

if(revealCards.length){

    const cardObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const cards = entry.target.parentElement.children;

                [...cards].forEach((card,index)=>{

                    setTimeout(()=>{

                        card.classList.add("show");

                    },index*100);

                });

            }

        });

    },{

        threshold:.2

    });

    revealCards.forEach(card=>{

        cardObserver.observe(card);

    });

}

/*=================================
        ACTIVE NAVIGATION
==================================*/

const currentPage = window.location.pathname.split("/").pop();

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(link=>{

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});


// hamburger

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});

/*=================================
        GALLERY LIGHTBOX
==================================*/

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const prevImage = document.getElementById("prevImage");

const nextImage = document.getElementById("nextImage");

if(galleryImages.length && lightbox){

    let currentImage = 0;

    function showImage(index){

        lightboxImage.src = galleryImages[index].currentSrc || galleryImages[index].src;

    }

    galleryImages.forEach((image,index)=>{

        image.addEventListener("click",()=>{

            currentImage = index;

            showImage(currentImage);

            lightbox.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });

    closeLightbox.addEventListener("click",()=>{

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    });

    nextImage.addEventListener("click",()=>{

        currentImage++;

        if(currentImage >= galleryImages.length){

            currentImage = 0;

        }

        showImage(currentImage);

    });

    prevImage.addEventListener("click",()=>{

        currentImage--;

        if(currentImage < 0){

            currentImage = galleryImages.length - 1;

        }

        showImage(currentImage);

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            lightbox.classList.remove("show");

            document.body.style.overflow = "";

        }

    });

}

/*=================================
        IMAGE LOADING
==================================*/

const images = document.querySelectorAll(".gallery-image");

images.forEach(image=>{

    if(image.complete){

        image.classList.add("loaded");

    }else{

        image.addEventListener("load",()=>{

            image.classList.add("loaded");

        });

    }

});


