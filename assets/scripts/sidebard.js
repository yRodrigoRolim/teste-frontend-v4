document.getElementById("sidebard-config").addEventListener("click", function () {
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