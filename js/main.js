window.addEventListener('load', () => {
    const splash = document.getElementById('splash');

    setTimeout(() => {
        splash.classList.add('subir');

        setTimeout(() => {
            splash.style.display = 'none';
        }, 1000); 
    }, 700); 
});

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('activo');
});

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function(link){
    link.addEventListener("click", function(){
        menu.classList.remove("activo");
        });
    });

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("chico");
    } else {
        header.classList.remove("chico");
    }
});

/*const botonMenu = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function(link){
    link.addEventListener("click", function(){
        menu.classList.remove("activo");
        });
    });

botonMenu.addEventListener("click", function(){
    menu.classList.toggle("activo");
})*/