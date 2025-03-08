// script.js

const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
const scoreDisplay = document.getElementById('score');

let isJumping = false;
let score = 0;

// Fonction pour faire sauter le joueur
function jump() {
  if (!isJumping) {
    isJumping = true;
    player.style.transition = 'transform 0.5s ease-in-out';
    player.style.transform = 'translateY(-150px)';

    setTimeout(() => {
      player.style.transition = 'transform 0.5s ease-in-out';
      player.style.transform = 'translateY(0)';
      isJumping = false;
    }, 500);
  }
}

// Écouter la barre d'espace pour faire sauter le joueur
document.addEventListener('keydown', (event) => {
  if (event.key === ' ' || event.key === 'ArrowUp') {
    jump();
  }
});

// Logique de l'obstacle et collision
function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    playerRect.top < obstacleRect.bottom &&
    playerRect.left < obstacleRect.right &&
    playerRect.right > obstacleRect.left &&
    playerRect.bottom > obstacleRect.top
  ) {
    alert('Game Over! Your score: ' + score);
    resetGame();
  }
}

// Réinitialiser le jeu après une collision
function resetGame() {
  score = 0;
  scoreDisplay.innerText = 'Score: ' + score;
  obstacle.style.animation = 'none'; // Arrêter l'animation de l'obstacle
  setTimeout(() => {
    obstacle.style.animation = 'moveObstacle 2s infinite linear'; // Reprendre l'animation
  }, 50);
}

// Augmenter le score
function increaseScore() {
  score++;
  scoreDisplay.innerText = 'Score: ' + score;
}

// Vérifier toutes les secondes si le joueur n'a pas perdu
setInterval(() => {
  checkCollision();
  increaseScore();
}, 1000);
