/* =====================================================
   TARAFFO MOTOS
   ANIMATIONS
===================================================== */

window.addEventListener("load", () => {

    /* =========================
       LATIDO DE BOTONES
    ========================= */

    const menuBtn = document.querySelector(".menu-btn");
    const whatsappBtn = document.querySelector(".whatsapp-btn");

    setTimeout(() => {

        menuBtn?.classList.add("pulse");

        setTimeout(() => {

            menuBtn?.classList.remove("pulse");

        }, 600);

    }, 1700);

    setTimeout(() => {

        whatsappBtn?.classList.add("pulse");

        setTimeout(() => {

            whatsappBtn?.classList.remove("pulse");

        }, 600);

    }, 2100);

});


/* =========================
   APARICIÓN DE SECCIONES
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold:0.15

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("reveal");

    observer.observe(section);

});


/* =========================
   FLECHA DE GALERÍAS
========================= */

document.querySelectorAll(".gallery").forEach((gallery) => {

    gallery.classList.add("hint");

    gallery.addEventListener("animationend", () => {

        gallery.classList.remove("hint");

    });

    gallery.addEventListener("scroll", () => {

        gallery.classList.remove("hint");

    }, {

        once:true

    });

});