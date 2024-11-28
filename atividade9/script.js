// Persistência de Dados

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
};

// Filtro por Status

let filtroStatus = "all";

const renderTasks = () => {
  const taskList = document.getElementById("lista-tarefa");
  taskList.innerHTML = "";

  // Filtrar tarefas com base no status
  let filteredTasks = tasks;
  if (filtroStatus === "completed") {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filtroStatus === "pending") {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  filteredTasks.forEach((task, index) => {
    const status = task.completed ? "Concluída" : "Pendente";

    const li = document.createElement("li");
    li.className = "item-tarefa";
    li.innerHTML = `
      <span>${task.name} - ${task.date} - ${task.priority} - <strong>${status}</strong></span>
      <div>
        <button onclick="toggleCompletion(${index})">${task.completed ? "Desfazer" : "Concluir"}</button>
        <button onclick="editTask(${index})">Editar</button>
        <button onclick="deleteTask(${index})">Excluir</button>
      </div>
    `;

    if (isTaskUrgent(task.date)) {
      li.classList.add("urgent");
    }

    taskList.appendChild(li);
  });
};

document.getElementById("filtro-status").addEventListener("click", () => {
  filtroStatus = filtroStatus === "all" ? "completed" : filtroStatus === "completed" ? "pending" : "all";
  renderTasks();
});

// Filtro por Prioridade

document.getElementById("filtro-prioridade").addEventListener("click", () => {
    tasks.sort((a, b) => {
      const priorityOrder = { Alta: 1, Media: 2, Baixa: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    renderTasks();
});

let isPriorityDescending = true;
document.getElementById("filtro-prioridade").addEventListener("click", () => {
  isPriorityDescending = !isPriorityDescending;

  tasks.sort((a, b) => {
    const priorityOrder = { alta: 1, media: 2, baixa: 3 };

    if (isPriorityDescending) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
  });

  renderTasks();
});

// Notificações

const isTaskUrgent = (date) => {
    const today = new Date();
    const taskDate = new Date(date);
    return taskDate - today < 2 * 24 * 60 * 60 * 1000 && taskDate >= today;
  };
  
  const notifyUrgentTasks = () => {
    tasks.forEach(task => {
      if (isTaskUrgent(task.date) && !task.completed) {
        alert(`A tarefa "${task.name}" está próxima do prazo!`);
      }
    });
  };
  
document.addEventListener("DOMContentLoaded", () => {
    notifyUrgentTasks();
});

// Edição de Tarefas

const editTask = (index) => {
    const task = tasks[index];
    const newName = prompt("Editar Nome da Tarefa:", task.name);
    const newDate = prompt("Editar Data da Tarefa:", task.date);
    const newPriority = prompt("Editar Prioridade (alta, media, baixa):", task.priority);
  
    if (newName) task.name = newName;
    if (newDate) task.date = newDate;
    if (newPriority) task.priority = newPriority;
  
    saveTasks();
    renderTasks();
};

// Funções Gerais

document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nome-tarefa").value;
    const date = document.getElementById("data-tarefa").value;
    const priority = document.getElementById("prioridade-tarefa").value;
  
    tasks.push({ name, date, priority, completed: false });
    saveTasks();
    renderTasks();
    e.target.reset();
});
  
const toggleCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
};
  
const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
};

// Inicialização

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    renderTasks();
    notifyUrgentTasks(); 
});