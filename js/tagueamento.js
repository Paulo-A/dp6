// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

const path = window.location.pathname;
if (path === '/analise'){
    eventAnalysisPage();
} else if (path === '/sobre'){
    eventAboutPage();
}
eventDefault();

function eventDefault() {
    document.getElementsByClassName('menu-lista-contato')[0].addEventListener('click', function(){
        console.log('Contato event sent');
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    });

    document.getElementsByClassName('menu-lista-download')[0].addEventListener('click', function () {
        console.log('Download event sent');
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    });
};

function eventAnalysisPage(){
    const card = document.getElementsByClassName('card-montadoras');
    card[0].addEventListener('click', analysisFieldClick(card[0].dataset.name));
    card[1].addEventListener('click', analysisFieldClick(card[1].dataset.name));
    card[2].addEventListener('click', analysisFieldClick(card[2].dataset.name));
};

function analysisFieldClick(event_label) {
    console.log('Analise event sent');
    ga('send', 'event', 'analise', 'ver_mais', event_label);
};

function eventAboutPage(){
    const formContact = document.getElementsByClassName('contato')[0]

    formContact[0].addEventListener('blur', formFieldFill(formContact.id));
    formContact[1].addEventListener('blur', formFieldFill(formContact.id));
    formContact[2].addEventListener('blur', formFieldFill(formContact.id));

    formContact[4].addEventListener('submit', function () {
        console.log('Sobre event sent');
        ga('send', 'event', 'contato', 'enviado', 'enviado');
    });
};

function formFieldFill(event_action){
    console.log('Sobre event sent');
    ga('send', 'event', 'contato', event_action, 'preencheu');
};