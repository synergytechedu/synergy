/* =====================================
   FAQ ACCORDION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector("button");
        const answer = item.querySelector(".faq-answer");

        if (!button || !answer) return;

        answer.style.maxHeight = "0px";

        button.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(faq => {

                faq.classList.remove("active");

                const content =
                    faq.querySelector(".faq-answer");

                if (content) {
                    content.style.maxHeight = "0px";
                }

            });

            if (!isOpen) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";
            }

        });

    });

});


/* =====================================
   NAVBAR SHADOW
===================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(`
    .card,
    .timeline-item,
    .course-card,
    .faq-item,
    .vision-card,
    .community,
    .section-header,
    .hero-content,
    .learning-paths
`);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});


/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================
   HERO FLOAT EFFECT
===================================== */

const hero = document.querySelector(".hero");

if (hero) {

    hero.addEventListener("mousemove", (e) => {

        const x =
            (window.innerWidth / 2 - e.clientX) / 40;

        const y =
            (window.innerHeight / 2 - e.clientY) / 40;

        hero.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        hero.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

}


/* =====================================
   CURRENT YEAR
===================================== */

const yearElement =
    document.querySelector(".current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}