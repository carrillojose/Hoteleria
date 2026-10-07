window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* =========================================
   HABITACIONES — SELECTOR
========================================= */

const rooms = [
    {
        number: "01",
        name: "Esencial",
        size: "24 — 28 m²",
        description:
            "Un ambiente sereno y funcional, diseñado para descansar cómodamente y disfrutar de una estancia sin complicaciones.",
        image:
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=90",
        features: [
            "2 PERSONAS",
            "CAMA QUEEN",
            "WI-FI"
        ]
    },

    {
        number: "02",
        name: "Superior",
        size: "30 — 34 m²",
        description:
            "Un espacio más amplio y luminoso, pensado para quienes buscan mayor comodidad durante su estancia.",
        image:
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=90",
        features: [
            "2 PERSONAS",
            "CAMA KING",
            "WI-FI"
        ]
    },

    {
        number: "03",
        name: "Suite",
        size: "38 — 45 m²",
        description:
            "Nuestra experiencia más completa. Un ambiente amplio y tranquilo para disfrutar de una estancia especial.",
        image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=90",
        features: [
            "3 PERSONAS",
            "CAMA KING",
            "ÁREA DE DESCANSO"
        ]
    }
];


/* =========================================
   ELEMENTOS
========================================= */

const stayImage = document.querySelector(".stay-image img");
const stayImageNumber = document.querySelector(".stay-image-number");

const stayName = document.querySelector(".stay-name h3");
const staySize = document.querySelector(".stay-content-top span:nth-child(2)");
const stayDescription = document.querySelector(".stay-description");

const stayFeatures = document.querySelector(".stay-features");

const staySelectors = document.querySelectorAll(".stay-selector");


/* =========================================
   CAMBIAR HABITACIÓN
========================================= */

function changeRoom(index) {

    const room = rooms[index];

    if (!room) return;


    /* -----------------------------------------
       ANIMACIÓN DE SALIDA
    ----------------------------------------- */

    stayImage.style.opacity = "0";

    stayName.style.opacity = "0";
    stayDescription.style.opacity = "0";


    setTimeout(() => {

        /* -----------------------------------------
           IMAGEN
        ----------------------------------------- */

        stayImage.src = room.image;

        stayImage.alt = `Habitación ${room.name} de Lúmina`;


        /* -----------------------------------------
           NÚMERO
        ----------------------------------------- */

        stayImageNumber.textContent = room.number;


        /* -----------------------------------------
           NOMBRE
        ----------------------------------------- */

        stayName.textContent = room.name;


        /* -----------------------------------------
           METROS
        ----------------------------------------- */

        staySize.textContent = room.size;


        /* -----------------------------------------
           DESCRIPCIÓN
        ----------------------------------------- */

        stayDescription.textContent = room.description;


        /* -----------------------------------------
           CARACTERÍSTICAS
        ----------------------------------------- */

        stayFeatures.innerHTML = "";

        room.features.forEach(feature => {

            const span = document.createElement("span");

            span.textContent = feature;

            stayFeatures.appendChild(span);

        });


        /* -----------------------------------------
           BOTÓN ACTIVO
        ----------------------------------------- */

        staySelectors.forEach(button => {
            button.classList.remove("active");
        });

        staySelectors[index].classList.add("active");


        /* -----------------------------------------
           ANIMACIÓN DE ENTRADA
        ----------------------------------------- */

        stayImage.onload = () => {
            stayImage.style.opacity = "1";
        };

        stayName.style.opacity = "1";
        stayDescription.style.opacity = "1";

    }, 250);
}


/* =========================================
   EVENTOS
========================================= */

staySelectors.forEach((button, index) => {

    button.addEventListener("click", () => {

        changeRoom(index);

    });

});

/* =========================================
   NAVBAR — SECCIÓN ACTIVA
========================================= */

const navLinks = document.querySelectorAll(".navbar-links a");
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 180) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === `#${currentSection}`) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);