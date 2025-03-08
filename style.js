// Animation simple au clic sur un lien
document.querySelectorAll('.enfant a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêcher la navigation instantanée
    let targetUrl = this.getAttribute('href');

    // Effet de transition
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = '#ecf0f1';

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // Transition de 0.5s avant redirection
  });
});

// Code pour animer le footer au survol
const footer = document.querySelector('footer');
footer.addEventListener('mouseenter', function() {
  footer.style.backgroundColor = '#1abc9c';
});

footer.addEventListener('mouseleave', function() {
  footer.style.backgroundColor = '#34495e';
});
