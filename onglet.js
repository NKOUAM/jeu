// Fonction pour ouvrir un onglet
function openTab(evt, tabName) {
  // Cacher tous les contenus d'onglets
  let tabContentItems = document.querySelectorAll('.tab-content-item');
  tabContentItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Retirer la classe 'active' des boutons des onglets
  let tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });

  // Afficher le contenu de l'onglet sélectionné
  document.getElementById(tabName).classList.add('active');

  // Ajouter la classe 'active' au bouton de l'onglet sélectionné
  evt.currentTarget.classList.add('active');
}

// Ouvrir le premier onglet par défaut
document.querySelector('.tab-button').click();
