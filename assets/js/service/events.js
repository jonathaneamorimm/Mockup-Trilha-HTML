import { postData } from "./api.js";
import { validarForms } from "./methods.js";

export default function setupEventListeners() { // Função base de iniciação de eventos
    const submitButton = document.querySelector('#submitForms');
    const buttonMenu = document.querySelector('#buttonMenu');
    const close_menu = document.querySelector("#close_menu");

    buttonMenu.addEventListener('click', () => { 
        const menubar = document.querySelector('#menubar');
        let value = menubar.getAttribute("data-status"); 
        if(value === 'close') { // Nessa função é controlado o atributo data-status para saber se está aberto ou fechado
            menubar.classList.add('open');
            menubar.setAttribute('data-status', 'open');
        } else {
            menubar.classList.remove('open');
            menubar.setAttribute('data-status', 'close');
        }
    });

    close_menu.addEventListener('click', () => {
        const menubar = document.querySelector('#menubar');
        menubar.classList.remove('open');
        menubar.setAttribute('data-status', 'close');
    })

    submitButton.addEventListener('click', () => {        
        const data = {
            lorem1: document.querySelector('#lorem1').value,
            lorem2: document.querySelector('#lorem2').value,
            lorem3: document.querySelector('#lorem3').value,
            lorem4: document.querySelector('#lorem4').value,
            lorem5: document.querySelector('#lorem5').value
        };

        const fields = document.querySelectorAll('input[required]'); // Caputura todos os inputs com o atributo required

        // Padrão sem estilização (se a função rodar novamente aplicará a estilização)
        fields.forEach(field => {
            field.style.borderColor = ''; 
        });

        let test = validarForms(data);

        if(!test) { // se o teste rodar falso, ou seja, sem erros executa o post
            postData(data)
            .then(() => {
                alert('Inserted data!');
            }).catch(err => {
                alert('Error: ', err);
            })
        } else {
            alert(`Error: O campo ${test} não pode estar vazio!`);
            let field = document.querySelector(`#${test}`);
            field.style.borderColor = 'red';
        }
    })
}