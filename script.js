/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const roles = [
    "Frontend Developer",
    "Problem Solver",
    "React Enthusiast",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    }
    else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();

/* =========================
   THEME TOGGLE
========================= */

const themeBtn =
    document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
        themeBtn.querySelector("i");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .info-card, .skill-card"
    );

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {
            element.classList.add("show");
        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* =========================
   NAVBAR SHADOW
========================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        if (
            scrollY >=
            sectionTop - 150
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

/* =========================
   CONTACT FORM
========================= */

const form =
    document.querySelector(
        ".contact-form"
    );

form.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Demo Portfolio: Form submitted successfully!"
        );

        form.reset();

    }
);