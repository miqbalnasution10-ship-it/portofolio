// File script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Website portofolio berhasil dimuat!");

    // Smooth scrolling untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});