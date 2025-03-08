// Fonction pour générer un identifiant unique pour l'URL
function generateShortenedLink(url) {
  // Générer un identifiant unique basé sur l'URL et la date actuelle
  const hash = Math.random().toString(36).substring(2, 8); // Génère une chaîne de 6 caractères aléatoires
  return `${window.location.origin}/${hash}`;
}

// Fonction pour raccourcir le lien
function shortenLink() {
  const urlInput = document.getElementById('urlInput').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
  const shortenedLinkElement = document.getElementById('shortenedLink');

  // Réinitialiser les messages précédents
  errorDiv.textContent = '';
  shortenedLinkElement.textContent = '';

  if (urlInput === "") {
    errorDiv.textContent = "Veuillez entrer une URL.";
    return;
  }

  // Valider si l'URL est valide (simple validation)
  const isValidUrl = /^https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(urlInput);

  if (!isValidUrl) {
    errorDiv.textContent = "Lien non valide. Veuillez entrer une URL correcte.";
    return;
  }

  // Générer le lien raccourci
  const shortenedLink = generateShortenedLink(urlInput);

  // Afficher le lien raccourci
  shortenedLinkElement.textContent = shortenedLink;
  resultDiv.style.display = 'block';
}

// Ajouter l'événement au bouton
document.getElementById('shortenButton').addEventListener('click', shortenLink);
