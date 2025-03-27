const renderCards = () => {
    let cardsGroup = document.querySelector('#cardsGroup');
    let component = `
        <article class="main-cards__card">
            <div class="main-cards__icon">
                <img 
                    src="/assets/icons/Grupo de máscara 2.svg" 
                    alt="Icone de alvo com uma flecha no meio com o fundo branco" 
                    title="Icone de alvo"
                />
            </div>
            <div class="main-cards__card-text">
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua</p>
            </div>
        </article>
    `;
    for (let i = 0; i < 10; i++) {
        cardsGroup.innerHTML += component;
    }
}

export default renderCards;