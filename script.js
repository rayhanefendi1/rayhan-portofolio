// 1. Mengubah tampilan Navbar saat di-scroll agar lebih tegas
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Saat di-scroll ke bawah
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.08)';
    } else {
        // Saat kembali ke paling atas
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
    }
});

// 2. Efek Animasi Muncul (Fade-in & Slide-up) pada Section saat di-scroll
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    threshold: 0.15, // Animasi terpicu saat 15% bagian section terlihat di layar
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Hentikan observasi setelah animasi selesai
        }
    });
}, observerOptions);

// Menerapkan kondisi awal (tersembunyi) pada setiap section
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(section);
});