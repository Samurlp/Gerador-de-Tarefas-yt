// Define um componente funcional chamado Title que recebe "children" como propriedade
function Title({children}){
    return (
        // Retorna um elemento h1 estilizado com classes do Tailwind CSS
        <h1 className="text-3xl text-slate-100 font- text-center">
            {children} {/* Renderiza o conteúdo passado como children dentro do h1 */}
        </h1>
    );
}

// Exporta o componente Title para ser utilizado em outros arquivos
export default Title;