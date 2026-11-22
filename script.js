// Menampilkan tahun secara otomatis di footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Denis. All Rights Reserved.`;
}


// Navigasi menu aktif
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// Efek saat halaman di-scroll
window.addEventListener("scroll", function() {

    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (
            scrollPosition >= top &&
            scrollPosition < bottom
        ) {
            navLinks.forEach(link => {
                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + section.id
                ) {
                    link.classList.add("active");
                }
            });
        }
    });
});


// Pesan saat tombol About Me diklik
const aboutButton = document.querySelector(".button");

if (aboutButton) {
    aboutButton.addEventListener("click", function() {
        console.log("Welcome to my portfolio!");
    });
}