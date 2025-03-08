// Variables
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Fonction pour ajouter une tâche
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');

    // Créer le texte de la tâche
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Créer le bouton de suppression
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteButton);

    // Créer l'effet de complétion de la tâche
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Ajouter la tâche à la liste
    taskList.appendChild(li);

    // Réinitialiser l'input
    taskInput.value = "";
  }
}

// Ajouter la tâche quand on clique sur le bouton "Ajouter"
addTaskButton.addEventListener('click', addTask);

// Ajouter la tâche quand on appuie sur la touche Entrée
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
