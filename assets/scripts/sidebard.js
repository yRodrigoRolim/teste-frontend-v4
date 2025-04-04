document.getElementById("sidebard-config").addEventListener("click", function () {
    if (window.innerWidth <= 640) return; // Só executa se a tela for menor que 640px
    const sidebar = document.getElementById("sidebar-container");
    const disableMobileElements = document.querySelectorAll(".disable-sidebar");
    const logosidebar = document.getElementById("disable-sidebar-logo");
    // Alterna largura da sidebar
    if (sidebar.classList.contains("w-12")) {
        sidebar.classList.remove("w-12");
        sidebar.classList.add("w-64");
        document.getElementById("sidebard-config").classList.remove("rotate-180")

        // Mostra os elementos
        disableMobileElements.forEach(el => {
            el.classList.remove("opacity-0");
            el.classList.add("opacity-100"); // ou remova a classe dependendo do seu estilo
        });

        logosidebar.classList.remove("hidden")
    } else {
        sidebar.classList.remove("w-64");
        sidebar.classList.add("w-12");
        document.getElementById("sidebard-config").classList.add("rotate-180")
        // Oculta os elementos
        disableMobileElements.forEach(el => {
            el.classList.remove("opacity-100");
            el.classList.add("opacity-0");
        });
        setTimeout(() => {
            logosidebar.classList.add("hidden")
        }, 150);

    }
});

document.getElementById("sidebard-config").addEventListener("click", function () {
    if (window.innerWidth >= 640) return; // Só executa se a tela for menor que 640px
    const nav = document.querySelector("#sidebar-icons nav")
    const a = document.querySelectorAll("#sidebar-icons nav a")
    if (nav.classList.contains("!h-0")) {
        document.getElementById("sidebard-config").classList.add("rotate-180")

        nav.classList.add("py-2")
        nav.classList.remove("!h-0")
        a.forEach(element => {
            element.classList.remove("opacity-0")
        });
    } else {
        nav.classList.remove("py-2")
        nav.classList.add("!h-0")
        document.getElementById("sidebard-config").classList.remove("rotate-180")

        a.forEach(element => {
            element.classList.add("opacity-0")
        });
    }
});