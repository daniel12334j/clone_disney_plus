document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight; // propriedade para pegar altura do elemento
    
    window.addEventListener('scroll', function(){
        const posicaoAtual =  window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultaElementosdoHeader();
        }else{
            exibeElementodoHeader();
        }
    })

//Seção de atrações,programa de abas
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(event){
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            event.target.classList.add('shows__tabs__button--is--active');
        });
    }

    //Seção FAQ,accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreouFechaResposta);
    }
});

function ocultaElementosdoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementodoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreouFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
 // Adicionado para depuração

        elementoPai.classList.toggle(classe);

}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}
