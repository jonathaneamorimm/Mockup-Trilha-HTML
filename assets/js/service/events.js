import { postData } from "./api.js";
import { validarForms } from "./methods.js";

export default function setupEventListeners() {
    const submitButton = document.querySelector('#submitForms');

    submitButton.addEventListener('click', () => {        
        const data = {
            lorem1: document.querySelector('#lorem1').value,
            lorem2: document.querySelector('#lorem2').value,
            lorem3: document.querySelector('#lorem3').value,
            lorem4: document.querySelector('#lorem4').value,
            lorem5: document.querySelector('#lorem5').value
        };

        const fields = document.querySelectorAll('input[required]'); // Caputura todos os inputs com o atributo required

        fields.forEach(field => {
            field.style.borderColor = ''; 
        });

        let test = validarForms(data);

        if(!test) {
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