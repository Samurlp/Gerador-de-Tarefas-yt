// Define um componente funcional chamado Input que recebe "props" como propriedade
function Input(props){
    return(
        // Retorna um elemento <input> estilizado com Tailwind CSS
        <input
            className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            {...props} // Repassa todas as propriedades recebidas para o elemento <input>
        />
    );
}

// Exporta o componente Input para ser utilizado em outros arquivos
export default Input;