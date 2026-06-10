// ── Nav scroll shadow ──────────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
});

// ── Burger menu ────────────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ── Smooth scroll ──────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Bilan tabs ─────────────────────────────────────────────────
document.querySelectorAll('.bilan-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const year = tab.dataset.year;

        // Mise à jour onglets
        document.querySelectorAll('.bilan-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Mise à jour contenu
        document.querySelectorAll('.bilan-content').forEach(c => c.classList.add('hidden'));
        const target = document.getElementById('bilan-year-' + year);
        target.classList.remove('hidden');
    });
});

// ── Fade-up on scroll ─────────────────────────────────────────
const fadeEls = document.querySelectorAll(
    '.section-header, .section-sub, .about-intro, .passion-row, .project-card, .bilan-tabs, .bilan-content, .hero-cv-block, .contact-card'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));
