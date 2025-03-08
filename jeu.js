// Variables
let currentQuestion = {};
let score = 0;

// Fonction pour générer une nouvelle question
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let questionText = `${num1} ${operation} ${num2}`;
  let answer;

  // Calcul de la réponse en fonction de l'opération
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
  }

  currentQuestion = {
    questionText,
    answer
  };

  // Affichage de la question
  document.getElementById('question').textContent = `Question: ${questionText}`;
  document.getElementById('result').style.display = 'none';
  document.getElementById('nextQuestion').style.display = 'none';
}

// Vérification de la réponse de l'utilisateur
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('userAnswer').value);

  if (userAnswer === currentQuestion.answer) {
    document.getElementById('result').style.color = 'green';
    document.getElementById('result').textContent = 'Bonne réponse !';
    score++;
  } else {
    document.getElementById('result').style.color = 'red';
    document.getElementById('result').textContent = `Mauvaise réponse ! La bonne réponse était ${currentQuestion.answer}.`;
  }

  // Afficher le résultat et le bouton pour passer à la question suivante
  document.getElementById('result').style.display = 'block';
  document.getElementById('nextQuestion').style.display = 'block';
}

// Passer à la question suivante
function nextQuestion() {
  document.getElementById('userAnswer').value = '';
  generateQuestion();
  document.getElementById('nextQuestion').style.display = 'none';
}

// Ajouter les événements
document.getElementById('submitAnswer').addEventListener('click', checkAnswer);
document.getElementById('nextQuestion').addEventListener('click', nextQuestion);

// Générer la première question au chargement
generateQuestion();
