window.addEventListener('scroll', function() {
    const nav = document.getElementById('main-nav');
    const brand = document.getElementById('nav-brand');
    
    if (window.scrollY > 100) { // El menú se activa después de 100px de scroll
        nav.classList.add('scrolled');
        brand.classList.add('brand-hidden');
    } else {
        nav.classList.remove('scrolled');
        brand.classList.remove('brand-hidden');
    }
});