// Importa os ícones ChevronRightIcon e TrashIcon da biblioteca Lucide React
import { ChevronRightIcon, TrashIcon } from "lucide-react";

// Importa o hook useNavigate do React Router para navegação entre páginas
import { useNavigate } from "react-router-dom";

// Importa o componente Button
import Button from "./Button";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    // Hook para navegação entre páginas
    const navigate = useNavigate();

    // Função para visualizar os detalhes da tarefa
    function onSeeDetailsClick(tasks){
        // Cria uma instância de URLSearchParams para armazenar os parâmetros da URL
        const query = new URLSearchParams();

        // Define os parâmetros "title" e "description" com os valores da tarefa
        query.set("title", tasks.title);
        query.set("description", tasks.description);

        // Redireciona para a página de detalhes da tarefa, passando os parâmetros na URL
        navigate(`/task?${query.toString()}`);
    }

    return(
        // Lista de tarefas com espaçamento, fundo estilizado e sombra usando Tailwind CSS
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {/* Mapeia as tarefas e renderiza cada uma dentro de um <li> */}
            {tasks.map((tasks) => (
                <li key={tasks.id} className="flex gap-2">
                    
                    {/* Botão para marcar/desmarcar a conclusão da tarefa */}
                    <button 
                        onClick={() => onTaskClick(tasks.id)} 
                        className={`bg-slate-400 text-left text-white 
                            p-2 rounded-md w-full
                            ${tasks.isCompleted && "line-through"}
                        `}
                    >
                        {tasks.title} 
                    </button>
                    
                    {/* Botão para ver detalhes da tarefa */}
                    <Button
                        onClick={() => onSeeDetailsClick(tasks)} 
                    >
                        <ChevronRightIcon />
                    </Button> 

                    {/* Botão para excluir a tarefa */}
                    <Button
                        onClick={() => onDeleteTaskClick(tasks.id)}
                    >
                        <TrashIcon />
                    </Button> 
                </li>
            ))}
        </ul>
    );
}

// Exporta o componente Tasks para ser utilizado em outros arquivos
export default Tasks;