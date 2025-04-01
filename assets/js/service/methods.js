// Documentação sobre o uso do for in props: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Documentação sobre Falsy em comparações lógicas (.trim()): https://developer.mozilla.org/en-US/docs/Glossary/Falsy
export const validarForms = (campos) => {
    for (const prop in campos) {
        if(!campos[prop].trim()) return prop;
    }
    return false;
}