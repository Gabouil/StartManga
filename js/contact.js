const burger = document.querySelector(".burger");

// clique burger

burger.addEventListener('click', function() {
    burger.classList.toggle('open');
    document.querySelector(".nav_header").classList.toggle('open');
});