// Define um componente funcional chamado Button que recebe "props" como propriedade
function Button(props){
    return (
        // Retorna um elemento <button> estilizado com Tailwind CSS
        <button 
            {...props} // Repassa todas as propriedades recebidas para o botão
            className="bg-slate-400 p-2 rounded-md text-white" // Estilo do botão
        >
            {/* Exibe o conteúdo passado como "children" dentro do botão */}
            {props.children}
        </button>
    );
}

// Exporta o componente Button para ser utilizado em outros arquivos
export default Button;