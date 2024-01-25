/*--------------------------------------------------------------
    # Side Bar Open Close Logic
    --------------------------------------------------------------*/
    const toggleBtn = document.querySelector(".toggle-btn");
    const toggleBtnIcon = document.querySelector(".toggle-btn i");
    const sideBarMenu = document.querySelector(".sidebar-menu");
    const overlay = document.querySelector(".overlay");

    toggleBtn.addEventListener("click", function () {
        sideBarMenu.classList.toggle("open");

        const isOpen = sideBarMenu.classList.contains("open");

        toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });

    function closeSidebar() {
        sideBarMenu.classList.remove("open");
        overlay.style.display = "none";
        toggleBtnIcon.classList = "fa-solid fa-bars";
    }

    window.addEventListener("click", function (event) {
        if (
            !sideBarMenu.contains(event.target) && // Clicked outside the sidebar
            event.target !== toggleBtnIcon // Clicked outside the toggle button
        ) {
            closeSidebar();
        }
    });