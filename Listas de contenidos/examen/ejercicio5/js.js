// JavaScript to handle smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of an interactive element
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Imagen seleccionada: ' + img.alt);
    });
});
