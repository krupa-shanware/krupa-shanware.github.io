function toggleMenu () {
    /*Target the 2 elements
    When we click it, add or remove open class in that element*/
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}