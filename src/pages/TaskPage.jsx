// Importa o ícone ChevronsLeftIcon da biblioteca Lucide React
import { ChevronsLeftIcon } from "lucide-react";

// Importa hooks do React Router para navegação e manipulação de parâmetros da URL
import { useNavigate, useSearchParams } from "react-router-dom";

// Importa o componente de título
import Title from "../components/Title";

function TaskPage(){
    // Hook para navegação entre páginas
    const navigate = useNavigate();

    // Hook para acessar os parâmetros da URL
    const [searchParams] = useSearchParams();

    // Obtém os parâmetros "title" e "description" da URL
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return <div className="h-screen w-screen bg-slate-500 p-6">
        
        {/* Contêiner principal da página */}
        <div className="w-[500px] mx-auto space-y-4">
            
            {/* Cabeçalho da página com botão de voltar */}
            <div className="flex justify-center relative mb-6">
                
                {/* Botão para voltar à página anterior */}
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                    <ChevronsLeftIcon />
                </button>

                {/* Título da página */}
                <Title>Detalhes da Tarefa </Title>
            </div>

            {/* Card contendo os detalhes da tarefa */}
            <div className="bg-slate-200 p-4 rouded-md">
                {/* Exibe o título da tarefa */}
                <h2 className="text-xl text-white font-bold text-slate-600">{title}</h2>
                
                {/* Exibe a descrição da tarefa */}
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    </div>;
}

export default TaskPage;