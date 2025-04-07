    // Função para controlar o sidebar no modo desktop
    function handleDesktopSidebar() {
        const sidebar = document.getElementById("sidebar-container");
        const toggleButton = document.getElementById("sidebar-config");
        const disableMobileElements = document.querySelectorAll(".disable-sidebar");
        const logosidebar = document.getElementById("disable-sidebar-logo");

        if (sidebar.classList.contains("w-12")) {
            sidebar.classList.remove("w-12");
            sidebar.classList.add("sm:w-64");
            toggleButton.classList.remove("rotate-180");

            disableMobileElements.forEach(el => {
                el.classList.remove("opacity-0");
                el.classList.add("opacity-100");
            });

            logosidebar.classList.remove("hidden");
        } else {
            sidebar.classList.remove("sm:w-64");
            sidebar.classList.add("w-12");
            toggleButton.classList.add("rotate-180");

            disableMobileElements.forEach(el => {
                el.classList.remove("opacity-100");
                el.classList.add("opacity-0");
            });

            setTimeout(() => {
                logosidebar.classList.add("hidden");
            }, 150);
        }
    }

    // Função para controlar o sidebar no modo mobile
    function handleMobileSidebar() {
        const toggleButton = document.getElementById("sidebar-config");
        const nav = document.querySelector("#sidebar-icons nav");
        const links = document.querySelectorAll("#sidebar-icons nav a");

        if (nav.classList.contains("!h-0")) {
            toggleButton.classList.add("!rotate-90");
            nav.classList.add("py-2");
            nav.classList.remove("!h-0");

            links.forEach(link => link.classList.remove("opacity-0"));
        } else {
            toggleButton.classList.remove("!rotate-90");
            nav.classList.remove("py-2");
            nav.classList.add("!h-0");
            
            links.forEach(link => link.classList.add("opacity-0"));
        }
    }

    // Evento de clique único com detecção de tela
    document.getElementById("sidebar-config").addEventListener("click", function () {
        if (window.innerWidth >= 640) {
            handleDesktopSidebar();
        } else {
            handleMobileSidebar();
        }
    });