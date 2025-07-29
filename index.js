const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})
    ;

function toggleAccordion(header) {
    const item = header.parentElement;
    item.classList.toggle("open");
};

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navbar").classList.remove("active");
  });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hamburger').addEventListener('click', function() {
        document.getElementById('navbar').classList.toggle('active');
    });
});