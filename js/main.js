/* =========================
   SPLASH
========================= */

window.addEventListener("load", () => {

    // Siempre arrancamos arriba del todo.
    window.scrollTo(0, 0);

    const splash = document.getElementById("splash");

    setTimeout(() => {

        splash.classList.add("subir");

        setTimeout(() => {

            splash.style.display = "none";

        }, 900);

    }, 700);

});


/* =========================
   MENÚ
========================= */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("activo");

});

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("activo");

    });

});


/* =========================
   HEADER
========================= */

const header = document.querySelector(".header");

let lastScroll = 0;

function controlarHeader() {

    // En desktop el header siempre queda visible.
    if (window.innerWidth >= 1024) {

        header.classList.remove("oculto");
        header.classList.add("chico");

        return;

    }

    const currentScroll = window.scrollY;

    // Arriba del todo.
    if (currentScroll <= 0) {

        header.classList.remove("chico");
        header.classList.remove("oculto");

        lastScroll = 0;

        return;

    }

    // Header compacto.
    header.classList.add("chico");

    // Ocultar al bajar.
    if (currentScroll > lastScroll && currentScroll > 80) {

        header.classList.add("oculto");

    }

    // Mostrar al subir.
    if (currentScroll < lastScroll) {

        header.classList.remove("oculto");

    }

    lastScroll = currentScroll;

}

window.addEventListener("scroll", controlarHeader);
window.addEventListener("resize", controlarHeader);

// Estado inicial.
controlarHeader();

//boton de compra
document.querySelectorAll(".comprar-ultimo-tomo")
.forEach(boton => {

    boton.addEventListener("click", async (e) => {

        e.preventDefault();

        const respuesta = await fetch(
            "https://taraffo-digital-backend.onrender.com/api/payments/create-preference",
            {
                method: "POST"
            }
        );

        const data = await respuesta.json();

        window.location.href = data.init_point;

    });

});
