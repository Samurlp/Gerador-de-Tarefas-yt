// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

// Importa os componentes da aplicação
import AddTask from "./components/AddTask"; 
import Tasks from "./components/Tasks";
import Title from "./components/Title";

// Importa a biblioteca UUID para gerar identificadores únicos
import { v4 } from "uuid";

function App() {
  // Define o estado "tasks" para armazenar a lista de tarefas
  // Inicializa com as tarefas salvas no localStorage ou um array vazio
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // useEffect para armazenar as tarefas no localStorage sempre que "tasks" mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect para buscar tarefas de uma API externa (atualmente comentado)
  useEffect(() => {
    // Código comentado que buscaria tarefas de uma API externa
    /*
    const fetchTasks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        method: 'GET'
      });
      const data = await response.json();
      setTasks(data);
    };
    
    fetchTasks();
    */
  }, []);

  // Função chamada ao clicar em uma tarefa para alternar seu estado de conclusão
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }; // Alterna entre concluído/não concluído
      }
      return task;
    });

    setTasks(newTasks);
  }

  // Função para excluir uma tarefa pelo ID
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  // Função para adicionar uma nova tarefa
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), // Gera um ID único para a nova tarefa
      title,
      description,
      isCompleted: false, // A nova tarefa começa como não concluída
    };

    setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao estado
  }

  return (
    // Estrutura da interface da aplicação com Tailwind CSS
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">

        {/* Título da aplicação */}
        <Title>Gerenciador de Tarefas</Title>

        {/* Componente para adicionar novas tarefas */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        {/* Lista de tarefas, passando as funções necessárias */}
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick} 
        />

      </div>
    </div>
  );
}

export default App;
