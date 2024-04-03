const searchBtn = document.querySelector(".fa-search");
const searchContainer = document.querySelector(".search");
const btn_menu = document.querySelector(".btn_menu");
const navbar = document.querySelector(".navbar");

const btnUser = document.querySelector(".fa-user");

const btnForm = document.querySelector(".container_login");
const btnX = document.querySelector("#btn_close");

btnUser.addEventListener('click', () => {
    btnForm.classList.add('active');
});

btnX.addEventListener('click', () => {
    btnForm.classList.remove('active');
});


btn_menu.addEventListener("click", () => {
    navbar.classList.toggle('navbar_active');
});

searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle('fa-times');
    searchContainer.classList.toggle('active');
});