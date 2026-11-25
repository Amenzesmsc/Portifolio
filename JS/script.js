
/* =====================================
   AMENZES - JAVASCRIPT
===================================== */


/* BOTÃO CONHEÇA MINHA HISTÓRIA */

function conhecerArtista() {

    const historia = document.getElementById("historia");

    if (historia) {

        historia.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =====================================
   MENU MOBILE
===================================== */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");


if (menuToggle && menu) {

    // ABRIR E FECHAR MENU

    menuToggle.addEventListener("click", function () {

        const aberto = menu.classList.toggle("ativo");

        menuToggle.setAttribute("aria-expanded", aberto);

        menuToggle.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

        menuToggle.innerHTML = aberto
            ? '<span class="fechar">✕</span>'
            : '<span></span><span></span><span></span>';

    });


    // FECHAR AO CLICAR EM UM LINK

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("ativo");

            menuToggle.innerHTML =
                '<span></span><span></span><span></span>';

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        });

    });


    // FECHAR COM A TECLA ESC

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {

            menu.classList.remove("ativo");

            menuToggle.innerHTML =
                '<span></span><span></span><span></span>';

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });


    // FECHAR SE VOLTAR PARA A TELA GRANDE

    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {

            menu.classList.remove("ativo");

            menuToggle.innerHTML =
                '<span></span><span></span><span></span>';

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });

}


/* =====================================
   ANIMAÇÕES AO ROLAR A PÁGINA
===================================== */

const elementosAnimados = document.querySelectorAll(
    ".secao, .musica-card, .projeto, .foto-principal, .foto-artista"
);

elementosAnimados.forEach(function (elemento) {

    elemento.classList.add("revelar");

});


if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver(

        function (entradas, observador) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");

                    observador.unobserve(entrada.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    elementosAnimados.forEach(function (elemento) {

        observador.observe(elemento);

    });

} else {

    // COMPATIBILIDADE COM NAVEGADORES ANTIGOS

    elementosAnimados.forEach(function (elemento) {

        elemento.classList.add("visivel");

    });

}
