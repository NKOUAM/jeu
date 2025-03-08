// Récupérer les éléments du formulaire et les messages d'erreur
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Fonction pour valider les règles du mot de passe
function validatePassword(password) {
  // Vérifie la longueur du mot de passe
  if (password.length < 8) {
    return "Le mot de passe doit contenir au moins 8 caractères.";
  }
  // Vérifie la présence de chiffres, lettres et caractères spéciaux
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!regex.test(password)) {
    return "Le mot de passe doit contenir au moins une lettre, un chiffre et un caractère spécial.";
  }
  return null;
}

// Fonction pour valider le formulaire
function validateForm(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  // Réinitialiser les messages d'erreur
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Vérification du mot de passe
  const password = passwordInput.value;
  const passwordValidationError = validatePassword(password);
  if (passwordValidationError) {
    passwordError.textContent = passwordValidationError;
    return;
  }

  // Vérification de la correspondance des mots de passe
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
    return;
  }

  // Si tout est valide, soumettre le formulaire (ici, juste un message)
  alert("Compte créé avec succès !");
  passwordForm.reset(); // Réinitialiser le formulaire
}

// Ajouter un écouteur d'événements pour la soumission du formulaire
passwordForm.addEventListener('submit', validateForm);
