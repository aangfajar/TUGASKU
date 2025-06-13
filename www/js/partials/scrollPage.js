export function scrollPage(){
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-menu');

    // Observer saat user scroll manual
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks.forEach(link => {
            if (link.getAttribute('data-scrollto') === id) {
            link.classList.add('active');
            }
        });
        }
    });
    }, {
    threshold: 0.5,
    root: null, // pakai null kalau scroll di window
    });

    // Fungsi scroll ke section saat klik menu
    navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-scrollto');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    if (observer){
        navLinks.forEach(l => l.classList.remove('active'));
    }
    });
    
    sections.forEach(section => observer.observe(section));
}