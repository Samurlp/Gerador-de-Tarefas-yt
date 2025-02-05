// Importa o componente Input e o hook useState do React
import Input from "./Input";
import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
    // Cria os estados para armazenar o título e a descrição da tarefa
    const[title, setTitle] = useState(""); 
    const [description, setDescription] = useState("");

    return(
        // Contêiner principal com espaçamento, fundo estilizado, bordas arredondadas e sombra
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            
            {/* Campo de entrada para o título da tarefa */}
            <Input 
                type="text" 
                placeholder="Digite o Título da tarefa"
                value={title}  // O valor do campo é o estado "title"
                onChange={(event) => setTitle(event.target.value)}  // Atualiza o título no estado quando o usuário digita
            />
            
            {/* Campo de entrada para a descrição da tarefa */}
            <Input 
                type="text" 
                placeholder="Digite a descrição da tarefa"
                value={description}  // O valor do campo é o estado "description"
                onChange={(event) => setDescription(event.target.value)}  // Atualiza a descrição no estado
            />
            
            {/* Botão para adicionar a tarefa */}
            <button 
                onClick={() => {
                    // Verifica se o título ou a descrição estão vazios
                    if(!title.trim() || !description.trim()){
                        // Alerta se título ou descrição não forem preenchidos
                        return alert("Preencha o título e a descrição da tarefa.");
                    }

                    // Chama a função onAddTaskSubmit passando o título e a descrição
                    onAddTaskSubmit(title, description);

                    // Limpa os campos de entrada após o envio
                    setTitle("");
                    setDescription("");
                }} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            >
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;