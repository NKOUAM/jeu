// Récupération des éléments
const userChoiceElement = document.getElementById('userChoice');
const computerChoiceElement = document.getElementById('computerChoice');
const winnerElement = document.getElementById('winner');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Fonction pour générer un choix aléatoire pour l'ordinateur
function getComputerChoice() {
  const choices = ['Pierre', 'Papier', 'Ciseaux'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Fonction pour déterminer le gagnant
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'C\'est une égalité!';
  } else if (
    (userChoice === 'Pierre' && computerChoice === 'Ciseaux') ||
    (userChoice === 'Papier' && computerChoice === 'Pierre') ||
    (userChoice === 'Ciseaux' && computerChoice === 'Papier')
  ) {
    return 'Vous avez gagné!';
  } else {
    return 'L\'ordinateur a gagné!';
  }
}

// Fonction pour jouer une manche
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  userChoiceElement.textContent = `Votre choix: ${userChoice}`;
  computerChoiceElement.textContent = `Choix de l'ordinateur: ${computerChoice}`;
  const result = determineWinner(userChoice, computerChoice);
  winnerElement.textContent = `Résultat: ${result}`;
}

// Ajouter des écouteurs d'événements pour chaque bouton
rockButton.addEventListener('click', () => playGame('Pierre'));
paperButton.addEventListener('click', () => playGame('Papier'));
scissorsButton.addEventListener('click', () => playGame('Ciseaux'));
