document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }
});

function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const targetPosition = targetSection.offsetTop;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}

  