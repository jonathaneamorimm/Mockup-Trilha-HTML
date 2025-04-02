// Documentação sobre o uso do for in props: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Documentação sobre Falsy em comparações lógicas (.trim()): https://developer.mozilla.org/en-US/docs/Glossary/Falsy
export const validarForms = (campos) => { // Cria método para validar se algum campo do formulário está vazio recebendo o objeto dos campos
    for (const prop in campos) { // For in Object campos onde cada cada campo será representado pela variável prop
        if(!campos[prop].trim()) return prop; // Se o campo estiver vazio retorna o próprio valor
    }
    return false; // padrão retorna false 
}