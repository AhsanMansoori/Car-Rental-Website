const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcons = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
  
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcons.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcons.classList.add("ri-menu-line");
});

const scrollRevealOptions = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
}

ScrollReveal().reveal('.header_image img', {
    ...scrollRevealOptions,
    origin: 'right',
});

ScrollReveal().reveal('.header_content h2', {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal('.header_content h1', {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal('.header_content .section_description', {
    ...scrollRevealOptions,
    delay: 1500,
});

ScrollReveal().reveal('.header_form form', {
    ...scrollRevealOptions,
    delay: 2000,
});

ScrollReveal().reveal('.about_card', {
    ...scrollRevealOptions,
    interval: 500,
});

const tabs = document.querySelector('.deals_tabs');

tabs.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        Array.from(tabs.children).forEach((item) => item.classList.toggle('active', item.dataset.id === e.target.dataset.id));
        document.querySelectorAll('.deals_container .tab_content').forEach((item) => item.classList.toggle('active', item.id === e.target.dataset.id));
    }
});

ScrollReveal().reveal(".choose_image img", {
    ...scrollRevealOptions,
    origin: "left",
});
ScrollReveal().reveal(".choose_content .section_header", {
    ...scrollRevealOptions,
    delay: 500,
});
ScrollReveal().reveal(".choose_content .section_description", {
    ...scrollRevealOptions,
    delay: 1000,
});
ScrollReveal().reveal(".choose_card", {
    duration: 1000,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".subscribe_image img", {
    ...scrollRevealOptions,
    origin: "right",
});
ScrollReveal().reveal(".subscribe_content .section_header", {
    ...scrollRevealOptions,
    delay: 500,
});
ScrollReveal().reveal(".subscribe_content .section_description", {
    ...scrollRevealOptions,
    delay: 1000,
});
ScrollReveal().reveal(".subscribe_content form", {
    ...scrollRevealOptions,
    delay: 1500,
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});

ScrollReveal().reveal('.client_container .section_header', {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal('.client_container .section_description', {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal('.client_container .swiper', {
    ...scrollRevealOptions,
    delay: 1500,
});
